import logo from "../images/sportslocLOGO.png";
const Nav = () => {
  return (
    <div className="flex items-center justify-between border-gray-300 border-b-1 p-5 font-Ubuntu">
      <img src={logo} alt="logo" className="w-[10rem]" />
      <ul className="flex gap-[10rem] text-2xl">
        <li className="border-b-2 border-transparent hover:border-b-2 hover:border-blue-500 transition-colors duration-500">
          <a href="#">Find Facilities</a>
        </li>
        <li className=" border-b-2 border-transparent hover:border-b-2 hover:border-blue-500 transition-colors duration-500">
          <a href="#">Find Player</a>
        </li>
        <li className="border-b-2 border-transparent hover:border-b-2 hover:border-blue-500 transition-colors duration-500">
          <a href="#">Events</a>
        </li>
      </ul>
      <div className="flex gap-5 ">
        <button className="text-xl font-semibold border-2 border-black hover:border-blue-500 px-4 py-1 rounded-md cursor-pointer">
          Login
        </button>
        <button className="text-xl font-semibold border-2 border-black  hover:border-blue-500 px-4 py-1 rounded-md cursor-pointer">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Nav;
