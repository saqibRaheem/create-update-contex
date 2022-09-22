import React ,{useContext ,useState} from 'react'
// import NoteContext from '../contex/nodes/NoteContext'
import CartContext from '../contex/nodes/NoteContext'

export default function About({items}) {
  
    var { Increase ,items ,Decrease } = useContext(CartContext)

//  const [first, setfirst] = useState(4)

//   const Increase = () =>{
//     setfirst(first + 1)
//   }
//   const Decrease =()=>{
//     setfirst(first - 1)
//   }

  return (<>
 
    <h1>this is about {items}</h1>
    
    <button onClick={()=> Increase()}> + </button>
    <br />
    <button onClick={()=>Decrease()}> - </button>
    
    {/* <NoteContext.Provider value={first}>
   {props.children}
   </NoteContext.Provider> */}
    </>)
}