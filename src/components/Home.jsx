import React from 'react'
import HeroImage from "../assets/heroImage.png";
import {MdOutlineKeyboardArrowRight } from "react-icons/md";
import {Link} from "react-scroll";
const Home = () => {
  return (
    <div name="home"
    className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800" >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className='flex flex-col justify-center h-full '>
          <p className='text-black '>Home</p> 

          <h2 className='text-4xl sm:text-7xl font-bold text-white '> I'm a Frontend Developer 
          </h2>
          <p className='text-gray-500 py-8 max-w-md'>
          I'm a fresh full-stack developer. With a B.Sc. in Computer Science and certification in full-stack development, I've crafted projects using HTML, CSS, JavaScript, and React. Passionate about user-centric design and eager to contribute innovative solutions to the web development landscape.
          </p>
          <div>
            <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-3 
            flex items-center rounded-md 
            bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
              Portfolio
              <span className='group-hover:rotate-90 duration-300'>
                <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
              </span>
             
            </Link>
          </div>
          </div>
        <div>
          <img src={HeroImage} alt='my profile' 
          className='rounded-2xl mx-auto w-2/3 md:w-full'
          />
        </div>
      
      </div>
      
    </div>
  );
};

export default Home;