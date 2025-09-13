import { CardProfessionalProfileProps } from '@/types/about'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Image from 'next/image'

const CardProfessionalProfile = ({ image, name, role }: CardProfessionalProfileProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        textAlign: 'start'
      }}
    >
      <Box
        mb={{xs:1, sm: 4}}
        sx={{
          position: 'relative',
          width: '100%',
          aspectRatio: '1/1',
          overflow: 'hidden',
        }}
      >
        <Image
          src={image}
          alt={`${name} - ${role}`}
          fill
          style={{ objectFit: 'cover' }}
        />
      </Box>
      <Typography
        variant='h10'
        mb={0.5}
        color='text.primary'
        sx={{
          fontSize: '1.125rem',
          fontStyle: 'italic',
          fontWeight: 700,
          letterSpacing: '-0.0225rem'
        }}
      >
        {name}
      </Typography>
      <Typography
        variant="h10"
        sx={{
          color: 'brand.gold',
          fontSize: '1.125rem',
          fontStyle: 'normal',
          fontWeight: 700,
          lineHeight: '1.35rem'
        }}
      >
        {role}
      </Typography>
    </Box>
  )
}

export default CardProfessionalProfile