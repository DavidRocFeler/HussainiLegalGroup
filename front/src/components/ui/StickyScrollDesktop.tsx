import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import { sectionsData } from '@/mock/stickyScrollSection.mock';
import { arrayImageScrollStiky } from '@/mock/arrayImageScrollStiky';
import { SectionScrollStiky, SectionScrollStikyImage } from '@/types/home';
import Button from '@mui/material/Button';

const StickyScrollDesktop = () => {
  const gridItems: Array<{
    type: 'image' | 'content';
    data: SectionScrollStikyImage | SectionScrollStiky;
  }> = [
    { type: 'image', data: arrayImageScrollStiky[0] },
    { type: 'content', data: sectionsData[0] },

    { type: 'content', data: sectionsData[1] },
    { type: 'image', data: arrayImageScrollStiky[1] },

    { type: 'image', data: arrayImageScrollStiky[2] },
    { type: 'content', data: sectionsData[2] },
  ];

  const formatId = (id: number): string => {
    return id < 10 ? `0${id}` : `${id}`;
  };  

  return (
    <Grid
        container 
        sx={{
        p: 0,
        m: 0,
        }}
        spacing={0}
    >
        {gridItems.map((item, index) => (
        <Grid 
            size={6}
            key={index}
            sx={{
            paddingTop: index >= 2 ? 6 : 0,
            }}
        >
            {item.type === 'image' ? (
            <Box
                sx={{
                position: 'relative',
                overflow: 'hidden',
                height: '100%',
                minHeight: '400px',
                }}
            >
                <Image
                src={(item.data as SectionScrollStikyImage).image}
                alt="Legal service image"
                fill
                style={{
                    objectFit: 'cover',
                    ...(item.data as SectionScrollStikyImage).style 
                }}
                />
            </Box>
            ) : (
            <Box
                sx={{
                bgcolor: 'brand.whiteText',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                py: 9,
                px: 2,
                height: '100%',
                minHeight: '400px',
                }}
            >
                <Typography
                mb={2}
                variant="h3"
                >
                 {formatId((item.data as SectionScrollStiky).id)}
                </Typography>
                <Typography
                variant="h4"
                mb={2}
                sx={{
                    fontWeight: 400,
                }}
                >
                {(item.data as SectionScrollStiky).title}
                </Typography>
                <Typography
                variant="h5"
                >
                {(item.data as SectionScrollStiky).description}
                </Typography>
                <Link
                href='/'
                sx={{
                    textDecoration: 'none'
                }}
                >
                    <Button 
                    disableRipple={true}
                    variant="seeMoreButton">
                        See more
                    </Button>
                </Link>
            </Box>
            )}
        </Grid>
        ))}
    </Grid>
  )
}

export default StickyScrollDesktop