import React, { useState } from 'react'
import Delivery from './img/delivery.png'
import HeroBg from './img/heroBg.png'
import { motion } from 'framer-motion'
import { heroData } from '../utils/data'
import { useStateValue } from '../context/StateProvider'
import { actionType } from '../context/reducer'


const HomeContainer = (props) => {
  const [{isOn}, dispatch] = useStateValue()
  const spring = {
    type: "spring",
    stiffness: 700,
    damping:30
  }

  const [is_On, setIsOn] = useState(false)
  const toggleSwitch = () => {
    setIsOn(!is_On)
    dispatch({
      type: actionType.SET_IS_ON,
      isOn: is_On
    })
  }
  return (
    <section className='grid grid-col-1 md:grid-cols-2 gap-2 w-full' id='home'>
      <div className='py-2 gap-6 flex-1 flex flex-col items-start justify-center'>
        <div className='flex items-center gap-2 justify-center bg-green-100 px-2 py-1 rounded-full'>
          <p className='text-base text-green-700 font-semibold'>
            Bike Delivery
          </p>
          <div className='w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl'>
            <img src={Delivery} alt="delivery" className='w-full h-full object-contain'/>
          </div>
        </div>
        <div className={`w-24 h-10 flex ${is_On === true ? 'justify-start bg-black' : 'justify-end bg-green-600'} items-center rounded-3xl cursor-pointer`} onClick={toggleSwitch}>
          <motion.div className='w-10 h-8 bg-white rounded-3xl m-1' layout transition={spring}></motion.div>
        </div>
        <p className='text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor'>Dev by <span className='text-green-600 text-[3rem] lg:text-[5rem]'>Nguyen Thanh An</span></p>
        <p className='text-base text-textColor text-center md:w-[80%] md:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptatibus, repellendus quasi sint nam facere velit explicabo in dolore nemo harum eaque, officiis ullam fugit reprehenderit! Vero minus itaque veritatis.</p>
      <button type='button' className='bg-gradient-to-br from-green-300 to-green-600 text-white w-full px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 md:w-auto'>Order Now</button>
      </div>
      <div className='p-2 flex-1 flex items-center relative'>
         <img src={HeroBg} alt="hero-bg" className='ml-auto h-660 lg:h-650 h-420 w-full lg:w-auto'/>
         <div className='w-full h-full absolute top-0 left-0 py-4 flex items-center justify-center gap-4 flex-wrap lg:px-32'>
            {heroData && heroData.map(ele => (
               <div key={ele.id} className=' lg:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg'>
               <img src={ele.imageSrc} alt="I1" className='w-20 lg:w-40 -mt-10 lg:-mt-20'/>
               <p className='text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4'>{ele.name}</p>
               <p className='text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3'>{ele.decp}</p>
               <p className='text-sm font-semibold text-headingColor'><span className='text-xs text-green-600'>$</span> {ele.price}</p>
             </div>
            ))}
         </div>
      </div>
    </section>
  )
}

export default HomeContainer