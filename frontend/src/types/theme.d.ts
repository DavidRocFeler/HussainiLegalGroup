// theme.d.ts
import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypographyVariantsOptions {
    h7?: React.CSSProperties;
    h8?: React.CSSProperties;
    h9?: React.CSSProperties;
    h10?: React.CSSProperties;
    h11?: React.CSSProperties;
    h12?: React.CSSProperties;
    h13?: React.CSSProperties;
  }
  
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    
    customMobileInsight: true;          
    mobileMid: true;    
    tabletInsight: true;              
    customTabletInsight: true;        
    customEarthTablet: true;         
    customTimelineMobile: true;       
    customTabletAbout: true;         
    customDesktopCardAbout: true;   

    desktopMid: true;                
    customDesktopLargeAbout: true;    
    customLargeCardAbout: true;      
    customXLargeCardAbout: true; 
    customEarthDesktop: true;    
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h7: true;
    h8: true;
    h9: true;
    h10: true;
    h11: true;
    h12: true;
    h13: true;
  }
}

declare module 'react' {
  interface CSSProperties {
    '@media (max-width:899px)'?: CSSProperties;
    '@media (max-width:450px)'?: CSSProperties;
    '@media (max-width:1199px)'?: CSSProperties;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    seeMoreButton: true;
    redCahova: true;
    redCahovaBorder: true;
    goldenOchre: true;
    transparentBorder: true;
    buttonReadCase: true;
    contactUs: true;
    buttonSubscribe: true;
    primary: true;
  }
}