import { getProfessionalProfiles, getProfessionalProfileBySlug } from '@/queries/aboutQuery'
import { notFound } from 'next/navigation'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  params: Promise<{ slug: string }>
}

// ✅ generateStaticParams desde Sanity
export async function generateStaticParams() {
  const profiles = await getProfessionalProfiles()
  return profiles.map((p) => ({ slug: p.slug }))
}

export default async function ProfessionalProfilePage({ params }: Props) {
  const { slug } = await params
  const profile = await getProfessionalProfileBySlug(slug)

  if (!profile) return notFound()

  return (
    <Box
      sx={{
        backgroundColor: 'background.paper',
        pt: { xs: 20, md: 22 },
        pr: { xs: 3, md: 9 },
        pb: { xs: 6, md: 12 },
        pl: { xs: 3, md: 9.6 },
        cursor: 'default',
        '& *': { cursor: 'default' },
      }}
    >
      <Link href="/about" style={{ textDecoration: 'none', cursor: 'default', color: 'inherit' }}>
        <Typography
          sx={{
            fontSize: '0.95rem',
            mb: 6,
            color: 'black',
            display: 'inline-block',
            cursor: 'pointer',
            '&:hover': { color: 'black' },
          }}
        >
          ← Back to About Us
        </Typography>
      </Link>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: 4, md: 8 },
          mb: 8
        }}
      >
        {/* ✅ Imagen opcional */}
        {profile.image && (
          <Box
            sx={{
              position: 'relative',
              width: { xs: '100%', md: '22rem' },
              minWidth: { md: '22rem' },
              aspectRatio: '1/1',
              overflow: 'hidden',
              flexShrink: 0
            }}
          >
            <Image
              src={profile.image}
              alt={profile.name}
              fill
              style={{ objectFit: 'cover' }}
            />
          </Box>
        )}

        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Typography
            variant='h1'
            sx={{
              fontSize: { xs: '2rem', md: '2.75rem' },
              fontWeight: 400,
              color: 'text.primary',
              mb: 1,
            }}
          >
            {profile.name}
          </Typography>

          <Typography sx={{ color: 'brand.gold', fontSize: '1.125rem', fontWeight: 700, mb: 3 }}>
            {profile.role}
          </Typography>

          <Divider sx={{ mb: 3 }} />

          {profile.email && (
            <Typography sx={{ fontSize: '0.95rem', color: 'text.secondary', mb: 1 }}>
              <strong>E</strong>{' '}
              <a href={`mailto:${profile.email}`} style={{ color: 'inherit', cursor: 'pointer', textDecoration: 'none' }}>
                {profile.email}
              </a>
            </Typography>
          )}

          {profile.phone && (
            <Typography sx={{ fontSize: '0.95rem', color: 'text.secondary', mb: 1 }}>
              <strong>T</strong> {profile.phone}
            </Typography>
          )}

          {profile.linkedin && (
            <Typography sx={{ fontSize: '0.95rem', mb: 3, color: 'text.primary' }}>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"
                style={{ color: 'inherit', cursor: 'pointer', textDecoration: 'none' }}>
                LinkedIn
              </a>
            </Typography>
          )}

          <Divider sx={{ mb: 3 }} />

          {profile.qualifications && (
            <Box mb={2}>
              <Typography sx={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08rem', color: 'text.secondary', mb: 0.5 }}>
                Qualifications
              </Typography>
              <Typography sx={{ fontSize: '0.95rem', color: 'text.primary' }}>
                {profile.qualifications}
              </Typography>
            </Box>
          )}

          {profile.languages && profile.languages.length > 0 && (
            <Box mb={2}>
              <Typography sx={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08rem', color: 'text.secondary', mb: 0.5 }}>
                Languages
              </Typography>
              <Typography sx={{ fontSize: '0.95rem', color: 'text.primary' }}>
                {profile.languages.join(', ')}
              </Typography>
            </Box>
          )}
        </Box>
      </Box>

      {profile.previousPositions && profile.previousPositions.length > 0 && (
        <Box mb={8}>
          <Typography variant='h2' sx={{ fontSize: '1.5rem', fontWeight: 400, color: 'text.primary', mb: 3 }}>
            Previous Positions
          </Typography>
          <Divider sx={{ mb: 3 }} />
          {profile.previousPositions.map((pos, index) => (
            <Box key={index} mb={2}>
              <Typography sx={{ fontSize: '0.95rem', color: 'text.secondary', fontWeight: 700 }}>
                {pos.period}
              </Typography>
              <Typography sx={{ fontSize: '0.95rem', color: 'text.primary' }}>
                {pos.description}
              </Typography>
            </Box>
          ))}
        </Box>
      )}

      {profile.summary && profile.summary.length > 0 && (
        <Box>
          <Typography variant='h2' sx={{ fontSize: '1.5rem', fontWeight: 400, color: 'text.primary', mb: 3 }}>
            Summary
          </Typography>
          <Divider sx={{ mb: 3 }} />
          {profile.summary.map((paragraph, index) => (
            <Typography key={index} sx={{ fontSize: '1rem', color: 'text.secondary', lineHeight: 1.8, mb: 2 }}>
              {paragraph}
            </Typography>
          ))}
        </Box>
      )}
    </Box>
  )
}