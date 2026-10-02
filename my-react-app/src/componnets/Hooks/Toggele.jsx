import { useState } from 'react'
import './useste.css'

export const  Toggel=()=>{
    

const [ ison, setimeout] = useState(false)
const ONClick=()=>{

   setimeout(!ison)
}
const click = ison ? "ON" :"OFF";
    const BGcolor ={ background: ison ? "green": "red"};   
return(
        // Contaiener p lgaya h kyuki mai khi bhi click kru vo bubbling pahse k liye
<div className= 'Container'style={BGcolor} onClick={ONClick}>
   <div className={`Box ${click}`}>
<span id='spantag'> {click}</span> 
  </div>

</div>

      
    )
} 

//// conditional styl;e use for the on and off k liye
