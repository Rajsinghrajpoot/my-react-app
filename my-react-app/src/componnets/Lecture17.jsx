// // // lecture 17
// // // Styling in react 

// Lecture 18 
// Css Module
// import the css module in this file
import style from "./card.module.css"

import {students}  from"./Api.js"
 export  const Loop =(()=>{


return(
// appley the style the claname with the curly baraces
<div className={style.Container}>
{students.map((element)=>{
  return(
 <div className={style.Box}>
             {/* <img src="/images/lr.webp" height={"80rem"} width={"80rem"} alt="" /> */}
<h1>Name : {element.name}</h1> 
<p>Age : {element.age}</p>
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



  // import "./lecture17.css"

// //conditional statement in the CSS 

// import Api from './Api.json' 
// export  const Loop =(()=>{

// return(
//     <>
    
//     {Api.map((ele)=>{

//  return(
//     <Singh data = {ele}/>
//  )
//     })}
//     </>
// )
//  })
//   const Singh = ((props)=>{
//   const {name,gender,Age,greeting,rating,Button}= props.data


//  return(
//     <>
   
//      {/* destrcture the data  */}
//     <h1> Name: {name}</h1>
//    {/* <h1 className={` name ${name === "Rajsingh" ? "Raj": "Singh"}` }></h1> */}


//     <span> Age {Age} </span> 
// <p>Gender :   {gender}</p>
// <p>Greetings: {greeting}</p>
// {/* <p>Age:{Age}</p> */}
// <p>Rating: {rating}</p>
// {/* <button className={rating >9 ? "Singh" :"Raj" }>button: {Button}</button> */}
// {/* <h3    className={rating <9 ? "Singh" :"thakur" }> */}
//   {/* Rating:  {rating}
    
//    </h3> */}

//    {/* <button className={ Button === "Available" ? "avlaible": "notavlaible"}> Develpoer : {Button} 
//      { console.log(Button)}</button> */}
//     </>
//   )

//  })
//         {/* <h1>CSS inline in the React </h1> */}
//         {/* <div className="Container">
//             <div className="Box">
//                   <p>Frontend Developer</p>
//                   // Inline CSS add :
//                   // like a object they need to define the css properties
//                       <h2 style={{fontSize: "1rem"}}>Raj Singh</h2>
//                       <button style={{height:"2.5rem",width:"5rem",color:"red"}}>Click Here</button>

//             </div>
//         </div> */}
// //         </>
// //     )
// // })

