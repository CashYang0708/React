import {useEffect, useState} from "react";

const useFetch=(url)=>{
    const [data,setData]=useState(null);
    const [ispending,setPending]=useState(true);
    const [error,setError]=useState(null);
    useEffect(()=>{
        const abort=new AbortController();
        setTimeout(()=>{
            fetch(url,{signal:abort.signal})
                .then(res=>{
                    if(!res.ok){
                        throw Error('could not fetch');
                    }
                    return res.json();
                })
                .then(data=>{
                    setData(data);
                    setPending(false);
                    setError(null);
            })
                .catch(err=>{
                    if(err.message==='AbortError'){
                        console.log('fetch aborted');
                    }
                    else {
                        setPending(false);
                        setError(err.message);
                    }
                })
        },1000);
        return ()=>abort.abort();
        },[url]);
    return {data,ispending,error}
}
export default useFetch;