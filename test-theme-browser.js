/**
 * Script de test manuel pour le système de thème
 * 
 * Utilise ce script pour tester manuellement le thème en ouvrant le navigateur.
 * Il ouvre automatiquement toutes les pages dans des onglets séparés.
 * 
 * Usage: node test-theme-browser.js
 */

const { spawn } = require('child_process');

const BASE_URL = 'http://localhost:3001';

const PAGES = [
  { name: 'Dashboard', path: '/' },
  { name: 'Transcript', path: '/transcript' },
  { name: 'Report', path: '/report' },
  { name: 'Roadmap', path: '/roadmap' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Contact', path: '/contact' }
];

console.log('🧪 Test manuel du système de thème');
console.log('===================================');
console.log('');
console.log('📝 Checklist de test:');
console.log('');
console.log('✅ 1. Chaque page s\'ouvre dans un onglet séparé');
console.log('✅ 2. Vérifiez le toggle de thème en haut de la sidebar');
console.log('✅ 3. Testez light/dark sur chaque page');
console.log('✅ 4. Vérifiez que les boutons CTA changent de couleur');
console.log('✅ 5. Vérifiez que le background change bien');
console.log('✅ 6. Vérifiez la flèche de toggle de la sidebar');
console.log('');
console.log('🔧 Problèmes à rechercher:');
console.log('- Texte noir sur fond noir');
console.log('- Texte blanc sur fond blanc');
console.log('- Boutons qui ne changent pas de couleur');
console.log('- Background qui ne change pas');
console.log('- Éléments hardcodés qui ne s\'adaptent pas');
console.log('');

// Ouvrir toutes les pages
PAGES.forEach((page, index) => {
  setTimeout(() => {
    const url = `${BASE_URL}${page.path}`;
    console.log(`🌐 Ouverture: ${page.name} - ${url}`);
    
    // macOS
    spawn('open', [url], { stdio: 'ignore' });
  }, index * 1000); // Décalage de 1s entre chaque ouverture
});

console.log('');
console.log('⏳ Ouverture des pages en cours...');
console.log('');
console.log('🎯 Instructions de test:');
console.log('1. Attendez que toutes les pages s\'ouvrent');
console.log('2. Sur chaque page, cliquez sur le toggle thème (soleil/lune)');
console.log('3. Vérifiez la transition light ↔ dark');
console.log('4. Notez tout problème visuel');
console.log('5. Testez la flèche de collapse/expand de la sidebar');
console.log('');
console.log('📋 Pages à tester:');
PAGES.forEach(page => {
  console.log(`   - ${page.name}: ${BASE_URL}${page.path}`);
});
console.log('');
console.log('🚀 Test terminé ! Vérifiez visuellement chaque page.');