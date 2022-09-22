
import { createContext, useState } from "react";

// var noteContext = createContext()
var CartContext = createContext()

export function CartProvider({children}){
    //   const [items, setitems] = useState([])

    //   const addToCart = (price) =>{
    //     setitems((prevState) => [...prevState, {price}])
    //   }
    //   const delToCart = (price) =>{
    //     setitems(items.length - 1)
    //   }

      const [items, setitems] = useState(4)

  const Increase = () =>{
    setitems(items + 1)
  }
  const Decrease =()=>{
    setitems(items - 1)
  }


return(<CartContext.Provider value={{items,Increase,Decrease}}>{children}</CartContext.Provider>)
}
// const GlobalStateUpdateContext = createContext()
// const useContext = () => useContext(noteContext)
// const UseGlobalStateUpdate = () => useContext(GlobalStateUpdateContext)


// function GlobalStateProvider(props ) {
//     const [data, setData] = useState(props.value)
//     const Increase = () => {
//         setData(data + 1)
//     }
//     const Decrease = () => {
//         setData(data - 1)
//     }

//     return (<>
//         <noteContext.Provider value={data}>
//             <GlobalStateUpdateContext.Provider value={setData}>
//                 {props.value}
//             </GlobalStateUpdateContext.Provider>
//         </noteContext.Provider>
//     </>)
// }

export default CartContext;