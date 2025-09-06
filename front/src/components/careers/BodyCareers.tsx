import ReusableContainers from '@/components/ui/ReusableContainers'
import Box from '@mui/material/Box'
import rectanguleCareers from '@/assets/RectanguleCareers.jpg'
import { careersContentContainer } from '@/mock/careersContentContainer.mock'

const BodyCareers = () => {
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
        imageAlt="Legal expertise and services"
        content={careersContentContainer}
      />
    </Box>
  )
}

export default BodyCareers;