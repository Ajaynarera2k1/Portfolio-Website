import React from 'react';

const ProjectSection = () => {
  return (
    <section id="projects" className="py-12 bg-[#e5e7eb]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Projects</h2>
          <p className="text-gray-600 mt-2">Some of my recent work.</p>
        </div>
        <div className="flex flex-wrap justify-center">
       
          {/* Project Card 1*/}
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="relative bg-gray-300 shadow-lg rounded-lg overflow-hidden">
              <img
                src="portfolio.png"
                alt="Project"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                 Portfolio website
                </h3>
                <p className="text-gray-600 mb-4">Tech Stack: HTML, CSS, JS, React</p>
                <div className="absolute inset-0 bg-gray-300 bg-opacity-90 text-white p-6 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-xl font-semibold mb-2 bg-gray-300">Project Explanation</h4>
                  <p className="mb-4 bg-gray-300">
                       JSX , API Data Handling and Core React Features,
                       Tailwind CSS Integration,
                       React Hooks,
                       React Router,
                       functional Component,
                  </p>
                  <a
                    href="ajay-port-folio.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#284659] hover:bg-[#162935] text-white font-bold py-2 px-4 rounded"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </div>
           {/* Project Card 2*/}
           <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="relative bg-gray-300 shadow-lg rounded-lg overflow-hidden">
              <img
                src="Razorpay.png"
                alt="Project"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Razorpay UI
                </h3>
                <p className="text-gray-600 mb-4">Tech Stack: HTML, CSS, JS, Tailwind Css</p>
                <div className="absolute inset-0 bg-gray-300 bg-opacity-90 text-white p-6 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-xl font-semibold mb-2 bg-gray-300">Project Explanation</h4>
                  <p className="mb-4 bg-gray-300">
                  HTML Structure
                               CSS Styling
                               Tailwind CSS Integration
                               Responsive Design
                               Micro Interactions This is a detailed explanation of the project. 
                               It includes all the key features and technologies used.
                  </p>
                  <a
                    href="razorpay-ui-one.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#284659] hover:bg-[#162935] text-white font-bold py-2 px-4 rounded"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Project Card 3 */}
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="relative bg-gray-300 shadow-lg rounded-lg overflow-hidden">
              <img
                src="Bubble.png"
                alt="Project"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Bubble Game
                </h3>
                <p className="text-gray-600 mb-4">Tech Stack: HTML, CSS, JS </p>
                <div className="absolute inset-0 bg-gray-300 bg-opacity-90 text-white p-6 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-xl font-semibold mb-2 bg-gray-300">Project Explanation</h4>
                  <p className="mb-4 bg-gray-300">
                        Bubble Animation
                        Designed a scoreboard to display the player's current score during gameplay.
                        Added a countdown timer to limit the duration of each game session.
                        Endgame Notification: Provided a alert to notify the player when the game ends.

                  </p>
                  <a
                    href="http://bubble-game-with-js.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#284659] hover:bg-[#162935] text-white font-bold py-2 px-4 rounded"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Project Card 4 */}
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="relative bg-gray-300 shadow-lg rounded-lg overflow-hidden">
              <img
                src="weather.png"
                alt="Project"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Weather App
                </h3>
                <p className="text-gray-600 mb-4">Tech Stack: HTML, CSS, JS</p>
                <div className="absolute inset-0 bg-gray-300 bg-opacity-90 text-white p-6 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-xl font-semibold mb-2 bg-gray-300">Project Explanation</h4>
                  <p className="mb-4 bg-gray-300">
                                   Real-Time Data
                                   User-Friendly Interface
                                   Location-Based Weather
                                   Search Functionality
                                   API Integration
                                   Cross-Browser Compatibility
                  </p>
                  <a
                    href="https://weather-js-webdev.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#284659] hover:bg-[#162935] text-white font-bold py-2 px-4 rounded"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Project Card 5 */}
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="relative bg-gray-300 shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://blog.magezon.com/wp-content/uploads/2023/02/discord-hero-section.jpg"
                alt="Project"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Discord UI 
                </h3>
                <p className="text-gray-600 mb-4">Tech Stack: HTML, CSS, JS, Tailwind CSS</p>
                <div className="absolute inset-0 bg-gray-300 bg-opacity-90 text-white p-6 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-xl font-semibold mb-2 bg-gray-300">Project Explanation</h4>
                  <p className="mb-4 bg-gray-300">
                               HTML Structure
                               CSS Styling
                               Tailwind CSS Integration
                               Responsive Design
                               Micro Interactions This is a detailed explanation of the project. 
                               It includes all the key features and technologies used.
                  </p>
                  <a
                    href="https://discord-ui-one.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#284659] hover:bg-[#162935] text-white font-bold py-2 px-4 rounded"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Project Card 6 */}
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="relative bg-gray-300 shadow-lg rounded-lg overflow-hidden">
              <img
                src="cynthia.png"
                alt="Project"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  cynthia ugwu
                </h3>
                <p className="text-gray-600 mb-4">Tech Stack: HTML, CSS, JS and scroll trigger</p>
                <div className="absolute inset-0 bg-gray-300 bg-opacity-90 text-white p-6 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-xl font-semibold mb-2 bg-gray-300">Project Explanation</h4>
                  <p className="mb-4 bg-gray-300">
                         Responsive layout ensures optimal viewing across devices.
                         Hover effect enhances user interaction and visual appeal.
                         Smooth CSS transitions and micro interactions. 
                  </p>
                  <a
                    href="https://cynthia-ug-wu.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#284659] hover:bg-[#162935] text-white font-bold py-2 px-4 rounded"
                  >
                    cynthia ugwu
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Project Card 7 */}
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="relative bg-gray-300 shadow-lg rounded-lg overflow-hidden">
              <img
                src="imageGallary .png"
                alt="Project"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  IMAGE GALLARY
                </h3>
                <p className="text-gray-600 mb-4">Tech Stack: HTML, CSS and designing</p>
                <div className="absolute inset-0 bg-gray-300 bg-opacity-90 text-white p-6 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-xl font-semibold mb-2 bg-gray-300">Project Explanation</h4>
                  <p className="mb-4 bg-gray-300">
                         Responsive layout ensures optimal viewing across devices.
                         Hover effect enhances user interaction and visual appeal.
                         Smooth CSS transitions contribute to a polished user experience. 
                  </p>
                  <a
                    href="https://image-gallary-ui.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#284659] hover:bg-[#162935] text-white font-bold py-2 px-4 rounded"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </div>
             {/* Project Card 7 */}
             <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="relative bg-gray-300 shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://camo.githubusercontent.com/5e88db1bb868f925b70646ca2728a84e93afe2aaa4a9652aba664f921dc086b1/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f6477777466666566732f696d6167652f75706c6f61642f76313637373439353631392f666f6f646966792f686f6d655f7264696b63332e706e673f7261773d74727565"
                alt="Project"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Foodah Website
                </h3>
                <p className="text-gray-600 mb-4">Tech Stack: HTML, CSS, JS, React</p>
                <div className="absolute inset-0 bg-gray-300 bg-opacity-90 text-white p-6 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-xl font-semibold mb-2 bg-gray-300">Project Explanation</h4>
                  <p className="mb-4 bg-gray-300">
                       JSX , API Data Handling and Core React Features,
                       Tailwind CSS Integration,
                       React Hooks,
                       React Router,
                       functional Component,
                       State Management with Redux and Redux Toolkit,
                       Testing with Jest.
                  </p>
                  <a
                    href="https://foodah-delivery-web.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#284659] hover:bg-[#162935] text-white font-bold py-2 px-4 rounded"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </div>
         
          {/* Additional project cards can be added here */}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
