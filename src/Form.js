import { useState } from "react"
import "./Form.css"
function Form(){
    const [user,setUser] = useState({email:"",password:""})

    const submitHandler = (e)=>{
        e.preventDefault()

        console.log(user.email , user.password)
      
    }

    return(
        <div >

        <form className="form">
        <label htmlFor="email">email</label>
        <input type="email" id="email" placeholder="email" required  onChange={(e)=>(setUser((prev)=>({...prev,email:e.target.value})))}/>
        <br></br>
        <label htmlFor="password">password</label>
        <input type="password" id="password" placeholder="password" required onChange={(e)=>(setUser((prev)=>({...prev,password:e.target.value})))} />
        <br></br>
        <button type="submit" id="btn" onClick={submitHandler}>submit</button>
        </form>
       
        </div>
    )
}

export default Form