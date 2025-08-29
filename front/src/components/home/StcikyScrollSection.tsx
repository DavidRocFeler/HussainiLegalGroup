// 'use client';

// import React from 'react';
// import { Box, Typography, LinearProgress, useTheme, useMediaQuery, Link } from '@mui/material';
// import Image from 'next/image';
// import { sectionsData } from '@/mock/stickyScrollSection.mock';

// const StickyScrollSections: React.FC = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));

//   const getFlexDirection = (index: number) => {
//     if (index === 1) { 
//       return { xs: 'column', md: 'row-reverse' };
//     }
//     return { xs: 'column', md: 'row' };
//   };

//   return (
//     <Box
//       sx={{
//         bgcolor: '#D6D0B3',
//         minHeight: '100vh',
//         position: 'relative',
//       }}
//     >
//       {/* Progress Indicator */}
//       <Box
//         sx={{
//           position: 'fixed',
//           top: 0,
//           left: 0,
//           right: 0,
//           zIndex: 1000,
//           backgroundColor: 'rgba(214, 208, 179, 0.9)',
//           backdropFilter: 'blur(10px)',
//         }}
//       >
//         <LinearProgress
//           variant="determinate"
//           value={0}
//           sx={{
//             height: 4,
//             '& .MuiLinearProgress-bar': {
//               backgroundColor: '#8B3A62',
//               transition: 'background-color 0.5s ease',
//             },
//           }}
//         />
//       </Box>

//       {/* Sections Container */}
//       <Box
//         sx={{
//           display: 'flex',
//           flexDirection: 'column',
//           pt: 1,
//         }}
//       >
//         {sectionsData.map((section, index) => (
//           <Box
//             key={section.id}
//             sx={{
//               minHeight: '100vh',
//               display: 'flex',
//               flexDirection: getFlexDirection(index),
//               position: 'relative',
//               backgroundColor: '#D6D0B3',
//             }}
//           >
//             {/* Image Section */}
//             <Box
//               sx={{
//                 flex: '1',
//                 position: 'relative',
//                 overflow: 'hidden',
//                 borderRadius: 4,
//                 m: 2,
//                 minHeight: { xs: '300px', md: 'auto' },
//                 boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
//                 transition: 'transform 0.5s ease',
//                 '&:hover': {
//                   transform: 'scale(1.02)',
//                 },
//               }}
//             >
//               <Box
//                 sx={{
//                   position: 'absolute',
//                   top: 0,
//                   left: 0,
//                   right: 0,
//                   bottom: 0,
//                   backgroundColor: section.backgroundColor,
//                   opacity: 0.9,
//                   borderRadius: 4,
//                 }}
//               />
//               <Image
//                 src={section.image}
//                 alt={section.title}
//                 fill
//                 style={{
//                   objectFit: 'cover',
//                   borderRadius: '16px',
//                 }}
//               />
//               {/* Decorative Element */}
//               <Box
//                 sx={{
//                   position: 'absolute',
//                   bottom: -50,
//                   right: -50,
//                   width: 300,
//                   height: 300,
//                   borderRadius: '50%',
//                   backgroundColor: section.backgroundColor,
//                   opacity: 0.3,
//                   filter: 'blur(40px)',
//                 }}
//               />
//             </Box>

//             {/* Content Section */}
//             <Box
//               sx={{
//                 flex: '1',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 justifyContent: 'center',
//                 p: { xs: 3, md: 6 },
//                 gap: 3,
//               }}
//             >
//               <Typography
//                 variant="h6"
//                 sx={{
//                   color: section.backgroundColor,
//                   fontWeight: 600,
//                   fontSize: { xs: '1rem', md: '1.25rem' },
//                 }}
//               >
//                 {section.id}
//               </Typography>

//               <Typography
//                 variant="h2"
//                 sx={{
//                   fontSize: { xs: '2rem', md: '3.5rem' },
//                   fontWeight: 700,
//                   lineHeight: 1.2,
//                   color: '#1a1a1a',
//                 }}
//               >
//                 {section.title}
//               </Typography>

//               <Typography
//                 variant="body1"
//                 sx={{
//                   fontSize: { xs: '0.875rem', md: '1.125rem' },
//                   lineHeight: 1.8,
//                   color: '#4a4a4a',
//                   maxWidth: '600px',
//                 }}
//               >
//                 {section.description}
//               </Typography>

//               <Link
//                 href="#"
//                 sx={{
//                   color: section.backgroundColor,
//                   fontWeight: 500,
//                   fontSize: { xs: '0.875rem', md: '1rem' },
//                   textDecoration: 'underline',
//                   transition: 'opacity 0.3s ease',
//                   '&:hover': {
//                     opacity: 0.8,
//                   },
//                 }}
//               >
//                 See more
//               </Link>
//             </Box>
//           </Box>
//         ))}
//       </Box>
//     </Box>
//   );
// };

// export default StickyScrollSections;