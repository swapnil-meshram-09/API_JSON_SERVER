import axios from 'axios'
import { useState } from 'react';

export default function Post(){
    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    async function posting(e){
        e.preventDefault()
        try{
            const response = await axios.post('http://localhost:3000/users',
                { name, age }
            )
            const data = response.data
            console.log(data);

            setName('')
            setAge('')
            
        } catch(error){
            console.log(error.message); 
        }
    }
    return(
        <>
        <form action="" onSubmit={posting}>
            <input type="text" placeholder='enter name' value={name} onChange={(e)=>setName(e.target.value)}/><br /><br />
            <input type="text" placeholder='enter age' value={age} onChange={(e)=>{setAge(e.target.value)}}/><br /><br />
            <button>Click</button>
        </form>
        </>
    )
}