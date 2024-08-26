import { Link } from "react-router-dom";
import Navber from "../Shared/Navber/Navber";
import { useContext, useState } from "react";
import { FaRegEye   , FaRegEyeSlash  } from 'react-icons/fa';
import { AuthContext } from "../../Provider/Authprovider";



const Register = () => {
  const {createUser}=useContext(AuthContext)
  const [registerError , setregisterError]=useState('');
  const [success , setsucces]=useState('');
  const [showpassword , setshowpassword]=useState(false)
  const handleRegister = e =>{
    e.preventDefault();
   const name = e.target.name.value; 
   const photo = e.target.photo.value;
   const email = e.target.email.value;
   const password = e.target.password.value;
   console.log(name, photo, email , password)
   setregisterError('')
   setsucces('')

   if(password.langth <6){
    setregisterError("Password should be at least 6 characters or longer")
    return;
   }
   
   else if(!/[A-Z]/.test(password)){
    setregisterError('Your password should have at least one uppercase and Lowercase character')
    return;
   }

  

   createUser(email , password)
   .then((userCredential) =>{
      console.log(userCredential.user)
      setsucces("User Created Succesfully")
   })
   .catch(error =>{
    console.error(error)
    setregisterError(error.message);
   })

  }
    return (
        <div>
        <Navber></Navber>
       
        <div>
            <form onSubmit={handleRegister} className="card-body mx-auto max-w-sm  w-5/12">
           <h1 className="text-5xl font-bold">Register now!</h1>
           <div className="form-control ">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name="name" className="input input-bordered" required />
        </div>
           <div className="form-control ">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="text" placeholder="photo" name="photo" className="input input-bordered" required />
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type={showpassword ? "text" : "password"} placeholder="password" name="password" className="input input-bordered" required />
          <span className="mx-72 absolute my-14" onClick={()=> setshowpassword(!showpassword)}>
            {
              showpassword ? <FaRegEye></FaRegEye> : <FaRegEyeSlash></FaRegEyeSlash>
            }
          </span>
          <div className="flex">
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
          <label className="label">
          <Link to={"/login"} className="label-text-alt link link-hover text-blue-600 font-bold">Login</Link>
          </label>
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        <div>
        </div>
      </form>
      {
        registerError && <p className="text-center text-red-600">{registerError}</p>
      }
      {
        success && <p className="text-center text-green-600">{success}</p>
      }
        </div>
        </div>
    );
};

export default Register;