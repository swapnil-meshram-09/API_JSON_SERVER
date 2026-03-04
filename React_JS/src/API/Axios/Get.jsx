import axios from 'axios'

export default function Get(){
    async function getting(){
        try{
            const response = await axios.get('http://localhost:3000/users')
            const data = response.data
            console.log(data);
            
        } catch(error){
            console.log(error.message);
        }
    }
    return(
        <>
        
        
        </>
    )
}