import { Link } from "react-router-dom";
import Navber from "../Shared/Navber/Navber";
import { useContext, useState } from "react";
import { FaRegEye   , FaRegEyeSlash  } from 'react-icons/fa';
import { AuthContext } from "../../Provider/Authprovider";


const Login = () => {
  const {signin}=useContext(AuthContext);

  const [loginError , setloginError]=useState('');
  const [success , setsucces]=useState('');
  const [showpassword , setshowpassword]=useState(false)

    const handleLogin = e =>{
      e.preventDefault();
     const email = e.target.email.value;
     const password = e.target.password.value;
     console.log(email , password)

     setloginError('')
     setsucces('')
  
     if(password.langth <6){
      setloginError("Password should be at least 6 characters or longer")
      return;
     }

     signin( email , password)
     .then((userCredential) =>{
        console.log(userCredential.user)
        setsucces("User Login Succesfully")
     })
     .catch(error =>{
      console.error(error)
      setloginError(error.message);
     })
    }
    
    return (
       <div>
        <Navber></Navber>
       
        <div>
            <div onSubmit={handleLogin} className="card-body mx-auto max-w-sm  w-5/12">
           <h1 className="text-5xl font-bold">Login now!</h1>
       <form>
       <div className="form-control ">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
            <span className="mx-72 absolute my-8" onClick={()=> setshowpassword(!showpassword)}>
            {
              showpassword ? <FaRegEye></FaRegEye> : <FaRegEyeSlash></FaRegEyeSlash>
            }
          </span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <div className="flex">
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
          <label className="label">
            <Link to={"/register"} className="label-text-alt link link-hover text-blue-600 font-bold">Register</Link>
          </label>
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
       </form>
       {
        loginError && <p className="text-center text-red-600">{loginError}</p>
      }
      {
        success && <p className="text-center text-green-600">{success}</p>
      }
      </div>
        </div>
        </div>
    );
};

export default Login;