import { useState } from 'react'
import './App.css'
import { EventPage } from './pages/EventPage'
import { TestPage } from './pages/TestPage'
import { BannerPage } from './pages/BannerPage'
import { Navbar } from './pages/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <BannerPage/>
    <section className="w-[100vw] h-[30px]"></section>
    <div className='py-[0px] bg-yellow'>
   
    <TestPage/>
    </div>
    <Navbar/>
     <section className="w-[100vw]  h-[30px] ">
     

     </section>
     <div className='w-[100vw] h-[100vh] '></div>
    </>
  )
}

export default App
