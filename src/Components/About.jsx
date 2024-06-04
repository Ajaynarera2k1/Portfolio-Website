import React from 'react'

export default function About() {
  return (
      <div  id='About' className="py-16 bg-[#e5e7eb]">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://watermark.lovepik.com/photo/50036/0163.jpg_wh1200.jpg"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          React development is carried out by passionate developers
                      </h2>
                      <p className="mt-6 text-gray-600">
                      I am a BCA graduate from Sobhasaria College, with a strong foundation in computer applications and a deep passion for 
                      frontend development. My journey as a self-taught developer has been driven by curiosity and a commitment to continuous learning. 
                      Over the past few Months, I have honed my skills in HTML, CSS, JavaScript, React.js, and Tailwind CSS, enabling me to create responsive, 
                      user-friendly, and visually appealing web applications.
                      </p>
                      <p className="mt-4 text-gray-600">
                      Through various self-initiated projects, I have developed a keen eye for design and a solid understanding of web development principles.
                       My portfolio showcases a range of projects, from dynamic single-page applications to complex user interfaces, all built with modern frontend
                        technologies.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}