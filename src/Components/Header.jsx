import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="  text-white my-4  shadow-md   font-thin w-11/12 mx-auto rounded-3xl">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold cursor-pointer">Ajay Narera</div>
        <nav>
          <ul className="flex space-x-6 text-xl font-semibold">
             <Link to={"/"}> <li className="hover:text-gray-400 ">Home</li></Link>
             <Link to={"About"}> <li className="hover:text-gray-400 ">About</li></Link>
             <Link to={"projects"}> <li className="hover:text-gray-400 ">Projects</li></Link>
             <Link to={"Contact"}> <li className="hover:text-gray-400 ">Contact</li></Link>
          
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
