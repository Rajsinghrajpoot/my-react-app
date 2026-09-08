// // lecture 17
// // Styling in react 
  import "./lecture17.css"

//conditional statement in the CSS 

import Api from './Api.json' 
export  const Loop =(()=>{

return(
    <>
    
    {Api.map((ele)=>{

 return(
    <Singh data = {ele}/>
 )
    })}
    </>
)
 })
  const Singh = ((props)=>{
  const {name,gender,Age,greeting,rating,Button}= props.data

 return(
    <>
   
     {/* destrcture the data  */}
    <h1 className={name ==="Nileshmaurya" ? "Raj":"Singh"}></h1>
   {/* <h1 className={` name ${name === "Rajsingh" ? "Raj": "Singh"}` }></h1> */}


    <span> Age {Age} </span> 
<p>Gender :   {gender}</p>
<p>Greetings: {greeting}</p>
{/* <p>Age:{Age}</p> */}
<p>Rating: {rating}</p>
<p>button: {Button}</p>
{/* <h3    className={rating <9 ? "Singh" :"thakur" }> */}
  {/* Rating:  {rating}
    
   </h3> */}

   {/* <button className={ Button === "Available" ? "avlaible": "notavlaible"}> Develpoer : {Button} 
     { console.log(Button)}</button> */}
    </>
  )

 })
        {/* <h1>CSS inline in the React </h1> */}
        {/* <div className="Container">
            <div className="Box">
                  <p>Frontend Developer</p>
                  // Inline CSS add :
                  // like a object they need to define the css properties
                      <h2 style={{fontSize: "1rem"}}>Raj Singh</h2>
                      <button style={{height:"2.5rem",width:"5rem",color:"red"}}>Click Here</button>

            </div>
        </div> */}
//         </>
//     )
// })

