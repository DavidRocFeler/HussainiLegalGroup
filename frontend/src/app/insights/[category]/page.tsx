// app/insights/[category]/page.tsx
import { notFound } from 'next/navigation'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import NewsCardCaseStudy from '@/components/articles/NewsCard'
import { ArticleHighlightItem, InsightsCategoryPageProps } from '@/types/article'
import BlogCover from '@/components/articles/BlogCover'
import type { Metadata } from 'next'
import { getArticles, getPublications } from '@/queries/blogQuery'

export const revalidate = 86400;

export async function generateMetadata({ params }: InsightsCategoryPageProps): Promise<Metadata> {
  const { category } = params
  
  const categoryName = category.charAt(0).toUpperCase() + category.slice(1)
  
  if (category === 'articles') {
    return {
      title: `Legal Articles & Analysis - Hussaini Legal Group`,
      description: 'Expert legal articles and in-depth analysis from Hussaini Legal Group. Stay informed about corporate law, international arbitration, and legal industry developments.',
      keywords: ['legal articles', 'law analysis', 'legal insights', 'corporate law articles', 'international law', 'legal commentary'],
      openGraph: {
        title: 'Legal Articles - Hussaini Legal Group',
        description: 'Expert legal articles and analysis from international law experts',
        type: 'website',
      }
    }
  } else if (category === 'publications') {
    return {
      title: `Legal Publications & Research - Hussaini Legal Group`,
      description: 'Comprehensive legal publications and research papers from Hussaini Legal Group. Access our latest studies on international law, arbitration, and cross-border transactions.',
      keywords: ['legal publications', 'law research', 'legal papers', 'international law publications', 'arbitration research', 'legal studies'],
      openGraph: {
        title: 'Legal Publications - Hussaini Legal Group',
        description: 'Comprehensive legal publications and research from leading law experts',
        type: 'website',
      }
    }
  }
  
  return {
    title: `${categoryName} - Hussaini Legal Group`,
    description: `Browse our ${category} for expert legal insights and analysis.`,
  }
}

export async function generateStaticParams() {
  return [
    { category: 'articles' },
    { category: 'publications' }
  ]
}

const InsightsCategoryPage = async ({ params }: InsightsCategoryPageProps) => {
  const { category } = params

  if (category !== 'articles' && category !== 'publications') {
    notFound()
  }

  let itemsArray: ArticleHighlightItem[] = []
  
  try {
    if (category === 'articles') {
      itemsArray = await getArticles()
    } else {
      itemsArray = await getPublications()
    }
  } catch (error) {
    itemsArray = []
  }

  return (
    <Box 
      sx={{
        backgroundColor: 'primary.main',
        position: 'relative',
        maxHeight: 'fit-content',
        pt: { xs: 20, md: 22 },
        pr: { xs: 3, md: 9 },
        pb: { xs: 6, md: 12 },
        pl: { xs: 3, md: 9.6 },
      }}
    >
      <Typography 
        mb={1}
        sx={{
          color: 'brand.blackButton',
          fontFamily: 'Roboto',
          fontSize: '1.1rem',
          fontStyle: 'normal',
          fontWeight: 700,
          lineHeight: '1.5rem',
          letterSpacing: '-0.01rem',
          '&:hover': { color: 'brand.blackButton' },
        }}
      >
        Our Blog - {category} 
      </Typography>

      <BlogCover articlesData={itemsArray} publicationsData={itemsArray} category={category} />

      <Box sx={{ mt: 4 }}>
          {itemsArray.map((newsItem) => (
            <NewsCardCaseStudy key={newsItem.id} newsItem={newsItem} />
          ))}
      </Box>
    </Box>
  )
}

export default InsightsCategoryPage