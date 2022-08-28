import React, { useEffect, useState } from 'react'
import { BiMinus, BiPlus } from 'react-icons/bi'
import { motion } from 'framer-motion'
import { useStateValue } from '../context/StateProvider'
import { actionType } from '../context/reducer'
const CartItem = ({ item, setFlag, flag }) => {
  const [{ cartItems }, dispatch] = useStateValue()
  const [items, setItems] = useState([])
  console.log(items)
  const cartDispatch = () => {
    localStorage.setItem("cartItems", JSON.stringify(items))
    dispatch({
      type: actionType.SET_CART_ITEMS,
      cartItems: items
    })
  }
  const updateQty = (action, id) => {
    if (action == "add") {
      item.qty += 1;
      setFlag(flag + 1);
    } else if (action == "remove") {
      if(item.qty > 1){
        item.qty -= 1
        setFlag(flag - 1);
      }else if (item.qty == 1){
        setItems(items.filter((x) => x.id !== item.id));
      }
    }
  };
  useEffect(() => {
    setItems(cartItems)
  }, [ items])
  return (
    <div key={item.id} className='w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2'>
      <img src={item?.imageURL} alt='' className='w-20 h-20 max-w-[60px] rounded-full object-contain' />
      <div className='flex flex-col gap-2'>
        <p className='text-base text-gray-50'>{item?.title}</p>
        <p className='text-sm block text-gray-300 font-semibold'>{parseFloat(item?.price) * item.qty} $</p>
      </div>
      <div className='group flex items-center gap-2 ml-auto cursor-pointer'>
        <motion.div whileTap={{ scale: 0.75 }} onClick={() => updateQty("remove", item?.id)}>
          <BiMinus className='text-gray-50' />
        </motion.div>
        <p className='w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center'>
          {item.qty}
        </p>
        <motion.div whileTap={{ scale: 0.75 }} onClick={() => updateQty("add", item?.id)}>
          <BiPlus className='text-gray-50' />
        </motion.div>
      </div>
    </div>
  )
}

export default CartItem