import Navbar from "../SharedPages/Navbar";
import Footer from "../SharedPages/Footer";
import LeftNav from "../Pages/LeftNav";
import RightNav from "../Pages/RightNav";

const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="h-screen grid grid-cols-4">
        <LeftNav className=" grid "></LeftNav>
        <h2 className="w-full h-full grid col-span-2 border border-gray-950">Main content coming soon</h2>
        <RightNav className=" grid col-span-3"></RightNav>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;