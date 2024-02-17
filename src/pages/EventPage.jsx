import eventimg from './loading.png';
import './eventpage.css';
import $ from 'jquery';
export function EventPage() {
    
		$(function() {

			var originalBGplaypen = $("#mainf").css("background-color"),
			    x, y, xy, bgWebKit, bgMoz,
			    lightColor = "rgba(255,0,0,0.75)",
			    gradientSize = 100;


     $('#mainf').on("mousemove", function (e) { 
        var originalBGplaypen = $("#mainc").css("background-color"),
        x, y, xy, bgWebKit, bgMoz,
        lightColor = "rgba(0,238,253,0.07)",
        gradientSize = 200;
					x  = e.pageX - this.offsetLeft;
					y  = e.pageY - this.offsetTop;
					xy = x + " " + y;

					bgWebKit = "-webkit-gradient(radial, " + xy + ", 0, " + xy + ", " + gradientSize + ", from(" + lightColor + "), to(rgba(255,255,255,0.0))), " + originalBGplaypen;
					bgMoz    = "-moz-radial-gradient(" + x + "px " + y + "px 45deg, circle, " + lightColor + " 0%, " + originalBGplaypen + " " + gradientSize + "px)";

					$("#mainc")
						.css({ background: bgWebKit })
						.css({ background: bgMoz });
        }).on("mouseleave", function() {
                    $("#mainc").css({ background: originalBGplaypen });
        }); 
    });


              
	

    return (
        <>
        {/* <div className="flex-row grow w-screen h-screen">
            <div className="flex-grow"> Event Header </div>
            <div class="flex flex-row h-screen justify-center p-20 m-20">
                <div className="border-2" style={{height: "max-content"}}>
                <div class="w-96 m-3 h-96 border-2" >
                    <img src={eventimg} alt="Event Image" />
                </div>
                </div>
        
                
            </div>
        </div> */}
       
        <div className="maincontainer" id='mainf'>
            <div className="thecard relative">
                <div className="theback" id="mainc">
              
                </div>
                <div className="thefront relative">
                <div className="absolute card_overlay">
                <div className='absolute bottom-0 left-0 text-left card_dec_bottom flex'>
                    <div className='rectangle text-s pl-3'>Event Type</div>
                    <div className='triangle-r'></div>
                </div> 
                <div className='absolute top-0 right-0 text-left card_dec_top flex'>
                    <div className='triangle-l'></div>
                    <div className='rectangle text-s text-right pr-4'>Event Type</div>
                   
                </div>       
                </div>
                      
                <div class="relative p-3">
                    <div class="altimage" ></div>
                </div>
               
                </div>
            </div>
        </div>
    
        </>
    )


}