import {students}  from"./Api.js"

 import style from"./lecture26.module.css"
// Event handling the React

 export  const Loop =(()=>{
return(
<div className={style.Container}>
{students.map((element)=>{
  return(
 <div className={style.Box}>
<h1>Name : {element.name}</h1> 
<p className={style.Age}>Age : {element.age}</p>
<p>Course: { element.course}</p>
   <button onClick={() => alert("Thanks For Clicking")}>
              {element.button}
            </button>
 </div>
  )
 
})}

</div>


)
 })



































 // // tailwind CSS is the totally Inline css andd class name use

//  export  const Loop =(()=>{
// return(

// // tailwind CSS is the totally Inline css andd class name use
// // they are apply in the inline nad use to claname with css styling  
// <div className={style.Container}>
// {students.map((element)=>{
//   return(
//  <div className={style.Box}>
// <h1>Name : {element.name}</h1> 
// //// Tailwind CSS applly 
// <p className="text-1xl font-italic ">Age : {element.age}</p>
// <p className="m-4 font-bold underline p-6 bg-green-500 text-[14px]">Course: { element.course}</p>
//    <button  className="bg-sky-500 hover:bg-sky-700 ..."  onClick={() => alert("Thanks For Clicking")}>
//               {element.button}
//             </button>
//             {/* <button class="bg-sky-500 hover:bg-sky-700 ...">Save changes</button> */}

//  </div>
//   )
 
// })}

// </div>


// )
//  })

