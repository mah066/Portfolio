import logo from './logo.svg';
import './App.css';
import profilePic from "./images/profile.jpg"
import Sidebar from "./Sidebar.js"

function App() {
  return (
    <div id="main-container">
      <Sidebar/>
      <div className='Home-page'>
        <img src={profilePic} alt="My Profile" className="profile-image" />
        <h1 className='heading'>Hello, I'm Muhammad Aazim!</h1>
        <h6 className='sub-heading'>Computer Science at University of Manchester</h6>

      </div>


    </div>
  );
}

export default App;
