import { useEffect, useState } from 'react';

export default function useFetch(funFetch,param) {
  const [data, setData] = useState(null);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

   const paramString=param?new URLSearchParams(param).toString():'';
  // console.log(paramString);
  useEffect(() => {
    let isMount=true;
    const fetchData = async () => {
      try {
        setLoading(true);
          const response = await funFetch(param); // ВАЖНО: тут должен быть return в funFetch
          //console.log('response from funFetch:', response.status);
        
           isMount&&setData(response);
           // здесь увидишь, что именно кладёшь
        //console.log(isMount);
      } catch (err) {
        console.log(err);
        
          isMount&&setError(err?.message || 'Error');
        
      } finally {  
          isMount&&setLoading(false);
      }
    };

    fetchData();

    return () => {
      isMount=false;
      setError(null);
    };
  }, [funFetch,paramString]);

  return { data, loading, error };

}
