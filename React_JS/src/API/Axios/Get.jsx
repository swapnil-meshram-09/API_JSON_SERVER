import axios from 'axios'
import { useState, useEffect } from 'react';

export default function Get(){
    const [value, setValue] = useState([])

    useEffect(()=>{
    async function getting(){
        try{
            const response = await axios.get('http://localhost:3000/users')
            const data = response.data
            console.log(data);
            setValue(data)
        } catch(error){
            console.log(error.message);
        }
    }
    getting()
    },[])
    return(
        <>
        {
            value.map((val, idx)=>(
                <h1 key={idx}>{val.name}</h1>
            ))
        }
        
        </>
    )
}