import React, { useEffect } from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import MainContainer from './components/MainContainer'
import CreateContainer from './components/CreateContainer'
import { AnimatePresence } from 'framer-motion'
import Abc from './components/Abc'
import { useStateValue } from './context/StateProvider'
import { getAllFoodItems } from './utils/firebaseFunctions'
import { actionType } from './context/reducer'
const App = () => {
  const [{foodItems}, dispatch] = useStateValue()
  // const isOn = useStateValue(isOn)
  const fetchData = async () => {
    await getAllFoodItems().then(data => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data
      })
    })
  }
  useEffect (() => {
    fetchData()
  },[])
  // console.log(isOn)
  return (
    <AnimatePresence exitBeforeEnter>
      {/* <div className={`w-screen h-auto flex flex-col ${isOn === true ? 'bg-primary' : 'bg-black'}`}> */}
      <div className={`w-screen h-auto flex flex-col bg-primary`}>
        <Header />
        <main className='mt-14 md:mt-20 px-4 md:px-16 py-4 w-full'>
          <Routes>
            <Route path='/' element={<MainContainer />} />
            <Route path='/createItem' element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  )
}

export default App