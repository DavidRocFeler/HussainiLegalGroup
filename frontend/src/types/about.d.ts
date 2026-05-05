import { StaticImageData } from "next/image"

export interface CardAboutProps {
    id: number
    title: string
    description: string
}

export interface OurEthosProps {
    title: string
    subtitle: string
}

export interface LabelAboutInfoProps {
    score: string
    description: string
    hasBorderBottom?: boolean
  }
  
export interface AboutCoverData {
    backgroundImage: StaticImageData
    labels: LabelAboutInfoProps[]
}

// ✅ NUEVO — agregar esto
export interface PreviousPosition {
  period: string
  description: string
}

// ✅ ACTUALIZADO — reemplazar solo este
export interface CardProfessionalProfileProps {
  image: StaticImageData
  name: string
  role: string
  slug: string
  email?: string
  phone?: string
  linkedin?: string
  qualifications?: string
  languages?: string[]
  previousPositions?: PreviousPosition[]
  summary?: string[]
}

export interface TimelineItemProps {
  year: string
  description: string
  index: number 
}

export interface FirstAboutSectionProps {
  heroAboutContent: HeroTextContent[];
}

export interface AboutProfessionalCardContainerProps {
  professionalProfiles: CardProfessionalProfileProps[];
}