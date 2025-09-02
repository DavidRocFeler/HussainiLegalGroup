import { CardProfessionalProfileProps } from '@/types/about'
import { Box, Typography } from '@mui/material'
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
        sx={{
          position: 'relative',
          width: '100%',
          aspectRatio: '1/1',
          overflow: 'hidden',
          marginBottom: '2rem'
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
        variant="h1"
        sx={{
          color: '#131313',
          fontSize: '1.125rem',
          fontStyle: 'italic',
          fontWeight: 700,
        }}
      >
        {name}
      </Typography>
      <Typography
        variant="h1"
        sx={{
          color: '#B49055',
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