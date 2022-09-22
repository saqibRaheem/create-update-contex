// import { Button } from 'bootstrap';
import React  from 'react'
import { useLocation,useParams,useNavigate} from 'react-router-dom'

export default function Cont() {
    // const [name, setname] = useState(second)
    const {name} = useParams();
    const location = useLocation();
   const history = useNavigate();
   console.log(history);
    const chackHistory =()=>{
            history('/home')
    }
  return (
      <>
    <h1>Contacct page visit by {name}</h1>

    <h1>My curent location is {location.pathname}</h1>
    <br/>
    <button onClick={chackHistory}>Go to home</button>
    {location.pathname===`/contact/saqib` ?( <button onClick={()=>alert("Right Way")} >click me</button>):null}
      </>
  )
}
