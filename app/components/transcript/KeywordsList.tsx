import { theme } from "@/app/constants/theme"

interface KeywordsListProps {
  keywords: string[]
}

export function KeywordsList({ keywords }: KeywordsListProps) {
  return (
    <div className="bg-white rounded-lg border border-[#f0f1fa] p-6 mb-6">
      <h2 
        className="text-lg font-semibold text-gray-900 mb-4"
        style={{ fontFamily: theme.fonts.primary }}
      >
        Mots-clés principaux
      </h2>
      
      <div className="flex flex-wrap gap-2">
        {keywords.map((keyword, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-[#f0f1fa] text-gray-700 rounded-full text-sm"
            style={{ 
              fontFamily: theme.fonts.primary,
              borderColor: theme.colors.secondary
            }}
          >
            {keyword}
          </span>
        ))}
      </div>
    </div>
  )
}