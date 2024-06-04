import React from 'react';

const Hero = () => {
  return (
    <section id='Hero' className=" py-20 px-20 mx-8 h-100vh text-white">
      <div className="container mx-auto flex gap-8 flex-col-reverse md:flex-row items-center px-6">
        <div className="md:w-1/2">
          <h1 className="text-4xl  md:text-6xl font-bold mb-6">Welcome to My Portfolio</h1>
          <p className="text-lg md:text-xl mb-6">I am a professional frontend developer and programming expert. Check out my work and connect with me on social media.</p>
          <div className="flex space-x-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
              <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.723-.951.564-2.005.974-3.127 1.195-.897-.956-2.178-1.555-3.594-1.555-2.72 0-4.924 2.204-4.924 4.924 0 .386.043.762.127 1.122-4.09-.205-7.719-2.166-10.141-5.144-.424.725-.667 1.567-.667 2.465 0 1.701.866 3.2 2.181 4.078-.804-.026-1.561-.246-2.224-.616v.062c0 2.374 1.688 4.354 3.926 4.803-.411.112-.843.171-1.288.171-.314 0-.619-.03-.917-.086.619 1.934 2.416 3.339 4.548 3.376-1.665 1.305-3.76 2.083-6.041 2.083-.393 0-.779-.023-1.161-.067 2.153 1.381 4.708 2.187 7.455 2.187 8.946 0 13.84-7.416 13.84-13.84 0-.211-.005-.422-.014-.633.951-.686 1.776-1.544 2.428-2.523z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/ajay-narera-2k1" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
              <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.762 0-5 2.238-5 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.762-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.249c-.966 0-1.75-.784-1.75-1.751 0-.965.784-1.75 1.75-1.75s1.75.785 1.75 1.75c0 .967-.784 1.751-1.75 1.751zm13.5 11.249h-3v-5.4c0-1.285-.025-2.935-1.792-2.935-1.792 0-2.067 1.401-2.067 2.845v5.49h-3v-10h2.875v1.354h.041c.401-.76 1.382-1.559 2.847-1.559 3.045 0 3.609 2.005 3.609 4.613v5.592z" />
              </svg>
            </a>
            <a href="https://github.com/Ajaynarera2k1" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600">
              <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.111.82-.258.82-.577 0-.285-.011-1.04-.017-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.388-1.333-1.758-1.333-1.758-1.089-.745.083-.729.083-.729 1.205.085 1.838 1.237 1.838 1.237 1.07 1.835 2.809 1.305 3.495.997.108-.775.419-1.305.762-1.605-2.665-.304-5.466-1.333-5.466-5.931 0-1.311.469-2.382 1.236-3.221-.124-.303-.536-1.523.116-3.176 0 0 1.009-.322 3.301 1.23.96-.267 1.987-.4 3.008-.404 1.021.004 2.048.137 3.008.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.77.839 1.236 1.91 1.236 3.221 0 4.609-2.804 5.625-5.475 5.922.43.371.814 1.104.814 2.222 0 1.606-.015 2.896-.015 3.289 0 .322.218.694.825.576 4.765-1.589 8.199-6.086 8.199-11.385 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
          <a href="AjayNarera.pdf" download="sample.pdf">
                    <button  className='bg-[#284659] py-2 px-3 text-[#e5e7eb] my-8 text-xl rounded-md hover:text-gray-300 font-semibold hover:bg-gray-800 hover:scale-95'>Resume</button>
           </a>
          {/* <button  >Resume</button> */}
        </div>
        <div className="md:w-1/2 mb-6 md:mb-0">
          <div className="w-64 h-64 md:w-96 md:h-96 bg-gray-200  mx-auto ">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2EYC4IAx8OROX7lKlGYHpf2YBt6qcC73UMA&s' 
                  className='w-[18rem] h-64 md:w-96 md:h-96 bg-gray-200 rounded-lg  mx-auto hover:scale-95  '
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
