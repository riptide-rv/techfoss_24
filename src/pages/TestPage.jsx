import { useEffect, useRef } from "react";
import { EventCard, EventPage } from "./EventPage";
import "./testpage.css";

function useHorizontalScroll() {
  

    const elRef = useRef();
    useEffect(() => {
      const el = elRef.current;
      if (el) {
        const onWheel = e => {
          var isTrackpad = false;
          if (e.wheelDeltaY < 50 && e.wheelDeltaY > -50) {  
       
      isTrackpad = true;
    
  }
 else{
    isTrackpad = false;
  }
  
          console.log(el.scrollWidth - el.clientWidth - Math.round(el.scrollLeft) === 0 && e.deltaY > 0)
          console.log(el.scrollWidth - el.clientWidth - Math.round(el.scrollLeft))
          if(el.scrollLeft == 0 && e.deltaY < 0) return;
          if (
            
            !(el.scrollWidth - el.clientWidth - Math.round(el.scrollLeft) <= 0 && e.deltaY > 0)
          ) {
            e.preventDefault();
          }
          if(isTrackpad) {
            
          el.scrollTo({
            left: (el.scrollLeft) + e.deltaY*(1),
          
           
          });
        }else{
          el.scrollTo({
            left: (el.scrollLeft) + e.deltaY*(2),
            behavior: "smooth"
          });
        }
        };
        el.addEventListener("wheel", onWheel);
        return () => el.removeEventListener("wheel", onWheel);
      }
    }, []);
    return elRef;
}

export function TestPage() {
    const scrollRef = useHorizontalScroll();
   
  return (
    <div className="scroll-container w-[100vw]" id="events" ref={scrollRef} style={{ overflow: "auto" , scrollbarColor: "black"}}>
      <div style={{ whiteSpace: "nowrap" }}>
        <div className="flex inline gap-4">
                <EventPage/>
            </div>
      </div>
    </div>
  );
    
}