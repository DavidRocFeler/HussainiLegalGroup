import { Box } from '@mui/material'
import React from 'react'
import ToApply from '@/components/careers/ToApply'
import BodyCareers from '@/components/careers/BodyCareers'

const CarrersPage: React.FC = () => {
  return (
    <Box>
      <BodyCareers/>
      <ToApply/>
    </Box>
  )
}

export default CarrersPage