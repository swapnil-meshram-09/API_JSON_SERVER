import axios from 'axios'
import { useState } from 'react'

export default function Patch(){
    const posting = async(e)=>{
        e.preventDefault()

        try{
            
        } catch(error){
            console.log(error.message);
        }
    }
    return(
        <>
        <form action="" onSubmit={posting}>
            <input type="text" /><br /><br />
            <input type="text" /><br /><br />
            <button>Click</button>
        </form>
        </>
    )
}