import './App.css';
import'./style.css';
import myImage from "./imageInSrc.jpg"
import myMovie from "./myVideo.mp4"

function App() {
  return (
    <div className="App">
        <div style= {{border: "solid 1px black", maxWidth:'100vw'}}>
          <h1 className="titlered">Your Name Here</h1>
          <img src={myImage} alt="element"/> <br/>  
          <img src="/imageInPublic.jpg" alt="elementImage" /> <br/>                  
        <video  width="320" height="240" controls>      
            <source src={myMovie} type="video/mp4"/>
        </video>
        </div>
    </div>
  );
}

export default App;
