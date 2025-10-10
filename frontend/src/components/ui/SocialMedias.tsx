// components/SocialMedias.tsx
import { Box, IconButton } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { getSocialMediaIcon } from '@/components/ui/SocialMediaIcons';
import { SocialMediaLink } from '@/types/footer';

interface SocialMediasProps {
  socialMedias: SocialMediaLink[];
}

const SocialMedias: React.FC<SocialMediasProps> = ({ socialMedias }) => {
  const validSocialMedias = socialMedias?.filter(social => 
    social && 
    social.platform && 
    social.url && 
    typeof social.platform === 'string' &&
    typeof social.url === 'string'
  ) || [];
  
  const totalIcons = validSocialMedias.length;
  const secondRowCount = Math.max(0, totalIcons - 4);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        rowGap: 1,
        width: 'fit-content', 
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          justifyContent: 'center'
        }}
      >
        {validSocialMedias.slice(0, 4).map((social, index) => {
          const IconComponent = getSocialMediaIcon(social.platform);
          return (
            <Link 
              key={`${social.platform}-${index}`} 
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <IconButton
                sx={{
                  cursor: 'pointer',
                  color: 'primary.main',
                  border: '1px solid',
                  borderColor: 'primary.main',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  zIndex: 0,
                  '&:hover': {
                    color: 'whiteText',
                    borderColor: 'brand.whiteText'
                  }
                }}
              >
                <IconComponent />
              </IconButton>
            </Link>
          );
        })}
      </Box>
      
      {secondRowCount > 0 && (
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            justifyContent: 'center'
          }}
        >
          {validSocialMedias.slice(4, 8).map((social, index) => {
            const IconComponent = getSocialMediaIcon(social.platform);
            return (
              <Link 
                key={`${social.platform}-${index + 4}`} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <IconButton
                  sx={{
                    cursor: 'pointer',
                    color: 'primary.main',
                    border: '1px solid',
                    borderColor: 'primary.main',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    zIndex: 0,
                    '&:hover': {
                      color: 'whiteText',
                      borderColor: 'brand.whiteText'
                    }
                  }}
                >
                  <IconComponent />
                </IconButton>
              </Link>
            );
          })}
        </Box>
      )}
    </Box>
  )
}

export default SocialMedias