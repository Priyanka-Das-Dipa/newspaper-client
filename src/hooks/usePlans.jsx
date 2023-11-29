import { useEffect } from "react";
import { useState } from "react";


const usePlans = () => {
    const [plans, setPlans] = useState([]);
    useEffect(()=>{
        fetch('plans.json')
        .then(res => res.json())
        .then(data => {
            setPlans(data)
            console.log(data);
        })
    },[])

    return [plans]
};

export default usePlans;