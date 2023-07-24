import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <>

      <form className='w-2/4 mx-auto'>
        <h2 className='text-4xl mb-5 font-bold text-center'>Register</h2>
        {/* -----------------------------------------------------------------------s */}
        <div className="mb-6 ">
          <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
          <input
            type="text"
            id="name"
            name='name'
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Name" required />
        </div>
        <div className="mb-6 ">
          <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo Url</label>
          <input
            type="text"
            id="url"
            name='url'
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Photo Url" required />
        </div>

        {/* --------------------------------------------------------------------- */}
        <div className="mb-6 ">
          <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
          <input
            type="email"
            id="email"
            name='email'
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email Address" required />
        </div>
        <div className="mb-6">
          <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
          <input
            type="password"
            id="password"
            name='password'
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='password' required />
        </div>
        <p className='mb-5'>Already have an account? <Link to="/Login" className='text-gray-800'>Login</Link></p>
        <input type="submit" className="text-white bg-gray-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" value="Submit" />
      </form>

    </>
  );
};

export default SignUp;