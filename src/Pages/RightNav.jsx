import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import QZone from './QZone';
const RightNav = () => {
  return (
    <div className="px-9">
      <h2 className="text-2xl font-semibold mb-5">Login with</h2>
      <button type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 w-full flex justify-center" >Login with Google</button>
      <button type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 w-full flex justify-center mb-14" > Login with Github</button>

      <h2 className='text-xl'> Find us on</h2>

      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white ">
        <button type="button" className="relative inline-flex items-center w-full px-4 py-2  font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white text-xl h-14">

          <FaFacebook className='mr-4'></FaFacebook>
          Facebook
        </button>
        <button type="button" className="relative inline-flex items-center w-full px-4 py-2 font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white text-xl h-14">
          <FaInstagram className='mr-4'></FaInstagram>
          Instagram
        </button>
        <button type="button" className="relative inline-flex items-center w-full px-4 py-2font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white  text-xl h-14">
          <FaTwitter className='mr-4'></FaTwitter>
          Twitter
        </button>

      </div>
      <QZone></QZone>
    </div>
  );
};

export default RightNav;