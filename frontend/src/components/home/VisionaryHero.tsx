// components/home/VisionaryHero.tsx
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { HeroTextContent, VisionaryHeroProps } from '@/types/home';
import { discoverUsButtonData } from '@/mock/discoverUsButton.mock'; 
import ReusableContainers from '@/components/ui/ReusableContainers';

// ❌ ELIMINAR esta importación
// import { useSanityData } from '@/hook/useSanityData';
// import { getHomeHeroTexts, getStrategyHeroTexts } from '@/server/home.server';

// ✅ EXTENDER la interfaz para recibir datos como props
interface VisionaryHeroExtendedProps extends VisionaryHeroProps {
  heroHomeContent: HeroTextContent[];     // ✅ Datos desde el padre
  heroStrategyContent: HeroTextContent[]; // ✅ Datos desde el padre
}

const VisionaryHero = ({ 
  imageUrl, 
  imageAlt,
  heroHomeContent,      // ✅ Recibir como prop
  heroStrategyContent   // ✅ Recibir como prop
}: VisionaryHeroExtendedProps) => {

  // ❌ ELIMINAR estos hooks (ya no los necesitas)
  // const { data: heroHomeContent, loading } = useSanityData<HeroTextContent>(getHomeHeroTexts,)
  // const { data: heroStrategyContent  } = useSanityData<HeroTextContent>(getStrategyHeroTexts)

  // ✅ OPCIONAL: Manejar estado loading si lo necesitas
  const loading = false; // Los datos ya vienen listos desde el servidor

  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        position: 'relative',
        maxHeight: 'fit-content',
        pt: {
          xs: 8,
          md: 10
        },
        pr: {
          xs: 3,
          md: 9
        },
        pb: {
          xs: 6,
          md: 16
        },
        pl: {
          xs: 3,
          md: 9.6
        }
      }}
    >
      {/* ✅ Usar datos que vienen como props */}
      <ReusableContainers
        imageUrl={imageUrl}
        imageAlt={imageAlt}
        content={heroHomeContent}  // ✅ Datos desde props
        buttons={discoverUsButtonData} 
        alwaysExpanded={true}
        loading={loading}
      />

      {/* Bottom strategy section */}
      <Box 
        sx={{ 
          width: {
            xs: '100%',
            md: '78%'
          },
          mt: {
            xs: 6,
            md: 18
          },
        }}>
            
        {/* ✅ Usar datos que vienen como props */}
        {heroStrategyContent.map((item, index) => (
          <Box key={index} mb={3}>
            {item.category && (
              <Typography variant="h3" mb={3}>
                {item.category}
              </Typography>
            )}
            
            {item.title && (
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 400,
                  color: 'text.primary',
                }}
              >
                {item.title}
              </Typography>
            )}
            
            {item.descriptionFirst && (
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 400,
                  color: 'text.primary',
                  mt: 2,
                  mb: 2
                }}
              >
                {item.descriptionFirst}
              </Typography>
            )}
            
            {item.descriptionSecond && (
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 400,
                  color: 'text.primary',
                  mt: 2
                }}
              >
                {item.descriptionSecond}
              </Typography>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default VisionaryHero;