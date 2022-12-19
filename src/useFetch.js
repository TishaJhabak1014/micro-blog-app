import { useState , useEffect} from 'react';

const useFetch =(url)=> {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [err, setErr] = useState(null);

    useEffect(() =>{
        setTimeout(() => {
            fetch(url)
            .then(response => {
                if(!response.ok){
                    throw Error("Could not fetch the data");
                    // invalid endpoint
                }
                return response.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setIsPending(false);
                
            }).catch( error => {
                setErr(error.message);
                setIsPending(false);
            });
        }, 1000);
        
    }, [url]);

    return {data, isPending, err};
    
}

export default useFetch;
