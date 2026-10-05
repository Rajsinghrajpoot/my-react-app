
import { useState } from "react"
import "./todo.css" 
export const Todo=(()=>{
  // initial value of the input box 
  const [ value ,  inputvalue] = useState("")
const [ task,Storedata] = useState([]);
const handleclick=(value)=>{
inputvalue(value)
// console.log(value)
}
  // use for the prevent default behaviour the form 
 
const handleFormSubmit=(event)=>{
 event.preventDefault() 
 if(!value) return;
 if(task.includes(value)) {
  inputvalue("")
  alert("already add")
return;
 } 
 // use for the prevesious data store in the input box
 // it is use for the StoreData 
 Storedata((prev)=> [...prev,value]);
  inputvalue("")

}



return(
  <>

<section className="Container">
<h1>To Do List</h1>
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
    {task.map((currele, index) => {
      return (
        <li className="raj" key={index}>
          <h2>{currele}</h2>
          <p><MdCheckCircle /></p>
          <button><MdDeleteForever/></button>
        </li>
      );
    })}
  </ul>
</section>
 </>
  
)
})



























































  import { MdDeleteForever,MdCheckCircle  } from "react-icons/md";

//  export const Todo=(()=>{

//     return(
      
      
//        <div className="Container">
//       <h1 id="hero">Todo  List </h1>
//       <input type="datetime-local" name="day" id="day" />

// <div className="task">
//   <input type="text" name="TAsk" id="TAsk" />
//     <button id="delete">ADD</button>
// </div>

// <div className="task">
//   <input type="text" name="TAsk" id="TAsk" />
//   <button id="delete"><MdDeleteForever style={{color:"red"}}/></button>
// </div>
// <div className="task">
//   <input type="text" name="TAsk" id="TAsk" />
// <button id="delete"><MdDeleteForever style={{color:"red"}} /></button>
// </div>
// <div className="task">
//   <input type="text" name="TAsk" id="TAsk" />
//     <p onClick={Delete} id="delete"><MdDeleteForever style={{color:"red"}} /></p>
// </div>
//       <button>Clear</button>
  
//       </div>

        
//     )
// })
// const Delete=(()=>{
//   alert("delte Successful")
// })