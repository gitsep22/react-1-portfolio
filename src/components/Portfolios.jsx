import React from 'react';
import shoe from  '..//assets/portfolio/shoe.jpg';
import  calculator from  '..//assets/portfolio/calculator.jpg';
import todo from  '..//assets/portfolio/todo.jpg';

const Portfolios = () => {
    const portfolio =[
     
        {
            id:1,
            src: calculator,
            demo:'https://idyllic-daifuku-c550cd.netlify.app/',
            code:'https://github.com/gitsep22/calculator#calculator-using-html-css-js'

        },
        {
            id:2,
            src: todo,
            demo:'https://elegant-scone-ce727d.netlify.app/',
            code:'https://github.com/gitsep22/To-do-list',
        },
        {
            id:3,
            src: shoe,
            demo:'https://deft-donut-61ccad.netlify.app/',
            code:'https://github.com/safak/youtube/tree/html-css-js-ecommerce'
        },
      
       
    ]
  return (
    <div name="portfolio"
    className=' bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'
    >
        <div className=" max-w-screen-lg  p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className=" pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                <p className='py-6'>Check out some of my work right here</p>
            </div >
            <div  className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 px-10 sm:px-0">
            {
                portfolio.map(({id,src,code,demo})=>(
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                    <img  src ={src} alt=""
                    className='rounded-md duration-200 hover:scale-105' />
                    <div className='flex items-center justify-center'>
                        <a href={demo} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</a>
                        <a  href={code}className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</a>
                    </div>
                </div>

                ))
            }
                
            </div>

                
            

        </div>
    </div>
    
  )
}
export default Portfolios;

























































































     
        
    
