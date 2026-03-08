import axios from 'axios'
import { useState } from 'useState'

export default function Delete(){
    const [name, setName] = useState('')

    const deleting = async(e) =>{
        e.preventDefault()

        try{
          const response = await axios.get(`http://localhost:3000/users?name=${name}`)

          if(response.data.length === 0){
              console.log('User not found');
            }
          const userId = response.data[0].id

          const dataDelete = await axios.delete(`http://localhost:3000/users`)
          console.log(dataDelete);

          setName('')

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