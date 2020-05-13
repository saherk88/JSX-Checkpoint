import React from 'react';
import './App.css';
import Light from "./Light.jpg";
import './Style.css';

function App() {
  return (
    <div className="App">

<div style={{border:'solid 1px black', maxWidth:'100vw'}}>  
    	<h1 className="title red">Your name here</h1>  
      <div> <br></br> </div>
             <img src={Light} />
       <div> <br></br> </div>         	
             <img src="/Car.jpg"/> 
    </div>   
    <video width={320} height={240} controls>   
        <source src="/myvideo.mp4"  type="video/mp4"/>  
    </video> 
    </div>
  );
}

export default App;
