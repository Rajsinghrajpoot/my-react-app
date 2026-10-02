 import { use, useState } from "react";
// // import "./useste.css";



// export const Usestate = () => {

//   const [count, setCount] = useState(0)

//   const buttonclick = () => {
//     setCount(count + 1);
//   };

//   return (
//     <>
//       <h1>Use State</h1>

//       <h2>{count} I am a Count Button</h2>

//       <button onClick={buttonclick}>Click</button>
//     </>
//   );
// };
// this is a nomal display array with the help og map function 
// const Studen =[{
//  name:"Rajsingh",
// age: 22,
// course : "MCA"},
// {
//  name:"Shivansh singh",
// age: 5,
// course : "UKG"},
// {
//  name:"Pari singh",
// age: 12,
// course : 7}
// ]

// export const Usestate = () => {

//   return(
//     Studen.map((props)=>{
// return(<>
//   <h1>name: {props.name}</h1>
//   <p>Course;{props.course}</p>
//   <p>Age: {props.age}</p>
// </>
    
// )
//     })
//   )
// }

/// here will be use the Usestate to render the 

// const user =[{
//  name:"Rajsingh",
// age: 22,
// course : "MCA"},
// {
//  name:"Shivansh singh",
// age: 5,
// course : "UKG"},
// {
//  name:"Pari singh",
// age: 12,
// course : 7}
// ]

// export const Usestate = () => {
// const [ user , setCount]=  useState([{
//  name:"Rajsingh",
// age: 22,
// course : "MCA"},
// {
//  name:"Shivansh singh",
// age: 5,
// course : "UKG"},
// {
//  name:"Pari singh",
// age: 12,
// course : 7}

// ])


//  const totalvalue = user.length;

//   const average = user.reduce((acc, curr) => {
//     return acc + curr.age / totalvalue;
//   }, 0);

//   return (
//     <>
     
//       {user.map((props, index) => {
//         return (
//           <li key={index}>
//             <p>
//               Name: {props.name}, Age: {props.age}
//             </p>
//           </li>
//         ); 
//       })}
//  <h2>Total Students: {totalvalue}</h2>

//       <h2>Average Age: {average}</h2>
//     </>
//   );
// };


