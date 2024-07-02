import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from 'sweetalert2';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "succssfully Logged Out",
                    showConfirmButton: false,
                    timer: 1800
                })
            })
            .catch()
    }

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/allspots">All Spots</NavLink></li>
        <li><NavLink to="/addspots">Add Spots</NavLink></li>
        <li><NavLink to="/mylist">My List</NavLink></li>
    </>

    return (
        <div>
            <div className="navbar bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-black rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <Link to="/" className="text-3xl text-white">GetTour</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 ">
                        {links}

                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    {/* <span className="text-4xl"><IoPersonCircleOutline /></span> */}

                </div>


                <div className="flex gap-1">
                    {
                        user ?
                            <button onClick={handleSignOut} className="btn">Sign Out</button>
                            :
                            <Link to="/login" className="btn">Login</Link>
                    }
                </div>


            </div>
        </div>
    )
}

export default Navbar