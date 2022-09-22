import React,{useContext} from 'react'
// import noteContext from '../contex/nodes/NoteContext'
import CartContext from '../contex/nodes/NoteContext'


export default function Home() {
  // var a = useContext(noteContext)
  var {items} = useContext(CartContext)
console.log(items);
  return (
    <>
   

   <h1> The total items is {items}</h1>
      
      {/* <noteContext.Provider ></noteContext.Provider> */}
    
    </>
  )
}
