import axios from 'axios'
import { useState } from 'react'

export default function Patch(){
    const pathcing = async(e)=>{
        e.preventDefault()

        try{
            const response = await axios.get(`http://localhost:3000/users?name=${}`)

        } catch(error){
            console.log(error.message);
        }
    }
    return(
        <>
        <form action="" onSubmit={patching}>
            <input type="text" /><br /><br />
            <input type="text" /><br /><br />
            <button>Click</button>
        </form>
        </>
    )
}