// breakpoints.ts
import { BreakpointsOptions } from '@mui/material/styles';

const breakpoints: BreakpointsOptions = {
  values: {
    xs: 0,      
    sm: 600,    
    md: 900,    
    lg: 1200,  
    xl: 1536,   

    // Mobile optimizations
    customMobileInsight: 370,   // Breakpoint for responsive precision of brand.red color component in insights
    mobileMid: 455,            // Mid-mobile breakpoint for EarthMap and mobile transitions 
    
    // Tablet optimizations  
    customTabletInsight: 591,   // Tablet layout for InsightContainer responsive design 
    customEarthTablet: 650,     // EarthMap tablet view transition point
    customTimelineMobile: 699,  // TimelineItem mobile-to-desktop layout switch  
    customTabletAbout: 755,     // CardAbout height for good UX 
    
    // Desktop optimizations
    customDesktopCardAbout: 950,     // CardAbout height for good UX 
    desktopMid: 1090,               // Mid-desktop breakpoint for Footer and About components
    customDesktopLargeAbout: 1300,  // AboutCover large desktop width (70%)
    customLargeCardAbout: 1400,     // CardAbout large screen height (20rem)
    customXLargeCardAbout: 1800,    // CardAbout extra large screen height (15rem) 
    customEarthDesktop: 900,     
  },
};

export default breakpoints;