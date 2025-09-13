// components/careers/BodyCareers.tsx
'use client'
import ReusableContainers from '@/components/ui/ReusableContainers'
import Box from '@mui/material/Box'
import rectanguleCareers from '@/assets/RectanguleCareers.jpg'
import { BodyCareersProps } from '@/types/career'

const BodyCareers = ({ heroCareersContent }: BodyCareersProps) => {
  const loading = false;

  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
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
      <ReusableContainers
        imageUrl={rectanguleCareers}
        imageAlt="Legal careers and opportunities"
        content={heroCareersContent}  
        loading={loading}
      />
    </Box>
  )
}

export default BodyCareers;