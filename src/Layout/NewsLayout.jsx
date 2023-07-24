import Navbar from "../SharedPages/Navbar";
import Footer from "../SharedPages/Footer";
// import LeftNav from "../Pages/LeftNav";
import RightNav from "../Pages/RightNav";
import { Outlet } from "react-router-dom";

const NewsLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="h-screen grid grid-cols-4">
        {/* <LeftNav className=" grid "></LeftNav> */}
        <div className="w-full h-full grid col-span-3 ">
          <Outlet></Outlet>
        </div>
        <RightNav className=" grid col-span-2"></RightNav>
      </div>
      <Footer></Footer>
    </>
  );
};

export default NewsLayout;