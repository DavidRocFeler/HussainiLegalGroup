import Image from 'next/image';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { articleBlogData } from '@/mock/articleBlog.mock';

const ArticleCover = () => {
    return (
        <Box sx={{ width: '100%' }}>
            {articleBlogData.map((article) => (
            <Card
                key={article.id}
                sx={{
                borderRadius: 0,
                boxShadow: 'none',
                overflow: 'hidden',
                backgroundColor: 'transparent',
                }}
            >

                <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: {
                    xs: '300px',
                    sm: '400px',
                    },
                    overflow: 'hidden',
                }}
                >
                <Image
                    src={article.picture}
                    alt={article.title}
                    fill
                    style={{ objectFit: 'cover', borderRadius: '0.875rem' }}
                />
                </Box>

                <Box
                    sx={{
                    mt: 2,
                    mb: 8
                }}
                >
                    <Typography
                        variant="h10"
                        textTransform={'uppercase'}
                        sx={{
                            color: 'text.secondary',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            letterSpacing: 1,
                            display: 'block',
                            marginBottom: 1,
                        }}
                    >
                    {article.label}
                    </Typography>
                    <Typography
                        variant="h10"
                        sx={{
                            fontWeight: 900,
                            color: 'brand.blackButton',
                            fontSize: {
                            xs: '2.14rem',
                            md: '2.55rem',
                            lg: '2.70rem'
                            },
                            lineHeight: '2.5rem',
                            }}
                    >                       
                    {article.title}
                    </Typography>
                </Box>
            </Card>
            ))}
        </Box>
    );
};

export default ArticleCover;