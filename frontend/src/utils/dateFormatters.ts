export const transformDate = (dateString: string): string => {
    try {
      const date = new Date(dateString);
      
      const monthShort = date.toLocaleString('en-US', { month: 'short' });
      
      const day = date.getDate();
      const year = date.getFullYear();
      
      return `${monthShort}, ${day} - ${year}`;
    } catch (error) {
      console.error('Error transforming date:', error);
      return dateString; 
    }
  };

  export const transformDateText = (dateString: string): string => {
    try {
      const date = new Date(dateString);
      
      const monthLong = date.toLocaleString('en-US', { month: 'long' });
      const day = date.getDate();
      const year = date.getFullYear();
      
      return `${monthLong} ${day}, ${year}`;
    } catch (error) {
      console.error('Error transforming date:', error);
      return dateString; 
    }
  };

  export const transformDateShortText = (dateString: string): string => {
    try {
      const date = new Date(dateString);
      
      const monthLong = date.toLocaleString('en-US', { month: 'long' });
      
      const monthFormatted = monthLong.length <= 4 ? monthLong : monthLong.substring(0, 3);
      
      const day = date.getDate();
      const year = date.getFullYear();
      
      return `${monthFormatted} ${day}, ${year}`;
    } catch (error) {
      console.error('Error transforming date:', error);
      return dateString; 
    }
  };