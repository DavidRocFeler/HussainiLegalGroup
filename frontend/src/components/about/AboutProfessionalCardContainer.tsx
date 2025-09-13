import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import CardProfessionalProfile from './CardProfessionalProfile'
import { AboutProfessionalCardContainerProps, CardProfessionalProfileProps } from '@/types/about'

const AboutProfessionalCardContainer = ({ professionalProfiles }: AboutProfessionalCardContainerProps) => {

  return (
    <Box 
        sx={{ 
            mt: 10, 
            position: 'relative',
        }}
    >
        <Box
            sx={{
                backgroundColor: 'grey.50',
                width: {
                md: '35rem',
                xl: '49rem'
                },
                height: '19rem',
                position: 'absolute',
                zIndex: 1,
                top: 0,
                display: {
                    xs: 'none',               
                    md: 'block' 
                },
            }}
        />

        <Typography
        variant='h9'
        sx={{
            display: {
                xs: 'block',
                md: 'none'
            },
            color: {
                xs: 'text.primary',
                md: 'brand.whiteText',
            },
            fontSize: {
                xs: '1.85rem',
                sm: '2.4rem',
                md: '2.75rem'
            },
            mb: 4,
            ml: 2,
            fontWeight: 400,
        }}
        >
            Our Team
        </Typography>
        <Box
            sx={{
                position: 'relative',
                zIndex: 2,
                width: {
                    xs: '100%',
                    md: '85%',
                },
                pt: {
                    xs: 0,
                    md: 2.4
                },
                margin: 'auto',
            }}
        >
            <Typography
                variant='h9'
                sx={{
                    display: {
                        xs: 'none',
                        md: 'block'
                    },
                    color: 'brand.whiteText',
                    fontSize: '2.75rem',
                    fontWeight: 400,
                    mb: 10
                }}
                >
                    Our Team
            </Typography>
            <Grid container spacing={{xs:4, sm:7 ,md: 5, lg: 3}}>
                {professionalProfiles.map((profile, index) => (
                <Grid 
                    key={index}
                    size={{ 
                    xs: 12,  
                    md: 6,   
                    lg: 4   
                    }}
                >
                    <CardProfessionalProfile
                    image={profile.image}
                    name={profile.name}
                    role={profile.role}
                    />
                </Grid>
                ))}
            </Grid>
        </Box>
    </Box>
  )
}

export default AboutProfessionalCardContainer