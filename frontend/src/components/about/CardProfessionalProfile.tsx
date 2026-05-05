import { CardProfessionalProfileProps } from '@/types/about'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import Link from 'next/link'

const CardProfessionalProfile = ({ image, name, role, slug }: CardProfessionalProfileProps) => {
  return (
    <Link href={`/about/${slug}`} style={{ textDecoration: 'none' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          textAlign: 'start',
          cursor: 'pointer',
          '&:hover img': {
            transform: 'scale(1.03)',
            transition: 'transform 0.3s ease'
          }
        }}
      >
        <Box
          mb={{ xs: 1, sm: 4 }}
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
            style={{ objectFit: 'cover', transition: 'transform 0.3s ease' }}
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
    </Link>
  )
}

export default CardProfessionalProfile