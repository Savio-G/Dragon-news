import Marquee from "react-fast-marquee";
import logo from "../../src/assets/logo.png"
import profileLogo from '.././assets/R.png'
import moment from 'moment';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Authenbtication/AuthProvider";


const Navbar = () => {
  const { user } = useContext(AuthContext)
  return (
    <div >
      <>
        <div className="text-center">
          <img className="mx-auto mt-7" src={logo} alt="dragon-news-logo" />
          <p className="text-2xl mt-2 mb-2">Journalism Without Fear or Favour</p>
          <p className="text-xl">{moment().format("dddd,  MMMM Do,  YYYY")}</p>
        </div>
        <div className=" mx-auto flex w-4/5 bg-slate-300 p-2 mt-10 mb-8">
          <button className="bg-red-400 w-24 h-10  text-white ml-3 outline-0">Latest</button>

          <Marquee>
            I can be a React component, multiple React components, or just some text.
          </Marquee>
        </div>
        <nav className="w-4/5 mx-auto flex mb-28">
          <div className="w-1/3 mx-auto">
            <Link className="ml-20">Home</Link>
            <Link className="ml-20">About</Link>
            <Link className="ml-20">Career</Link>
          </div>
          {user ? <p>{user.displayName}</p> : <img className="h-8 mr-6" src={profileLogo} alt="" />}
          {user ? <button className="bg-slate-800 w-32 text-white">Logout </button> : <button className="bg-slate-800 w-32 text-white">Login</button>}

        </nav>
      </>


    </div >


  );
};

export default Navbar;