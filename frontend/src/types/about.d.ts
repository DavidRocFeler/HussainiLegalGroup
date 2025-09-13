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

export interface CardProfessionalProfileProps {
  image: StaticImageData
  name: string
  role: string
}

export interface TimelineItemProps {
  year: string
  description: string
  index: number 
}