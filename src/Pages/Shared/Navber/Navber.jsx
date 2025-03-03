import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/Authprovider";


const Navber = () => {
  const {user , logOut}=useContext(AuthContext)
  const handleSignOut = ()=>{
      logOut()
      .then()
      .catch()
  }
  const navLinks = <>
      <li><Link to={"/"}>Home</Link></li>
      <li><Link to={"/user_profile"}>User profile</Link></li>
      <li><Link to={"/update_profile"}>Update Profile</Link></li>
      
  </>

    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content font-poppins bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
      {navLinks}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">AMULI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal font-poppins  px-1">
      {navLinks}
    </ul>
  </div>
  {
    user ? 
    <div className="navbar-end">
    <button onClick={handleSignOut} className="btn"><Link to={"/login"}>Sign In</Link></button>
      
    </div>
    :
    <div className="navbar-end">
    <button className="btn"><Link to={"/login"}>Login</Link></button>
      
    </div>
  }
</div>
    );
};

export default Navber;