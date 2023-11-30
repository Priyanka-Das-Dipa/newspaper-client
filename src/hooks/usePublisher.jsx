import { useEffect } from "react";
import { useState } from "react";


const usePublisher = () => {
    const [publisher, setPublisher] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch('https://newspaper-sever-site.vercel.app/publisher')
        .then(res => res.json())
        .then(data => {
            setPublisher(data);
            setLoading(false);
        })
    }, [])

    return[publisher, loading]
};

export default usePublisher;