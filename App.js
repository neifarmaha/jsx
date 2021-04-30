import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './style.css';
import image from './image.jpg';

function App() {
  return (
    <div>
    <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
      <h1 className="title red">Your name here</h1>
      <br />
       
      <img  alt="" className="space" src={image}/>
      <br />
     <img alt=" " className="pub" src="/imgp.jpg" />
     
    </div>
    <video width={320} height={240} controls>
      <source src="myVideo.mp4" type="video/mp4" />
    </video>
    <iframe width={853} height={480} src="https://www.youtube.com/embed/pj9cNnT7PJs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
  );
}

export default App;
