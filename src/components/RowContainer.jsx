import React, { useEffect, useRef, useState } from 'react'
import { MdShoppingBasket } from 'react-icons/md'
import { motion } from 'framer-motion'
import NotFound from './img/NotFound.svg'
import { useStateValue } from '../context/StateProvider'
import { actionType } from '../context/reducer'
const RowContainer = ({ flag, data, scrollValue }) => {
    const rowContainer = useRef()
    const [{ cartItems }, dispatch] = useStateValue()
    const [items, setItems] = useState([]);
    const [add, setAdd] = useState(false)
    const addToCart = () => {
        dispatch({
            type: actionType.SET_CART_ITEMS,
            cartItems: items,
        });
        localStorage.setItem("cartItems", JSON.stringify(items));
    };
    const onAdd = (item) => {
        const exist = items.find((x) => x.id === item.id);
        if (exist) {
            setItems(
                items.map((x) =>
                    x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x
                )
            );

        } else {
            setItems([...items, { ...item, qty: 1 }]);
        }
    };
    useEffect(() => {
        rowContainer.current.scrollLeft = scrollValue
    }, [scrollValue])
    useEffect(() => {
        addToCart();
    }, [items]);
    return (
        <div ref={rowContainer} className={`w-full flex scroll-smooth items-center gap-3 my-12 ${flag ? 'overflow-x-scroll scrollbar-none' : 'overflow-x-hidden flex-wrap justify-center'}`}>
            {data && data.length > 0 ? data.map((item) => (
                <div key={item.id} className='w-275 h-[175px] min-w-[275px] md:min-w-[300px] bg-cardOverlay rounded-lg py-2 px-4 md:w-300 my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative'>
                    <div className='w-full flex items-center justify-between'>
                        <motion.div whileHover={{ scale: 1.2 }} className="w-40 h-40 -mt-8 drop-shadow-2xl">
                            <img src={item.imageURL} className="w-full h-full object-contain" />
                        </motion.div>
                            <motion.div whileTap={{ scale: 0.75 }} className={`w-8 h-8 rounded-full bg-cartNumbg flex items-center justify-center cursor-pointer hover:shadow-md`} onClick={() => onAdd(item)}>
                            <MdShoppingBasket className='text-white' />
                        </motion.div>
                    </div>
                    <div className='w-full flex flex-col items-end justify-end absolute bottom-0 right-2'>
                        <p className='text-textColor font-semibold text-base md:text-lg'>{item.title}</p>
                        <p className='mt-0 text-sm text-gray-500'>{item.calories} Calories</p>
                        <div className='flex items-center gap-8'>
                            <p className='text-lg text-headingColor font-semibold'><span className='text-sm text-green-500'>$</span> {item.price}</p>
                        </div>
                    </div>
                </div>
            )) : <div className='w-full flex flex-col items-center justify-center'>
                <img src={NotFound} alt="" className='h-420' />
                <p className='text-headingColor font-semibold my-2'>Items Not Available</p>
            </div>}
        </div>
    )
}

export default RowContainer