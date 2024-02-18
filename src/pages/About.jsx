
import './About.css';
import Contents from './About_Components/Contents/Contents';
import Images from './About_Components/Images/Images';

function App() {
  return (
    <div className="about">
       <div className="bg"></div>
       <div className="noise"></div>
    
      <h1 className='title'>About Us</h1>
      <Contents/>
      <Images/> {/* This component will only be visible in bigger screens */}
     
    </div>
  );
}

export default App;
