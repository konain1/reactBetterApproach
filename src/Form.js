import { useState } from "react"
import "./Form.css"
function Form(){
    const [user,setUser] = useState(
        {email:"",
        password:"",
        gender:""
    })

    const submitHandler = (e)=>{
        e.preventDefault();
        console.log(user)
       
    }
    const changeHandler = (e)=>{
        setUser((prev)=> ({...prev,[e.target.name]:e.target.value}))

    }
    
    return(
        <div >

        <form className="form">
        <label htmlFor="email">email</label>
        <input type="email" id="email" placeholder="email" name="email" required  onChange={(e)=>(setUser((prev)=>({...prev,email:e.target.value})))}/>
        <br></br>
        <label htmlFor="password">password</label>
        <input type="password" id="password" name="password" placeholder="password" required onChange={(e)=>(setUser((prev)=>({...prev,password:e.target.value})))} />
        <br></br>
        <label htmlFor="gender">Gender</label>
        <input type="radio" id="male"  name="gender" value="male" onChange={(e)=>changeHandler(e)} />
        <input type="radio" id="female" name="gender" value="female"  onChange={(e)=>changeHandler(e)} />

        <br></br>
        <button type="submit" id="btn" onClick={submitHandler}>submit</button>
        </form>
       
        </div>
    )
}

export default Form