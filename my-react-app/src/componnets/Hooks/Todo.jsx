  import { MdDeleteForever,MdCheckCircle  } from "react-icons/md";

import { useState } from "react"
import "./todo.css" 
export const Todo=(()=>{
  // initial value of the input box 
  const [ value ,  inputvalue] = useState("")
const [ task,Storedata] = useState([]);
const [ datetime,setdatetime]=useState("")
const handleclick=(value)=>{
inputvalue(value)
}
const handleFormSubmit=(event)=>{
 event.preventDefault() 
 if(!value) return;

 if(task.includes(value)) {
  inputvalue("")
  alert("already add")
return;
 } 
 Storedata((prev)=> [...prev,value]);
  inputvalue("")
  
}
// Date and time 
 setInterval(() => {
 
const date = new Date();
const Newdate = date.toLocaleDateString()
const newtime = date.toLocaleTimeString()
setdatetime(`${Newdate} - ${newtime}`)
}, 1000);
 const Clear=()=>{
  alert("delete  All Data")
 }
 const DeleteButton =(data)=>{
  alert("delete ho gya")
   console.log(task)
  console.log(data)  
 
 }
return(
  <>

<section className="Container">
<h1>To Do List</h1>

<div className="Time">
  <h2 id="time"> {datetime} </h2>
 </div>
</section>
<section className="task">
  
<form onSubmit={handleFormSubmit}>
 <div className="task">
  <input type="text" name="TAsk" id="TAsk" value={value}
  onChange={(event) =>handleclick(event.target.value)} />  
   <button id="delete">ADD</button>
 </div>
 
</form>

</section>
 
<section className="listvalue">
  <ul> 
    {task.map((currelem, index) => {
      return (
        <li className="raj" key={index}>
          <h2 id="color">{currelem}</h2>
          <p id="CheckBox"> <MdCheckCircle  id="MD"/></p>
          <button id="Delete" 
          onClick={()=> DeleteButton(currelem)}
          ><MdDeleteForever/></button>
        </li>
      );
    })}
     
  </ul>
  
</section>
<div className="ClearItem">
  <button id="Clear" onClick={Clear}>Clear All</button>
</div>
 </>
  
)
})


























































