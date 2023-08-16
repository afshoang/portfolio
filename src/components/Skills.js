import React from 'react'
import HTML from '../assets/html.svg';
import CSS from '../assets/css.svg';
import JS from '../assets/javascript.svg';
import REACT from '../assets/react.svg';
import REACTNATIVE from '../assets/react-native.svg';
import REDUX from '../assets/redux.svg';
import NODEJS from '../assets/nodejs.svg';
import MYSQL from '../assets/mysql.svg';
import MONGODB from '../assets/mongodb.svg';

const Skills = () => {
  const technologies = [
  {
    src: HTML,
    name: 'html'
  },
  {
    src: CSS,
    name: 'css'
  },
  {
    src: JS,
    name: 'javascript'
  },
  {
    src: REACT,
    name: 'react'
  },
  {
    src: REACTNATIVE,
    name: 'react-native'
  },
  {
    src: REDUX,
    name: 'redux'
  },
  {
    src: NODEJS,
    name: 'nodejs'
  },
  {
    src: MYSQL,
    name: 'mysql'
  },
  {
    src: MONGODB,
    name: 'mongo db'
  },
]
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full '>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
          <p className='py-4'>// These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          {
            technologies.map(tech => (
              <div key={tech.name} className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img src={tech.src} className='w-20 mx-auto' alt={`${tech.name}-logo`} />
                <p className='my-4'>{tech.name.toUpperCase()}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Skills