import pos1 from '../images/pos1.jpeg';
import pos2 from './loading.png'
import './eventpage.css';
import $ from 'jquery';
import { useRef, useEffect } from 'react';

function useHorizontalScroll() {
    const elRef = useRef();
    useEffect(() => {
      const el = elRef.current;
      if (el) {
        const onWheel = e => {
        console.log(e.deltaY)
          if(el.scrollLeft == 0 && e.deltaY < 0) return;
          e.preventDefault();
          el.scrollTo({
            left: (el.scrollLeft) + e.deltaY*(1),
            behavior: "smooth"
          });
        };
        el.addEventListener("wheel", onWheel);
        return () => el.removeEventListener("wheel", onWheel);
      }
    }, []);
    return elRef;
}

export function EventPage() {
    
	


    $(function() {

        var originalBGplaypen = $("#maint").css("background-color"),
            x, y, xy, bgWebKit, bgMoz,
            lightColor = "rgba(255,0,0,0.75)",
            gradientSize = 100;


        $("#maint").on("mousemove","onwheel", function (e) { 
             var originalBGplaypen = $("#maint").css("background-color"),
            x, y, xy, bgWebKit, bgMoz,
         lightColor = "rgba(0,238,253,0.7)",
        gradientSize = 200;
                x  = e.pageX - this.offsetLeft +e.deltaY ;
                y  = e.pageY - this.offsetTop;
                console.log(x,y)
                xy = x + " " + y;

                bgWebKit = "-webkit-gradient(radial, " + xy + ", 0, " + xy + ", " + gradientSize + ", from(" + lightColor + "), to(rgba(255,255,255,0.0))), " + originalBGplaypen;
                bgMoz    = "-moz-radial-gradient(" + x + "px " + y + "px 45deg, circle, " + lightColor + " 0%, " + originalBGplaypen + " " + gradientSize + "px)";

                $("#maint")
                    .css({ background: bgWebKit })
                    .css({ background: bgMoz });
    }).on("mouseleave", function() {
                $("#maint").css({ background: originalBGplaypen });
    }); 


});
	

    return (
        <>
        <div className='bg_yellow  overscroll-x-auto bg-black'>
        <div className="flex p-4 pr-0 ">
            
                <div className='w-[63vw] ' >
                    <div className='w-[63vw] h-[100%] relative '>
                      <div className='text-9xl flex justify-center items-center h-[100%]'><div >EVENTS</div></div>
                    </div>
                </div>
                <div className='w-[7vw] bg-black ' >
                    <div className='w-[7vw] relative bg-black '>
                       
                    </div>
                </div>
        <div className='flex bg-black gap-x-5 py-[50px] p-3'>
        <EventCard id1={"a"} id2={"b"} id3={1}/>
        <EventCard id2={"c"} id1={"d"} id3={2}/>
        <EventCard id1={"e"} id2={"f"} id3={3}/>
        <EventCard id1={"e"} id2={"f"} id3={4} />
          
        </div>
        <div className='w-[7vw] bg-black ' >
                    <div className='w-[7vw]  relative bg-black '>
                       
                    </div>
                </div>
    
       
        </div>
        </div>
        </>
       
    )


}
export function EventCard(
{id1, id2, id3}
) {
    

    return (
        <>

        <div className="maincontainer stick " id={`${id1}`} style={{ left: `${(id3*15)}px`, right:`${((5-id3)*25)+10}px` }}>
            <div className="thecard relative">
                <div className="theback pb-3 pt-0 px-1 cyberpunk">
                <div className='w-[100%] h-[100%] bg-black' >
                    
                    </div>
                </div>
                <div className="thefront pb-4 relative cyberpunk-flipped">
                <div className='w-[100%] h-[100%] bg-black' >
                      
                <div class="relative p-3 bg">
                  <img src={pos1} alt="event" />
                </div>
                </div>
               
                </div>
            </div>
        </div>
    
        </>
    )
}