import { useState } from 'react'
import './App.css'
import { EventPage } from './pages/EventPage'
import { TestPage } from './pages/TestPage'
import { BannerPage } from './pages/BannerPage'
import { Navbar } from './pages/Navbar'
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
    <BannerPage/>
    <section className="w-[100vw] h-[30px]"></section>
    <div className='py-[0px] bg-yellow' id='events'>
   
    <TestPage/>
    </div>
    <Navbar/>
     <section className="w-[100vw]  h-[30px] ">
     

     </section>
     
     
<div className="flex min-h-screen p-16n sm:p-0 mx-8 items-center justify-start" style={{"color":"white"}}>
  <div className="mx-auto w-full max-w-lg">
    <h1 className="text-4xl font-medium">Contact us</h1>
    <p className="mt-3">Email us at techfoss.csetist@gmail.com or message us here:</p>

    <form action="https://formspree.io/f/xayzlwnp" method='POST' className="mt-10">

      
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="relative z-0">
          <input type="text" name="name" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-white focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your name</label>
        </div>
        <div className="relative z-0">
          <input type="text" name="email" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-white focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your email</label>
        </div>
        <div className="relative z-0 col-span-2">
          <textarea name="message" rows="5" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-white focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" "></textarea>
        <label className="absolute top-20 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-24 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your message</label>

        </div>
      </div>
      <button type="submit" className="mt-5 rounded-md bg-black-900 hover:bgyellow px-10 py-2 text-white">Send Message</button>
    </form>
  </div>
</div>
</Router>
    </>
  )
}

export default App
