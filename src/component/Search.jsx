import React,{useState} from 'react'
import SearchImg from './SearchImg'

export default function Search() {
    const [img, setimg] = useState()
    const searchImg=(event)=>{
          setimg(event.target.value)
          console.log(event.target.value)
    }
  return (
    <>
        <div className="searchbar">
            <input type="text"
            placeholder='Search anything'
            value={img}
            onChange={searchImg} />
        <SearchImg name={img}/>
        </div>
    </>
  )
}
