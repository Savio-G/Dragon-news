import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import profileLogo from '.././assets/R.png'
import { AuthContext } from '../Authenbtication/AuthProvider';

const Header = () => {
  const { user } = useContext(AuthContext)
  return (
    <nav className="w-4/5 mx-auto flex mb-28">
      <div className="w-1/3 mx-auto">
        <Link to="/" className="ml-20">Home</Link>
        <Link className="ml-20">About</Link>
        <Link className="ml-20">Career</Link>
      </div>
      {user ? <p>{user.displayName}</p> : <img className="h-8 mr-6" src={profileLogo} alt="" />}
      {user ? <button className="bg-slate-800 w-32 text-white">Logout </button> : <Link to="/Login"><button className="bg-slate-800 w-32 text-white">Login</button></Link>}

    </nav>
  );
};

export default Header;