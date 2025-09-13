export const truncateText = (text: string, maxLength: number = 120, suffix: string = '...'): string => {
    if (!text) return '';
    
    if (text.length <= maxLength) return text;
    
    return text.substring(0, maxLength).trim() + suffix;
  };

  export const truncateShortText = (text: string, maxLength: number = 100, suffix: string = '...'): string => {
    if (!text) return '';
    
    if (text.length <= maxLength) return text;
    
    return text.substring(0, maxLength).trim() + suffix;
  };
  

  export const truncateTitleText = (text: string, maxLength: number = 50, suffix: string = '...'): string => {
    if (!text) return '';
    
    if (text.length <= maxLength) return text;
    
    return text.substring(0, maxLength).trim() + suffix;
  };  

  export const truncateTextDescription = (text: string, maxLength: number = 350, suffix: string = '...'): string => {
    if (!text) return '';
    
    if (text.length <= maxLength) return text;
    
    return text.substring(0, maxLength).trim() + suffix;
  };