import logo from './logo.svg';
import './App.css';
import { Routes, Route} from "react-router-dom";
import profilePic from "./images/profile.jpg"
import Sidebar from "./Sidebar.js"
import Home from "./Home.js"
import About from "./About.js"
import Projects from "./Projects.js"

function App() {
  return (
    <div id="main-container">
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Home/>}/>

        <Route path="/about" element={<About/>}/>
        <Route path="/projects"element={<Projects/>}/>
      </Routes>



    </div>
  );
}

export default App;
