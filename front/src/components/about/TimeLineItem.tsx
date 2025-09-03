import { TimelineItemProps } from '@/types/about'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const TimelineItem = ({ year, description, index }: TimelineItemProps) => {
  const isEven = index % 2 === 0

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        minHeight: '100px',
        mb: '2rem',
        '@media (max-width: 699px)': {
          justifyContent: 'flex-start',
          pl: '1rem' 
        }
      }}
    >
      {/* Left */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'flex-end',
          pr: '2rem',
          '@media (max-width: 699px)': {
            display: 'none' 
          }
        }}
      >
        {isEven && (
          <Box sx={{ textAlign: 'right', width: 'full'}}>
            <Typography
               variant='h5'
               sx={{
                 color: '#891C1B',
                 fontStyle: 'normal',
                 fontWeight: 600,
                 fontSize: {
                   xs: '1rem',
                   md: '1.125rem'
                 },
                 lineHeight: {
                   xs: '1.5rem',
                   md: '1.6875rem'
                 }
               }}
            >
              {year}
            </Typography>
            <Typography
              variant='h5'
              sx={{
                color: '#23363A',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: {
                  xs: '1rem',
                  md: '1.125rem'
                },
                lineHeight: {
                  xs: '1.5rem',
                  md: '1.6875rem'
                }
              }}
            >
              {description}
            </Typography>
          </Box>
        )}
      </Box>

      {/* Circle */}
      <Box
        sx={{
          width: '0.9375rem',
          height: '0.9375rem',
          borderRadius: '50%',
          backgroundColor: '#891C1B',
          position: 'relative',
          zIndex: 2,
          top: '0.25rem',
          flexShrink: 0,
          '@media (max-width: 699px)': {
            mr: '1rem', 
            position: 'absolute',
            left: '-0.35rem',
            top: '0.25rem'
          }
        }}
      />

      {/* Right */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'flex-start',
          pl: '2rem',
          '@media (max-width: 699px)': {
            pl: 0 
          }
        }}
      >
        {!isEven && (
          <Box 
            sx={{ 
              textAlign: 'left', 
              width: 'full',
              '@media (max-width: 699px)': {
                display: 'none' 
              }
            }}
          >
            <Typography
               variant='h5'
               sx={{
                 color: '#891C1B',
                 fontStyle: 'normal',
                 fontWeight: 600,
                 fontSize: {
                   xs: '1rem',
                   md: '1.125rem'
                 },
                 lineHeight: {
                   xs: '1.5rem',
                   md: '1.6875rem'
                 }
               }}
            >
              {year}
            </Typography>
            <Typography
              variant='h5'
              sx={{
                color: '#23363A',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: {
                  xs: '1rem',
                  md: '1.125rem'
                },
                lineHeight: {
                  xs: '1.5rem',
                  md: '1.6875rem'
                }
              }}
            >
              {description}
            </Typography>
          </Box>
        )}

        <Box 
          sx={{ 
            textAlign: 'left', 
            width: 'full',
            display: 'none',
            ml: '0.5rem',
            '@media (max-width: 699px)': {
              display: 'block' 
            }
          }}
        >
          <Typography
             variant='h5'
             sx={{
               color: '#891C1B',
               fontStyle: 'normal',
               fontWeight: 600,
               fontSize: {
                 xs: '1rem',
                 md: '1.125rem'
               },
               lineHeight: {
                 xs: '1.5rem',
                 md: '1.6875rem'
               }
             }}
          >
            {year}
          </Typography>
          <Typography
            variant='h5'
            sx={{
              color: '#23363A',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: {
                xs: '1rem',
                md: '1.125rem'
              },
              lineHeight: {
                xs: '1.5rem',
                md: '1.6875rem'
              }
            }}
          >
            {description}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default TimelineItem