import axios from 'axios'
import { useState } from 'react'

export default function Put(){
    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    return(
        <>
        <form action="">
            <input type="text" placeholder='enter name' value={name} onChange={(e)=>setName(e.target.value)}/><br /><br />
            <input type="text" placeholder='enter age' value={age} onChange={(e)=>setAge(e.target.value)}/><br /><br />
            <button>Click</button>
        </form>
        </>
    )
}