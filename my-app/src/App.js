import "./index.css";
// import { Users } from "./user";
import {useState} from "react"
import {users} from "./users"

const url = `https://`

function App() {
  const[query,setQuery] = useState("") 
  // console. log (Users.fliter (Users=>Users. name.includes ("")) )
  return(
    <div className="app">
      <input type="text" placeholder="Search..."className="search" on change = {e=>setQuery(e.target.value)}/>
      <ul className="list">
        {users.map((e)=>(
          <>
          <li key ={e.id} className="listItems"> 
          {  e.name}</li>
       <img src={e.coverImage}></img>
          
          </>
        ))}
      </ul>
    </div>
  )

}


export default App;













