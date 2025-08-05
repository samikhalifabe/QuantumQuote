const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

// Configuration
const BASE_URL = 'http://localhost:3000';
const SCREENSHOTS_DIR = './theme-test-screenshots';

// Pages à tester
const PAGES = [
  { name: 'dashboard', path: '/' },
  { name: 'roadmap', path: '/roadmap' },
  { name: 'transcript', path: '/transcript' },
  { name: 'contact', path: '/contact' },
  { name: 'pricing', path: '/pricing' },
  { name: 'report', path: '/report' }
];

// Créer le dossier de screenshots
if (!fs.existsSync(SCREENSHOTS_DIR)) {
  fs.mkdirSync(SCREENSHOTS_DIR);
}

async function testThemes() {
  console.log('🚀 Démarrage des tests de thème...');
  
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: { width: 1440, height: 900 },
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  
  // Attendre que l'application soit prête
  await page.goto(BASE_URL, { waitUntil: 'networkidle0' });
  await page.waitForTimeout(2000);

  const results = {
    errors: [],
    warnings: [],
    success: []
  };

  for (const pageInfo of PAGES) {
    console.log(`\n📄 Test de la page: ${pageInfo.name}`);
    
    try {
      // Naviguer vers la page
      await page.goto(`${BASE_URL}${pageInfo.path}`, { waitUntil: 'networkidle0' });
      await page.waitForTimeout(1000);

      // Test en mode Light
      console.log(`  🌞 Mode Light`);
      await setTheme(page, 'light');
      await page.waitForTimeout(1000);
      
      // Vérifications mode light
      const lightIssues = await checkThemeIssues(page, 'light');
      if (lightIssues.length > 0) {
        results.errors.push({
          page: pageInfo.name,
          theme: 'light',
          issues: lightIssues
        });
      }
      
      // Screenshot mode light
      await page.screenshot({
        path: `${SCREENSHOTS_DIR}/${pageInfo.name}-light.png`,
        fullPage: true
      });

      // Test en mode Dark
      console.log(`  🌙 Mode Dark`);
      await setTheme(page, 'dark');
      await page.waitForTimeout(1000);
      
      // Vérifications mode dark
      const darkIssues = await checkThemeIssues(page, 'dark');
      if (darkIssues.length > 0) {
        results.errors.push({
          page: pageInfo.name,
          theme: 'dark',
          issues: darkIssues
        });
      }
      
      // Screenshot mode dark
      await page.screenshot({
        path: `${SCREENSHOTS_DIR}/${pageInfo.name}-dark.png`,
        fullPage: true
      });

      if (lightIssues.length === 0 && darkIssues.length === 0) {
        results.success.push(`${pageInfo.name}: ✅ Les deux thèmes fonctionnent`);
      }

    } catch (error) {
      console.error(`❌ Erreur sur ${pageInfo.name}:`, error.message);
      results.errors.push({
        page: pageInfo.name,
        theme: 'both',
        issues: [`Erreur de navigation: ${error.message}`]
      });
    }
  }

  await browser.close();
  
  // Rapport final
  console.log('\n📊 RAPPORT FINAL');
  console.log('================');
  
  if (results.success.length > 0) {
    console.log('\n✅ SUCCÈS:');
    results.success.forEach(msg => console.log(`  ${msg}`));
  }
  
  if (results.warnings.length > 0) {
    console.log('\n⚠️  AVERTISSEMENTS:');
    results.warnings.forEach(warning => {
      console.log(`  ${warning.page} (${warning.theme}): ${warning.issues.join(', ')}`);
    });
  }
  
  if (results.errors.length > 0) {
    console.log('\n❌ ERREURS À CORRIGER:');
    results.errors.forEach(error => {
      console.log(`  ${error.page} (${error.theme}):`);
      error.issues.forEach(issue => console.log(`    - ${issue}`));
    });
  }
  
  console.log(`\n📸 Screenshots sauvegardés dans: ${SCREENSHOTS_DIR}`);
  console.log(`\n📈 Résultat: ${results.success.length} pages OK, ${results.errors.length} pages avec erreurs`);
}

async function setTheme(page, theme) {
  await page.evaluate((theme) => {
    // Simuler le clic sur le toggle theme
    const themeToggle = document.querySelector('[aria-label="Toggle theme"]');
    if (themeToggle) {
      // Vérifier le thème actuel
      const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
      if (currentTheme !== theme) {
        themeToggle.click();
      }
    } else {
      // Fallback: appliquer directement
      document.documentElement.classList.toggle('dark', theme === 'dark');
    }
  }, theme);
}

async function checkThemeIssues(page, expectedTheme) {
  const issues = [];
  
  try {
    // Vérifier si le thème est appliqué correctement
    const actualTheme = await page.evaluate(() => {
      return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    });
    
    if (actualTheme !== expectedTheme) {
      issues.push(`Thème incorrect: attendu ${expectedTheme}, reçu ${actualTheme}`);
    }

    // Vérifier le background du body
    const bodyBg = await page.evaluate(() => {
      const body = document.body;
      return window.getComputedStyle(body).backgroundColor;
    });
    
    if (expectedTheme === 'dark') {
      // En mode dark, le background devrait être très sombre
      if (bodyBg.includes('255, 255, 255') || bodyBg.includes('rgb(255')) {
        issues.push(`Background mode dark incorrect: ${bodyBg}`);
      }
    } else {
      // En mode light, le background devrait être clair
      if (bodyBg.includes('18, 18, 18') || bodyBg.includes('23, 23, 23')) {
        issues.push(`Background mode light incorrect: ${bodyBg}`);
      }
    }

    // Vérifier les éléments avec des couleurs hardcodées problématiques
    const hardcodedElements = await page.evaluate(() => {
      const elements = Array.from(document.querySelectorAll('*'));
      const problematic = [];
      
      elements.forEach(el => {
        const style = window.getComputedStyle(el);
        const bg = style.backgroundColor;
        const color = style.color;
        
        // Chercher les couleurs hardcodées problématiques
        if (bg.includes('rgb(0, 0, 0)') && color.includes('rgb(0, 0, 0)')) {
          problematic.push('Élément avec texte noir sur fond noir');
        }
        if (bg.includes('rgb(255, 255, 255)') && color.includes('rgb(255, 255, 255)')) {
          problematic.push('Élément avec texte blanc sur fond blanc');
        }
      });
      
      return [...new Set(problematic)]; // Supprimer les doublons
    });
    
    issues.push(...hardcodedElements);

    // Vérifier la visibilité du toggle theme
    const themeToggleVisible = await page.evaluate(() => {
      const toggle = document.querySelector('[aria-label="Toggle theme"]');
      return toggle && window.getComputedStyle(toggle).opacity !== '0';
    });
    
    if (!themeToggleVisible) {
      issues.push('Toggle theme non visible ou non trouvé');
    }

  } catch (error) {
    issues.push(`Erreur de vérification: ${error.message}`);
  }
  
  return issues;
}

// Lancer les tests
testThemes().catch(console.error);