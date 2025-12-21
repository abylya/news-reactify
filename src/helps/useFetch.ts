import { useEffect, useState } from 'react';
import type { useFetchRez } from '../interfaces';

interface FnFech<T,P>{(param?:P):Promise<T>};





export default function useFetch<T,P>(funFetch:FnFech<T,P>,param?:P):useFetchRez<T> {

  const [data, setData] = useState<T|undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

   const paramString=param?new URLSearchParams(param).toString():'';
  // console.log(paramString);
  useEffect(() => {
    let isMount:boolean=true;
    const fetchData = async () => {
      try {
        setLoading(true);
          const response = await funFetch(param); // ВАЖНО: тут должен быть return в funFetch
          //console.log('response from funFetch:', response.status);
        
           isMount&&setData(response);
           // здесь увидишь, что именно кладёшь
        //console.log(isMount);
      } catch (err:Error|any) {
        console.log(err as Error);
        
          isMount&&setError(err.message || 'Error');
        
      } finally {  
          isMount&&setLoading(false);
      }
    };

    fetchData();

    return () => {
      isMount=false;
      setError('');
    };
  }, [funFetch,paramString]);

  return { data, loading, error };

}
