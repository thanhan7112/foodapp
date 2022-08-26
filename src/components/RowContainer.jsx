import React from 'react'
import {MdShoppingBasket} from 'react-icons/md'
import { motion } from 'framer-motion'
const RowContainer = ({flag}) => {
  return (
    <div className={`w-full my-12 ${flag ? 'overflow-x-scroll' : 'overflow-x-hidden'}`}>
        <div className='w-300 h-auto bg-cardOverlay rounded-lg p-2 md:w-340 my-12 backdrop-blur-lg hover:drop-shadow-lg'>
            <div className='w-full flex items-center justify-between'>
                <motion.img whileHover={{scale: 1.2}} src='https://firebasestorage.googleapis.com/v0/b/foodapp-645c6.appspot.com/o/Images%2F1661495524974-c1.png?alt=media&token=a4a31fe7-605b-4886-bc01-a9edb7b5f9e8' alt='' className='w-40 -mt-8 drop-shadow-2xl'/>
                <motion.div whileTap={{scale: 0.75}} className='w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md'>
                    <MdShoppingBasket className='text-white'/>
                </motion.div>
            </div>
            <div className='w-full flex flex-col items-end justify-end'>
                <p className='text-textColor font-semibold text-base md:text-lg'>Chocolate & Vanilla</p>
                <p className='mt-1 text-sm text-gray-500'>45 Calories</p>
                <div className='flex items-center gap-8'>
                    <p className='text-lg text-headingColor font-semibold'><span className='text-sm text-red-500'>$</span> 5.25</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RowContainer