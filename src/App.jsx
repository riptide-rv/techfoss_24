import { useState } from 'react'
import './App.css'
import { EventPage } from './pages/EventPage'
import { TestPage } from './pages/TestPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='w-[100vw] h-[100vh]'></div>
    <section className="w-[100vw] h-[30px]"></section>
    <div className='py-[0px] bg-yellow'>
    <TestPage/>
    </div>
   
     <section className="w-[100vw]  h-[30px] ">
     

     </section>
     <div className='w-[100vw] h-[100vh] '></div>
    </>
  )
}

export default App
