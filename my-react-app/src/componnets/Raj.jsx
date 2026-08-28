import Api from './Api.json'

// lecture 12
//Looping in the JSX

 export const Loop=()=>{
    return(
      <ul>
        // Map methos use 
        {Api.map((currentelememt)=>{
          return(

          // listitem will be antoher compenent pass with the props


<Listitem   key={currentelememt.id}currentelememt = {currentelememt}/>
)})}
</ul>

    )}
  // define the map method 


const Listitem=(props)=>{
  console.log(props)// this is the (Api.map((currentelememt)) show all the element in then console window
return(
  
   <li key={props}>



<img src={props.currentelememt.img_url}  height="40%"
width="40%"/>
  
 <p> Name: {props.currentelememt.name}</p>
<p>id : {props.currentelememt.id}</p>
<p>rating: {props.currentelememt.rating}</p>
<p>description:{props.currentelememt.description}</p>
<p>cast : {props.currentelememt.cast}</p> 
  </li> 
)
}
export default Loop

    
  //{/* // there is no for loop use in the JSX use to the 
        // map method for {loop or itration} */}


// export default Loop













// Lecture 11
   // Import and export 
// default import and export
// normal deafult keyword use // only one deafult import use in the fie
// named import and export'

//named import use to the {filename}// and all same the deafult export and import
// no need to deafualt key word

// mixed import and export
//// used th deafualt and named use in one file called the miixed import and export 
// MIxed import nad export//
//import mixed, { Singhji ,Singhi} from './componnets/Raj'

// export const Mixed =()=>{
// return(
//     <h1>Mixed import and export</h1>
// )
// }
//  export const Mixed =()=>{
// return(
//     <h1>Mixed import and export</h1>
// )
// }
// const Mixed =()=>{
// return(
//     <h1>Mixed import and export</h1>
// )
// } export default Mixed

// // Named import nad export
// multiple export use in the named import nad export
//import { Singhji ,Singhi} from './componnets/Raj'

//  const  Singhji=()=>{
//  return   (  <h1>I am export </h1>
//  )
//   }
//   export const  Singhi=()=>{
//  return   (  <h1>I am export </h1>
//  )
  //}



/// default  import and export
// //  import Singhji from './componnets/Raj'
//  const Singhji =()=>{
//     return(
//         <div>
//         <h1>Practice Question</h1>
// <p>{rajisngh()}</p>
// </div>
    // )}
    //   export default Singhji

   
    // Import and export 
// default import and export
// normal deafult keyword use // only one deafult import use in the fie
// named import and export'

//named import use to the {filename}// and all same the deafult export and import
// no need to deafualt key word

// mixed import and export






 
//         //let student =[];


//     // return(
//         <>
//         {/* <h2>Components folder create</h2> */}
//           <h1>Practice Question </h1>

// {/* </>
//     )
// } */}
// // return(
    
// //     <>
// //     <h1>Practice Question </h1>

// //     {/* <p>{student.length && " no student Found" }</p>// ANSWER IS{ 0 } 🌸 */}
// //     // react never render a "NAN","null""undefined and "false
//         //  <p>{student.length && true || false }</p> 

// //     {/* <p>number of student : {student.length}</p> // ANSWER IS{ 0 } 🌸 */}
// //     </>S
// // )
// // }
//     )
//  }
//   export default Singhji