import { timelineData } from '@/mock/timeLine.mock'
import Box from '@mui/material/Box'
import TimelineItem from './TimeLineItem'

const Timeline = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        padding: '4rem 2rem 4rem 2rem',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '5rem',
          bottom: '9rem',
          width: '0.1875rem',
          backgroundColor: '#D6D0B3',
          zIndex: 0,
          '@media (min-width: 700px)': {
            left: '50%',
            transform: 'translateX(-50%)'
          },
          '@media (max-width: 699px)': {
            left: '2rem' 
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