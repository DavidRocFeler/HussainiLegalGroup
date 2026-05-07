// components/about/FirstAboutSection.tsx
import Box from '@mui/material/Box'
import rectanguleAbout from '@/assets/RectangleAbout.jpg'
import ReusableContainers from '@/components/ui/ReusableContainers'
import OurEthos from '@/components/about/OurEthos'
import { FirstAboutSectionProps } from '@/types/about'
import StickyScrollSections from '../home/StickyScrollSection'
import { ourEthosSectionsData } from '@/mock/ourEthosSectionData'

export const FirstAboutSection = ({ heroAboutContent }: FirstAboutSectionProps) => {
  const loading = false;

  return (
    <Box
    sx={{ width: '100%' }}
    >
        <ReusableContainers
            imageUrl={rectanguleAbout}
            imageAlt="About Hussaini Legal Group"
            content={heroAboutContent}  
            href="#read-more"
            loading={loading}
         />
      <OurEthos/>  

      <Box
      width='100%'
      >
        <StickyScrollSections
        stickyScrollData={ourEthosSectionsData}
        />
      </Box>
    </Box>
  )
}