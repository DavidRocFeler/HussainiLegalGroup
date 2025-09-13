import { timelineData } from '@/mock/timeLine.mock'
import Box from '@mui/material/Box'
import TimelineItem from './TimeLineItem'

const Timeline = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        py: {
          xs: 0,
          lg: 1
        },
        px: 4,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 10,
          bottom: 18,
          width: '0.1875rem',
          backgroundColor: 'secondary.main',
          zIndex: 0,
          left: {
            xs: '2rem',
            customTimelineMobile: '50%'
          },
          transform: {
            xs: 'none',
            customTimelineMobile: 'translateX(-50%)'
          }
        }
      }}
    >
      {timelineData.map((item, index) => (
        <Box key={index} sx={{ position: 'relative' }}>
          <TimelineItem
            year={item.year}
            description={item.description}
            index={index}
          />
        </Box>
      ))}
    </Box>
  )
}

export default Timeline