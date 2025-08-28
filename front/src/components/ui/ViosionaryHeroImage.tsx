import Image from 'next/image'
import React from 'react'
import visionaryHeroImg from '@/assets/VisionaryHero.jpg'

const ViosionaryHeroImage = () => {
  return (
    <div>
        <Image
        src={visionaryHeroImg}
        alt='Visionary Hero'
        width={400}
        height={500}
        priority
        />
    </div>
  )
}

export default ViosionaryHeroImage