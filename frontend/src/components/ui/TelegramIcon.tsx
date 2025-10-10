import SvgIcon from '@mui/material/SvgIcon';

const TelegramIcon = (props: any) => (
  <SvgIcon {...props} viewBox="0 0 24 24"
  sx={{ 
    fontSize: '2.3rem', 
    ...props.sx, 
    paddingRight: '0.3rem'
  }}
  >
    <path d="M9.78 12.78l.28-.28 4.67-4.67c.14-.14.35-.13.49.02.13.16.13.4-.02.54l-4.67 4.67-.28.28 1.27 4.25c.03.1.15.14.24.08l2.24-1.32c.13-.08.3-.08.43 0l3.84 2.28c.24.14.54-.02.54-.3l1.88-12.08c.03-.24-.18-.42-.39-.32l-14.27 5.52c-.26.1-.26.5 0 .6l3.46 1.73c.18.09.4.05.54-.1z"/>
  </SvgIcon>
);

export default TelegramIcon;