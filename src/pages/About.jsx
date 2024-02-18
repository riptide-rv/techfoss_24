
import './About.css';
import Contents from './About_Components/Contents/Contents';
import Images from './About_Components/Images/Images';

export function About() {
  return (
    <div className="about">
       <div className="bg-about"></div>
       <div className="noise"></div>
    
      <h1 className='title pl-2'>ABOUT</h1>
      <Contents/>
      <Images/> 
     
    </div>
  );
}

