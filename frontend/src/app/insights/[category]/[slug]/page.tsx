// app/insights/[category]/[slug]/page.tsx
import { notFound } from 'next/navigation'
import ArticleBlog from '@/components/articles/ArticleBlog'
import ArticleHighlightsSection from '@/components/articles/ArticleHighLightSection'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { ArticleHighlightItem, BlogPageProps } from '@/types/article'
import type { Metadata } from 'next'
import { getArticleBySlug, getRelatedBlogs } from '@/queries/blogQuery'

export const revalidate = 86400;

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { category, slug } = params
  
  try {
    const article = await getArticleBySlug(slug, category)
    
    if (!article) {
      return {
        title: 'Article Not Found - Hussaini Legal Group',
        description: 'The requested article could not be found.'
      }
    }

    const keywords = [article.label, category, 'legal insights', 'law firm', 'legal analysis']
      .filter((keyword): keyword is string => Boolean(keyword))

    return {
      title: `${article.title} - Hussaini Legal Group`,
      description: article.note || article.descripFirstFirst || 'Expert legal insights and analysis from Hussaini Legal Group.',
      keywords, 
      openGraph: {
        title: article.title,
        description: article.note || article.descripFirstFirst || 'Expert legal insights and analysis',
        type: 'article',
        images: article.picture ? [{ url: article.picture }] : undefined,
        publishedTime: article.date,
      },
    }
  } catch (error) {
    return {
      title: 'Article - Hussaini Legal Group',
      description: 'Legal insights and analysis from Hussaini Legal Group.'
    }
  }
}

const Blog = async ({ params }: BlogPageProps) => {
  const { category, slug } = params
  
  if (category !== 'articles' && category !== 'publications') {
    notFound()
  }

  let currentArticle: ArticleHighlightItem | null = null
  let relatedArticles: ArticleHighlightItem[] = []

  try {
    currentArticle = await getArticleBySlug(slug, category)
    
    if (!currentArticle) {
      notFound()
    }

    relatedArticles = await getRelatedBlogs(category, slug, 2)
  } catch (error) {
    notFound()
  }

  return (
    <Box
      sx={{
        backgroundColor: 'background.paper',
        position: 'relative',
        maxHeight: 'fit-content',
        pt: {
          xs: 20,
          md: 22
        },
        pr: {
          xs: 3,
          md: 9
        },
        pb: {
          xs: 6,
          md: 12
        },
        pl: {
          xs: 3,
          md: 9.6
        }
      }}
    >
      <Box
        sx={{
          borderBottom: '1px solid rgba(168, 70, 63, 0.20)',
          pb: {
            xs: 6,
            md: 20,
          },
          mb: {
            xs: 6,
            md: 10
          }
        }}
      >
        <ArticleBlog currentArticle={currentArticle} />
      </Box>

      <Typography
        variant='h10'
        color='error.dark'
        sx={{
          fontStyle: 'normal',
          fontWeight: 700,
          fontSize: '1.53806rem',
          lineHeight: '1.3rem',
          letterSpacing: '-0.01rem',
          alignSelf: 'stretch'
        }}
      >
        Related Case
      </Typography>
      
      <ArticleHighlightsSection articles={relatedArticles} />
    </Box>
  )
}

export default Blog