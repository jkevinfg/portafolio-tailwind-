import React from 'react';
import ReactImg from '../assets/static/react.png';
import Node from '../assets/static/node.png';
import Mysql from '../assets/static/mysql.png';
import Postgresql from '../assets/static/postgresql.png';
import Mongo from '../assets/static/mongo.png';
import Linux from '../assets/static/linux.png';
import Amazon from '../assets/static/aws.png';
import Ruby from '../assets/static/ruby.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#1B2430] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Technicals Skills:</p>
              <p className='py-4'>These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>        
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Ruby} alt="HTML icon" />
                  <p className='my-4'>Ruby on Rails</p>
              </div>     
             <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                  <p className='my-4'>NodeJS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>ReactJS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Mongo} alt="HTML icon" />
                  <p className='my-4'>MongoDB</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Mysql} alt="HTML icon" />
                  <p className='my-4'>MySQL</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Postgresql} alt="HTML icon" />
                  <p className='my-4'>PostgreSQL</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Amazon} alt="HTML icon" />
                  <p className='my-4'>Amazon Web Services</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Linux} alt="HTML icon" />
                  <p className='my-4'>Linux</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;