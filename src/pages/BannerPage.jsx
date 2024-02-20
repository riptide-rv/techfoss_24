import './bannerpage.scss';
import {About} from './About'
import { Navbar } from './Navbar';
import logo from '../images/techfossloggo.png';

export function BannerPage(){
    return(
        <div className="w-[100vw] h-[230vh] banner_bg ">
           
            <div className='w-[100%] h-[100%] banner_overlay' id="home">
          
                    <div className='w-[100%] h-[45%] flex justify-center items-center'>
                        <section className='text-9xl cyberpunk2077 flex  pr-6 justify-center w-[60%] h-[60%] items-center'
                        style={{
                            "text-shadow": "-3px 0 aqua, 0 1px yellow, 1px 0 yellow, 0 -1px yellow",
                            "color":"#ffee08",
                            "cursor":"default",
                            "shadow" : "0 0 10px #ffee08, 0 0 20px #ffee08, 0 0 40px #ffee08, 0 0 80px #ffee08",
                                                
                        }} 
                        >
                            <div className='p-12 pr-6 pl-16 glitch'>
                                <img src={logo} alt="TECHFOSS"/>
                            </div>
                            <div>
                        <h6 className='glitch text-8xl mr-4' data-text="TECHFOSS">TECHFOSS</h6> 
                            </div>
                        </section>
                    </div>
                <div className='relative'>
                    <About/>
                </div>
            </div>           
        </div>
    )
}