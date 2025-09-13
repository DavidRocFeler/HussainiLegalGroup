export const truncateText = (text: string, maxLength: number = 15, suffix: string = '...'): string => {
    if (!text) return '';
    
    if (text.length <= maxLength) return text;
    
    return text.substring(0, maxLength).trim() + suffix;
  };
  