
// // import {students}  from"./Api.js"

//  import styles from"./lecture26.module.css"

// // Event propogation in react
// // Event propogation is the how to flow the event in the DOM model is called the event  propogation

// // export  const Loop =(()=>{

// // const grandparent =((event)=>{
// // // alert("i am grandparent")
// // console.log("grandparent")
// // // event.stopPropagation()
// // })
// // const parent =((event)=>{
// // // alert("i am parent")
// // console.log("parent")
// // // event.stopPropagation()
// // })

// // const Chlid =((event)=>{
// //     // if you can stio the event propogatinon you need to
// // //    event.stopPropagation()
// //     // console.log(event)
// // // alert("i am Child")
// // console.log("Chlid")
// // })


// // return(
 
// //    <div className={styles.Container}>


// //     <div onClickCapture={grandparent}>
// // <div onClickCapture={parent}>
// //     <p onClickCapture={Chlid}>chlid</p>
// // </div>
// //   </div>
// // </div>
  
  



// // )})













// // BUBBLING PHASE K LIYE ONCLIK EVENT USE
// export  const Loop =(()=>{

// const grandparent =((event)=>{
// // alert("i am grandparent")
// console.log("grandparent")
// // event.stopPropagation()
// })
// const parent =((event)=>{
// // alert("i am parent")
// console.log("parent")
// // event.stopPropagation()
// })

// const Chlid =((event)=>{
//     // if you can stio the event propogatinon you need to
// //    event.stopPropagation()
//     console.log(event)
// // alert("i am Child")
// console.log("Chlid")
// })


// return(
 
//    <div className={styles.Container}>

//  // this is a bubbling phase code
//     <div onClick={grandparent}>
// <p onClick={parent}>par</p>
//     <p onClick={Chlid}>chlid</p>
// </div>
//   </div>

  
  



// )})

// //,,,,,,,,,,,,,,,,......................,

// //  export  const Loop =(()=>{

// //     const clickuser=((user)=>{
// // alert(`hey ${user}`)
// //  })
// // const clickhover=(()=>{
// //     alert("i am hover")
// //     console.log(`hey i am mosuse hover`)
// // })

// // return(
// //     // eventhandle pass as a argumnet

// // <Student onClick={()=>clickuser("Rajsingh,31,hii")}
// // onMouseEnter ={clickhover} />
// // )
// // })


// // const Student=((props)=>{
// // return(
// //     <>
// //     // event handle structure
// //     <button onClick={props.onClick}>click</button>
// //     <button onMouseEnter={props.onMouseEnter}>hover</button>
// //     </>
// // )
// // })



//  // Event handling the React
// // event handling is help to handle  when our event occur 
// // exmaple of event like: mouce click,keyboeardkey,etc

// //  export  const Loop =(()=>{
// // const  handlebuttonclick=((event)=>{
// // alert("helo ji")
// // console.log(event)
// // })
// // const venthandleder=(()=>{
//     // alert("hey user ")
// //})
// // return(
// //<>
// ///// <handlebutton onClick={(venthandleder)} 
// // onClick={(newbutton)}

// ///>


// ////</>


// // they calle the named fucntion 
// // and if they using the named funcion donnot vall the emdiatlly yiu can noly pass the function 
// // <button onClick={(handlebuttonclick)}>Click me</button>  */}
// // but if they use the Fat arrow function any function and you try to onclick event you need to call the function ex...
// // <button onClick={()=>{ handlebuttonclick()}}>click me 1 </button> */}
// //""""""""""""""""""""""""""
// //passing the argument in the event handler 
// //<button onClick={(venthandleder)}>click me </button> */}
// //)})


// // <div className={style.Container}>
// // {students.map((element)=>{
// //   return(
// //  <div className={style.Box}>
// // <h1>Name : {element.name}</h1> 
// // <p className={style.Age}>Age : {element.age}</p>
// // <p>Course: { element.course}</p>
// //    <button onClick={() => alert("Thanks For Clicking")}>
// //               {element.button}
// //             </button>
// //  </div>
// //   )
 
// // })}

// // {/* </div> */}
































//  // // tailwind CSS is the totally Inline css andd class name use

// //  export  const Loop =(()=>{
// // return(

// // // tailwind CSS is the totally Inline css andd class name use
// // // they are apply in the inline nad use to claname with css styling  
// // <div className={style.Container}>
// // {students.map((element)=>{
// //   return(
// //  <div className={style.Box}>
// // <h1>Name : {element.name}</h1> 
// // //// Tailwind CSS applly 
// // <p className="text-1xl font-italic ">Age : {element.age}</p>
// // <p className="m-4 font-bold underline p-6 bg-green-500 text-[14px]">Course: { element.course}</p>
// //    <button  className="bg-sky-500 hover:bg-sky-700 ..."  onClick={() => alert("Thanks For Clicking")}>
// //               {element.button}
// //             </button>
// //             {/* <button class="bg-sky-500 hover:bg-sky-700 ...">Save changes</button> */}

// //  </div>
// //   )
 
// // })}

// // </div>


// // )
// //  })

