import './bannerpage.scss';
import {About} from './About'
export function BannerPage(){
    return(
        <div className="w-[100vw] h-[230vh] banner_bg ">
            <div className='w-[100%] h-[100%] banner_overlay'>
                    <div className='w-[100%] h-[45%] flex justify-center items-center'>
                        <section className='text-9xl cyberpunk2077 flex justify-center w-[60%] h-[60%] items-center'
                        style={{
                            "text-shadow": "-3px 0 aqua, 0 1px yellow, 1px 0 yellow, 0 -1px yellow",
                            "color":"#ffee08",
                            "cursor":"default",
                                                
                        }} 
                        ><div>
                        <h6 className='glitch text-8xl' data-text="TECHFOSS">TECHFOSS</h6> 
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