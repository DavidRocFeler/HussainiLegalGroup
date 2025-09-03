import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import CardProfessionalProfile from './CardProfessionalProfile'
import { professionalProfilesData } from '@/mock/professionalProfile.mock'

const AboutProfessionalCardContainer = () => {
  return (
    <Box 
        sx={{ 
            mt: '5rem', 
            position: 'relative',
        }}
    >
        <Box
            sx={{
                display: 'block',
                backgroundColor: 'grey.50',
                width: {
                md: '35rem',
                xl: '49rem'
                },
                height: '19rem',
                position: 'absolute',
                zIndex: 1,
                top: 0,
                '@media (max-width:650px)': {
                display: 'none',
                },
            }}
        />

        <Typography
        variant='h1'
        sx={{
            display: {
                xs: 'block',
                md: 'none'
            },
            color: {
                xs: '#131313',
                md: 'white',
            },
            fontSize: {
                xs: '2.4rem',
                md: '2.75rem'
            },
            mb: '2rem',
            ml: '1rem',
            fontWeight: 400,
            '@media (max-width:500px)': {
                fontSize: '1.85rem',
            },
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
                    xs: '0rem',
                    md: '1.2rem'
                },
                margin: 'auto',
            }}
        >
            <Typography
                variant='h1'
                sx={{
                    display: {
                        xs: 'none',
                        md: 'block'
                    },
                    color: 'white',
                    fontSize: '2.75rem',
                    fontWeight: 400,
                    mb: '5rem'
                }}
                >
                    Our Team
            </Typography>
            <Grid container spacing={2} rowSpacing="3rem">
                {professionalProfilesData.map((profile, index) => (
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