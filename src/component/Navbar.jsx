import logo from "../../public/assets/unnamed.png";

function Navbar() {
  return (
    <nav
      className="bg-secondary rounded-full absolute top-0 left-0 right-0 shadow z-50 mx-4 mt-6 sm:mx-16 lg:mx-24 md:mx-22 sm:mt-12"
      style={{ height: "92px" }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="relative flex h-full justify-between items-center">
           <div className="flex items-center flex-shrink-0">
            <img className="h-14 w-14 mr-2" src={logo} alt="logo" />
            <span className="ml-3 text-lg font-sans font-bold text-[#131212]">CSI-ACE</span>
          </div>
          <div className="hidden sm:flex">
            <ul className="flex justify-end items-center space-x-6">
              <li><a href="/"className="text-black  font-medium">Home</a></li>
              <li><a href="/about"className="text-black font-medium">About</a></li>
              <li><button className="bg-black text-yellow-300 px-4 py-2 rounded-full hover:bg-blue-500">Events</button></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
