import axios from 'axios'
import { useState, useEffect } from 'react';

export default function Post(){
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    async function Posting(){
        try{

        } catch(error){
            console.log(error.message); 
        }
    }
    return(
        <>
        <form action="" >
            <input type="text" placeholder='enter id'/><br /><br />
            <input type="text" placeholder='enter name'/><br /><br />
            <input type="text" placeholder='enter age'/><br /><br />
            <button>Click</button>
        </form>
        </>
    )
}