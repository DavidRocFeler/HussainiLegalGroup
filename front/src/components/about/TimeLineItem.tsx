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
        mb: 4,
        justifyContent: {
          xs: 'flex-start',
          customTimelineMobile: 'initial'
        },
        pl: {
          xs: 2,
          customTimelineMobile: 0
        }
      }}
    >
      {/* Left */}
      <Box
        sx={{
          flex: 1,
          display: {
            xs: 'none',
            customTimelineMobile: 'flex'
          },
          justifyContent: 'flex-end',
          pr: 4
        }}
      >
        {isEven && (
          <Box sx={{ textAlign: 'right', width: 'full'}}>
            <Typography
               variant='h5'
               sx={{
                 color: 'brand.red',
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
                color: 'grey.50',
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
          backgroundColor: 'brand.red',
          position: {
            xs: 'absolute',
            customTimelineMobile: 'relative'
          },
          zIndex: 2,
          top: 6,
          flexShrink: 0,
          mr: {
            xs: '1rem',
            customTimelineMobile: 0
          },
          left: {
            xs: '-0.35rem',
            customTimelineMobile: 'auto'
          }
        }}
      />

      {/* Right */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'flex-start',
          pl: {
            xs: 0,
            customTimelineMobile: 4
          }
        }}
      >
        {/* Desktop content (shows on larger screens) */}
        {!isEven && (
          <Box 
            sx={{ 
              textAlign: 'left', 
              width: 'full',
              display: {
                xs: 'none',
                customTimelineMobile: 'block'
              }
            }}
          >
            <Typography
               variant='h5'
               sx={{
                 color: 'brand.red',
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
                color: 'grey.50',
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

        {/* Mobile content (shows on smaller screens) */}
        <Box 
          sx={{ 
            textAlign: 'left', 
            width: 'full',
            display: {
              xs: 'block',
              customTimelineMobile: 'none'
            },
            ml: 1
          }}
        >
          <Typography
             variant='h5'
             sx={{
               color: 'brand.red',
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
              color: 'grey.50',
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