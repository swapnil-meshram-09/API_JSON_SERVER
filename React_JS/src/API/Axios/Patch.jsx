import axios from 'axios'
import { use, useState } from 'react'

export default function Patch(){
    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    const pathcing = async(e)=>{
        e.preventDefault()

        try{
            const response = await axios.get(`http://localhost:3000/users?name=${}`)

            if(response.data.length === 0){
                console.log('User not found');
            }

            const userId = response.data[0].userId

            const dataUpdate = await axios.patch(`http://localhost:3000/users/${userId}`,
                { age }
            )
        } catch(error){
            console.log(error.message);
        }
    }
    return(
        <>
        <form action="" onSubmit={patching}>
            <input type="text" placeholder='enter name' value={name} onChange={(e)=>setName(e.target.value)}/><br /><br />
            <input type="text" placeholder='enter age' value={age} onChange={(e)=>setAge(e.target.value)}/><br /><br />
            <button>Click</button>
        </form>
        </>
    )
}