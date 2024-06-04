import React from 'react';

const Header = () => {
  return (
    <header className="  text-white my-4  shadow-md   font-thin w-11/12 mx-auto rounded-3xl">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold cursor-pointer">Ajay Narera</div>
        <nav>
          <ul className="flex space-x-6 text-xl font-semibold">
            <li><a href="#home" className="hover:text-gray-400 ">Home</a></li>
            <li><a href="#about" className="hover:text-gray-400">About</a></li>
            <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
