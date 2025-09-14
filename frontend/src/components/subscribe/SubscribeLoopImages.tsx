// components/subscribe/SubscribeLoopImages.tsx
'use client';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Fade from '@mui/material/Fade';
import Skeleton from '@mui/material/Skeleton';
import { SubscribeLoopImagesProps } from '@/types/subscribe.d';

const SubscribeLoopImages = ({ initialImages }: SubscribeLoopImagesProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [showSkeleton, setShowSkeleton] = useState(true);

  const images = initialImages.length > 0 ? initialImages : [];
  const currentImage = images[currentImageIndex];

  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setFadeIn(true);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
    setTimeout(() => setShowSkeleton(false), 300);
  };

  useEffect(() => {
    setIsImageLoaded(false);
    setShowSkeleton(true);
  }, [currentImage?.id]);

  if (images.length === 0 || !currentImage) {
    return (
      <Skeleton
        variant="rectangular"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          bgcolor: 'primary.main',
        }}
        animation="wave"
      />
    );
  }

  return (
    <>
      {showSkeleton && (
        <Skeleton
          variant="rectangular"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            bgcolor: 'primary.main',
            zIndex: 1,
          }}
          animation="wave"
        />
      )}

      <Fade 
        in={fadeIn}
        timeout={800}
        easing={{
          enter: 'cubic-bezier(0.4, 0, 0.2, 1)',
          exit: 'cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2,
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: currentImage.showText ? 2 : 0,
              justifyContent: 'center',
              flexDirection: 'column',
              color: 'text.primary',
            }}
          >
            <Box
              sx={{
                position: 'relative',
                width: currentImage.isInitial 
                  ? { xs: 90, sm: 120, md: 140 } 
                  : '100%',
                height: currentImage.isInitial 
                  ? { xs: 70, sm: 100, md: 120 } 
                  : currentImage.showText ? '200px' : '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image
                src={currentImage.image}
                alt={currentImage.alt}
                fill
                style={{
                  objectFit: currentImage.showText ? 'contain' : 'cover',
                  objectPosition: 'center',
                  maxWidth: '100%',
                  maxHeight: '100%',
                  transition: 'opacity 0.8s ease-in-out',
                }}
                priority={currentImage.isInitial}
                onLoad={handleImageLoad}
                onError={() => {
                  setIsImageLoaded(true);
                  setShowSkeleton(false);
                }}
              />
            </Box>
            
            {currentImage.showText && currentImage.text && (
              <Fade 
                in={fadeIn} 
                timeout={1000}
                easing={{
                  enter: 'cubic-bezier(0.4, 0, 0.2, 1)',
                  exit: 'cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <Typography 
                  variant="h4" 
                  lineHeight={1.2}
                  fontWeight={300}
                  sx={{ 
                    color: 'text.primary',
                    textAlign: 'center',
                    width: '80%',
                    mt: 2,
                    fontSize: {
                      xs: '1.6rem',
                      sm: '2rem',
                      md: '2.25rem'
                    },
                  }}
                >
                  {currentImage.text}
                </Typography>
              </Fade>
            )}
          </Box>
        </Box>
      </Fade>
    </>
  );
};

export default SubscribeLoopImages;