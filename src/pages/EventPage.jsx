import pos1 from '../images/ethicalhacking.jpeg';
import pos2 from '../images/nocodetool.jpeg'
import pos3 from '../images/nontech1.jpeg'
import pos4 from '../images/gamezone.jpeg'
import pos5 from '../images/openmic.jpeg'
import pos6 from '../images/lstation.jpeg'
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
        <div className="flex sm:flex-row flex-col p-4 pr-0 ">
            
                <div className='w-[60vw] ' >
                    <div className='w-[63vw] h-[100%] relative '>
                      <div className='sm:text-9xl text-6xl w-[100vw] pr-10 sm:pr- sm:w-[100%] flex justify-center items-center h-[100%]'><div >EVENTS</div></div>
                    </div>
                </div>
                <div className='w-[7vw] bg-black ' >
                    <div className='w-[7vw] relative bg-black '>
                       
                    </div>
                </div>
        <div className='flex flex-col sm:flex-row w-[100vw] sm:w-[100%] items-center gap-x-0 bg-black sm:gap-x-5 gap-y-20 sm:gap-y-0 py-[50px] p-3'>
        <EventCard id1={"a"} id2={"b"} id3={1} forml={"https://bit.ly/ethicalhacking_TF"} eventName={"ETHICAL HACKING"} imageSrc={pos1} type={"WORKSHOP"}/>
        <EventCard id2={"c"} id1={"d"} id3={2} eventName={"NO CODE TOOLS"} imageSrc={pos2} forml={"https://bit.ly/airtable_TF"} type={"WORKSHOP"}/>
        <EventCard id1={"e"} id2={"f"} id3={3} eventName={"CAPTURE THE FLAG"} type={"TECHNICAL"} imageSrc={pos3} forml={"https://forms.gle/XX3dvrX4qPxnTXC3A"}/>
        <EventCard id1={"e"} id2={"f"} id3={4} eventName={"BINARY BOUNTY"} type={"TECHNICAL"} imageSrc={pos3}  forml={"https://forms.gle/FACH4qdoJKLgTdSk8  "}/>
        <EventCard eventName={"LEARNING STATION"} id3={5} type={"TECHNICAL"} imageSrc={pos6} />
        <EventCard eventName={"GAME ZONE"} id3={6} type={"NON TECHNICAL"} imageSrc={pos4}/>
        <EventCard eventName={"OPEN MIC"} id3={7} type={"NON TECHNICAL"} imageSrc={pos5} />    
       
          
        </div>
        <div className='w-[70vw] ' >
                    <div className='w-[63vw] h-[100%] relative '>
                      <div className='sm:text-3xl text-2xl pl-10 w-[100vw] pr-10 sm:pr- sm:w-[100%] flex justify-center items-center h-[100%]'><div >CLICK ON CARD TO REGISTER</div></div>
                    </div>
                </div>
    
       
        </div>
        </div>
        </>
       
    )


}
export function EventCard(
{id1, id2, id3, eventName,date, imageSrc, type, forml}
) {
    

    return (
        <>

        <div className="maincontainer sm:sticky" id={`${id1}`} style={{ left: `${(id3*20)+20}px`, right:`${((8-id3)*25)+10}px` }}>
            <div className="thecard relative">
                <div className="theback pb-3 pt-0 px-1 cyberpunk">
                
                <div className='w-[100%] h-[100%] bg-black' >
                    

                   
                    <div className='h-[100%] flex justify-center items-center' style={{}}>
                        <div className='flex-col text-white'>
                        <div>{eventName}</div>
                        {id3<5 ?<a target='_blank' href={forml}><button className='regbutton m-3 text-sm'>REGISTER</button></a>:<div className='text-sm'>SPOT EVENT</div> }
                    
        
                        </div>
                        
                    </div>
                    
                    </div>
                </div>
                <div className="thefront pb-4  relative cyberpunk-flipped">
                <div className='w-[100%] h-[100%] flex items-center justify-center bg-black' >
                <div className="relative justify-center items-center flex-col m-2  revimg p-3 bg">
                  <img src={imageSrc} className='flex-grow' alt="event" />
                  <div style={{
                    color:"#ffee08",
                    "margin-top": "19px",
                    "letter-spacing":"4px",
                    "border-color":"#ffee08"
                  }} className='text-xl flex-grow border-2 p-3'>{type}</div>
                 
                </div>
                </div>
               
                </div>
            </div>
        </div>
    
        </>
    )
}