import './bannerpage.scss';
import {About} from './About'
import { Navbar } from './Navbar';
import logo from '../images/techfossloggo.png';
import csi from '../images/csi.png';
import toch from '../images/toch.png';
import deptcs from '../images/deptcs.png';


export function BannerPage(){
    return(
        <div className="w-[100vw] h-[230vh] banner_bg bg-[#090909] ">
           
            <div className='w-[100%] h-[90%]  banner_overlay' id="home">
          
                    <div className='w-[100%] h-[45%] flex justify-center items-center'>
                        <section className='text-9xl cyberpunk2077 flex  pr-6 justify-center w-[60%] h-[60%] items-center'
                        style={{
                            
                            "color":"#ffee08",
                            "cursor":"default",
                            "shadow" : "0 0 10px #ffee08, 0 0 20px #ffee08, 0 0 40px #ffee08, 0 0 80px #ffee08",
                                                
                        }} 
                        >
                            <div className='p-12 pr-6 pl-16 '>
                                <img src={logo} alt="TECHFOSS"/>
                            </div>
                            <div>
                        <h6 className='glitch  sm:mr-4 mr-6 sm:text-8xl text-5xl' style={{
                            "text-shadow": "-3px 0 aqua, 0 1px yellow, 1px 0 yellow, 0 -1px yellow",
                            "user-select":"none",
                            "-webkit-user-select":"none",
                            "-ms-user-select":"none",
                        }} data-text="TECHFOSS">TECHFOSS</h6> 
                        <h2 style={{
                             "text-shadow": "0px 0 aqua, 0 0px aqua, 1px 0 yellow, 0 -1px yellow",
                             "color":"#ffee08",
                             "cursor":"default",
                             "letterSpacing": "0.09rem",
                             "shadow" : "0 0 10px #ffee08, 0 0 20px #ffee08, 0 0 40px #ffee08, 0 0 80px #ffee08",
                        }} className='sub-text text-base xs:text-xl sm:text-xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl'>FEBRUARY 27, 2024</h2>
                            </div>
                        </section>
                        
                    </div>
                    <div className='h-[10px] w-[100%]'>
                        <div className='flex pr-8 pl-3 text-black justify-between items-between'>
                            <div>
                                <div><img src={toch} className='sm:h-10 h-6' alt="tochlogo" /></div>
                            </div>
                            <div className='flex'>
                                <div><img src={csi} className='sm:h-10 h-7 ml-3 mr-2' alt="csilogo" /></div>
                                <div> <img src={deptcs} alt="deptcslogo"  className='sm:h-10 h-8 sm:mr-5 sm:ml-5'/> </div>
                            </div>
                        </div>
                    </div>
                <div className='relative'>
                    <About/>
                </div>
            </div>           
        </div>
    )
}