export  const formatTime = (currentTime:Date) => {
    return currentTime.toLocaleTimeString('en-US', { 
      hour12: false,
      hour: '2-digit', 
      minute: '2-digit',
      second: '2-digit'
    });
  };
  
export  const getLocation = (params:string) => {
    return params === 'es' ? 'Guayaquil/Ecuador' : 'Guayaquil/Ecuador';
  };