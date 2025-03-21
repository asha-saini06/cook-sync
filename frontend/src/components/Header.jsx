/* eslint-disable react/prop-types */
import { Banner1, Banner2, Banner3, Banner4, Banner5 } from "../images";

const images = [Banner1, Banner2, Banner3, Banner4, Banner5];

const Header = ({ title, image, type }) => {
  return (
    <div className='w-full h-[100vh]'>
      <div className='relative w-full h-full'>
        <img src={image ?? images[Math.floor(Math.random() * images.length)]}
          alt='Hero Image'
          className='w-full h-full object-cover'
        />  {/* Change the image source to the random image  */}
      </div>

      <div className='absolute w-full h-full bg-gradient-to-t from-black to-transparent top-0 z-8 flex flex-col items-center justify-center pt-40 2xl:pt-20 px-4 '>
        <h1 className='text-white text-4xl md:text-5xl font-bold text-center'>{title}</h1>
        {
          type && (
            <p className='text-sm mt-4 text-center text-green-500 bg-[#00000090] px-6 py-4 rounded-full '>Discover, share, and savor delicious recipes from around the world. 
              <br className='hidden md:block' /> Cook, connect, and create magic in your kitchen with Cook-Sync! 🍽️</p>
          )
        }  {/* Add a conditional rendering to display the welcome message */}
      </div>
    </div>
  )
}

export default Header