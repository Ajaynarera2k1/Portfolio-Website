// import React from 'react';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   return (
//     <header className="  text-white my-4  shadow-md   font-thin w-11/12 mx-auto rounded-3xl">
//       <div className="container mx-auto flex justify-between items-center py-4 px-6">
//         <div className="text-2xl font-bold cursor-pointer">Ajay Narera</div>
//         <nav>
//           <ul className="flex space-x-6 text-xl font-semibold">
//              <Link to={"/"}> <li className="hover:text-gray-400 ">Home</li></Link>
//              <Link to={"About"}> <li className="hover:text-gray-400 ">About</li></Link>
//              <Link to={"projects"}> <li className="hover:text-gray-400 ">Projects</li></Link>
//              <Link to={"Contact"}> <li className="hover:text-gray-400 ">Contact</li></Link>
          
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// }

// export default Header;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="text-white my-4 shadow-md font-thin w-11/12 mx-auto rounded-3xl">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold cursor-pointer">Ajay Narera</div>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <nav className="hidden lg:flex space-x-6 text-xl font-semibold">
          <Link to="/"><li className="hover:text-gray-400 list-none">Home</li></Link>
          <Link to="About"><li className="hover:text-gray-400 list-none">About</li></Link>
          <Link to="projects"><li className="hover:text-gray-400 list-none">Projects</li></Link>
          <Link to="Contact"><li className="hover:text-gray-400 list-none">Contact</li></Link>
        </nav>
      </div>
      {isOpen && (
        <nav className="lg:hidden">
          <ul className="flex flex-col space-y-2 text-xl font-semibold">
            <Link to="/"><li className="hover:text-gray-400">Home</li></Link>
            <Link to="About"><li className="hover:text-gray-400">About</li></Link>
            <Link to="projects"><li className="hover:text-gray-400">Projects</li></Link>
            <Link to="Contact"><li className="hover:text-gray-400">Contact</li></Link>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;


