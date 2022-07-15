import React from 'react';
import InkaPelis from '../assets/static/inkapelis.png';
import AgendApp from '../assets/static/agendapp.png'
import Pokedex from '..//assets/static/pokedex.png'

const Projects = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#1B2430]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Projects
          </p>
          <p className='py-6'>Check out some of my recent work</p>
        </div>

{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${InkaPelis})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <p className='text-2xl font-bold text-white tracking-wider text-center'>
                 Web Movies - NodeJS MongoDB ReactJS Hooks Redux
              </p>
              
              <div className='pt-8 text-center'>
                <a href='https://inkapelis.herokuapp.com/' target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Link
                  </button>
                </a>
                <a href='https://github.com/jkevinfg/InkaPelis' target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${AgendApp})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <p className='text-2xl font-bold text-white tracking-wider text-center'>
              Personal Agenda - NodeJS MongoDB AWS
              </p>
              <div className='pt-8 text-center'>
                <a href='https://agenda-app-mongo.herokuapp.com/'  target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Link
                  </button>
                </a>
                <a href='https://github.com/jkevinfg/AgendApp'  target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Pokedex})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <p className='text-2xl font-bold text-white tracking-wider text-center'>
                Pokedex - JavaScript HTML CSS Bootstrap
              </p>
              <div className='pt-8 text-center'>
                <a href='https://jkevinfg.github.io/Pokedex/' target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Link
                  </button>
                </a>
                <a href='https://github.com/jkevinfg/Pokedex' target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default Projects;