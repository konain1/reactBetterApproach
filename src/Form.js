
function Form(){

    return(
        <div >
        
        <form className="form">
        <label htmlFor="useremail">email</label>
        <input type="email" id="htmlFor" placeholder="email" required />
        <label htmlFor="password">password</label>
        <input type="password" id="password" placeholder="password" required />

        <button type="submit">submit</button>
        </form>
       
        </div>
    )
}

export default Form