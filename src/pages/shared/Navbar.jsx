import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../../context/AuthContext/AuthContext';
import Swal from 'sweetalert2'
const Navbar = () => {
  const {user,signOutUser} = useContext(AuthContext)
  const handleLogOut = ()=>{
    signOutUser()
      .then(()=>{
        Swal.fire({
          title: "successfully logged out",
          text: "bye",
          icon: "success"
        });
      })
      .catch(error=>console.log("log out failed"))
  }
  const links = 
    <>
      <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li><NavLink to={"/"}>Home</NavLink></li>
          <li>
          <a>Application</a>
          <ul className="p-2">
              <li><NavLink to={"/myApplication"}>My Applications</NavLink></li>
              <li><a>My Posted Jobs</a></li>
          </ul>
          </li>
          <li><a>Add a Jobs</a></li>
      </ul>
    </>
  const links2 =
    <>
      <ul className="menu menu-horizontal px-1">
              <li><NavLink to={"/"}>Home</NavLink></li>
              <li>
                  <details>
                  <summary>Application</summary>
                  <ul className="p-2">
                      <li><NavLink to={'/myApplication'}>My Application</NavLink></li>
                      <li><a>My Posted Jobs</a></li>
                  </ul>
                  </details>
              </li>
              <li><a>Item 3</a></li>
      </ul>
    </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn  btn-ghost lg:hidden">
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
      {links}
    </div>
    <NavLink to={"/"} className="btn btn-ghost text-xl">Job Portal</NavLink>
  </div>
  <div className="navbar-center hidden lg:flex">
    {links2}
  </div>
  <div className=" w-1/2 justify-center  gap-2">

    {
      user ?
      <>
        <NavLink onClick={handleLogOut} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Log Out</NavLink>
        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-6 md:w-8 lg:w-12 rounded-full ring ring-offset-2">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
      </>
      : 
      <>
        <NavLink to={'/register'} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Register</NavLink>
        <NavLink to={'/signIn'} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Sign In</NavLink>
      </> 
      
    }
  </div>
</div>
    );
};

export default Navbar;