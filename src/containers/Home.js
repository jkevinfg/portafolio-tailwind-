import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { HiOutlineMail } from 'react-icons/hi';
const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#1B2430]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi! I'm </p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Jair Flores
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          Full Stack Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          Software developer with experience in backend and frontend development <br></br>
          Student Systems Engineering - Universidad Nacional de Ingenieria (Lima,Perú).
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            
            <a href='mailto:jkfloresg@uni.pe' target="_blank" className='flex justify-between items-center w-full ' >
               Contact me <HiOutlineMail className='ml-3 ' />      
            </a>
        
              {/* <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3 ' />  
                  </span>
              */} 
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;