import axios from 'axios'
import { useState } from 'useState'

export default function Delete(){
    const [name, setName] = useState('')

    const deleting = async(e) =>{
        e.preventDefault()

        const response = await axios.get(`http://localhost:3000/users?name=${name}`)

        try{

        } catch(error){
            console.log(error.message);
        }
    }
    return(
        <>
        <form action="" onSubmit={deleting}>
            <input type="text" placeholder='enter name' value={name} onChange={(e)=>setName(e.target.value)}/><br /><br />
            <button>Click</button>
        </form>
        </>
    )
}