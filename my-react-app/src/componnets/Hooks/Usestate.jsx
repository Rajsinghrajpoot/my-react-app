
import "./useste.css"

export const Usestate =(()=>{
    let value = 0
const butoon=(()=>{
    // value++
   `${value++}`
})

return(
    <>
    <h1>Usestate</h1>
   
    <p>increment Butoon</p>
<div className="Comatiner">
<h2>{value}</h2>
<button onClick={butoon}>Click</button>
</div>


    </>
)

})