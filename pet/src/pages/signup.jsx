import { useContext } from "react"
import { myContext } from "../Context/Context"
import './Login.css'
import { Link, useNavigate } from "react-router-dom"
 

const Signup = () => {
  const nav=useNavigate()
  const {user,setUser}=useContext(myContext)
  const Handle=(S)=>{
    S.preventDefault()

const data=S.target.Fn.value
const ldata=S.target.Ln.value
const Sdata=S.target.Ea.value
const Pdata=S.target.Sp.value 
setUser([...user,{id:Date.now(),Fn:data,Ln:ldata,Ea:Sdata,Sp:Pdata}])
 S.target.reset()
 nav('/login')
 alert('successfully registered')
  }
  console.log(user);

  return (
    <div  className="login_div">
      <form onSubmit={Handle} className="login_form">
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
          id="Fn"
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>
        <div className="mb-3">
          
          <label>Last name</label>
          <input type="text" className="form-control" id='Ln' placeholder="Last name" /> 
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
          id="Ea"
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
          id="Sp"
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" >
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <Link to='/login'>sign in?</Link>
        </p>
      </form>
      </div>
  
  )
}


export default Signup