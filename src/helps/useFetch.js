import { useEffect, useState } from 'react';

export default function useFetch(funFetch,param) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

   const paramString=param?new URLSearchParams(param).toString():'';
   console.log(paramString);
  useEffect(() => {
    
    const fetchData = async () => {
      try {
          const response = await funFetch(param); // ВАЖНО: тут должен быть return в funFetch
          //console.log('response from funFetch:', response.status);
           setData(response);
           // здесь увидишь, что именно кладёшь
        
      } catch (err) {
        console.log(err);
        
          setError(err?.message || 'Error');
        
      } finally {  
          setLoading(false);
      }
    };

    fetchData();

    return () => {
      setLoading(true);
      setError(null);
    };
  }, [funFetch,paramString]);

  return { data, loading, error };

}
