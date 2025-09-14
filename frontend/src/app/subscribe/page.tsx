// app/subscribe/page.tsx
import { Metadata } from 'next';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SubscribeForm from '@/components/subscribe/SubscribeForm';
import SubscribeLoopImages from '@/components/subscribe/SubscribeLoopImages';
import { SubscribeImage } from '@/types/subscribe.d';
import { getSubscribeImages } from '@/queries/subscribeImageLoopQuery';

export const metadata: Metadata = {
  title: 'Subscribe - Hussaini Legal Group Newsletter',
  description: 'Stay updated with the latest legal insights, international law developments, and expert analysis from Hussaini Legal Group. Subscribe to our newsletter for exclusive content on corporate law, arbitration, and cross-border transactions.',
  keywords: ['legal newsletter', 'law firm updates', 'international law insights', 'legal news subscription', 'corporate law newsletter', 'arbitration updates'],
  openGraph: {
    title: 'Subscribe to Hussaini Legal Group Newsletter',
    description: 'Get expert legal insights and updates from our international law experts',
    type: 'website',
  }
};

export const revalidate = 86400; 

const SubscribePage = async () => {
  let subscribeImages: SubscribeImage[] = [];
  
  try {
    subscribeImages = await getSubscribeImages();
  } catch (error) {
    subscribeImages = [];
  }

  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pt: {
          xs: 15,
          sm: 20,
          md: 26
        },
        pr: {
          xs: 2,
          sm: 4
        },
        pb: {
          xs: 9,
          md: 10
        },
        pl: {
          xs: 2,
          sm: 4
        }
      }}
    >
      <Grid
        container
        sx={{
          flexDirection: {
            xs: 'column-reverse',
            md: 'row'
          },
          maxWidth: '1200px',
          width: '100%',
          borderRadius: 2,
          overflow: 'hidden',
          backgroundColor: 'background.paper',
          '& > .MuiGrid-root': {
            flexBasis: { md: '50%' },
          }
        }}
      >
        <Grid
          size={{xs: 12, md: 6}}
          sx={{
            p: { xs: 4, md: 6 },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            bgcolor: 'white'
          }}
        >
          <SubscribeForm />
        </Grid>
        
        <Grid
          size={{xs: 12, md: 6}}
          sx={{
            bgcolor: 'primary.main',
            position: 'relative',
            minHeight: { xs: '300px', md: '400px' },
            overflow: 'hidden',
          }}
        >
          <SubscribeLoopImages initialImages={subscribeImages} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SubscribePage;