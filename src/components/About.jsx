import React from 'react';

const About = () => {
  return (
    <div name="about"
    className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'
    >
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full' >
            <div className='pb-4'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>

            </div>
            <p className=' mt-8'>
                I'm a passionate and dedicated Front-end developer. As a fresh graduate,
                 I am excited to embark on this journey and contribute my skills to 
                 the world of web development.My toolbox includes HTML, CSS, and JavaScript for
                  crafting elegant and responsive user interfaces. I'm skilled in leveraging modern 
                  technologies like React for building dynamic front-end experiences.
            </p>

            <br />
            <p className=''>
                My experience doesn't stop there. I'm well-versed in harnessing the power of React, 
                a dynamic library that allows me to create seamless and responsive front-end experiences. 
                These projects have not only sharpened my coding abilities but have also instilled in me the
                 importance of user-centric design. Collaboration and continuous learning fuel my ambition.
                 Feel free to explore my portfolio to witness the culmination of my efforts.
            </p>
        </div>
    </div>
  );
};

export default About;