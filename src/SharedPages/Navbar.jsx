import Marquee from "react-fast-marquee";
import logo from "../../src/assets/logo.png"
import moment from 'moment';
const Navbar = () => {
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
      </>


    </div >


  );
};

export default Navbar;