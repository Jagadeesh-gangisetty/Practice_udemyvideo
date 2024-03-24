import React, {Component,useState}from 'react';
import './App.css';
import Footer from './footer/Footer';
 import Video from './video/Video';
 import { Avatar } from '@mui/material';
 import Sidebar from './Sidebar/Sidebar';
  import { blue } from '@mui/material/colors';

function App() {
   const [currentVideoId,setCurrentVideoId] = useState('bm0OyhwFDuY');
   const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleVideoClick = (id) => {
    setCurrentVideoId(id);
  };

    return (
     < >
        <div className='nav'>
         <div className='subject'>Java Spring Framework 6 with Spring Boot 3</div>
          <div className='flexbox'  onClick={handleClick}><Avatar sx = {{bgcolor:blue[500],width:40,height:35}}>GJ</Avatar><div className='name'>Jagadeesh</div>
    </div>
    </div>
       <div className="App">
        <div className="flex1">
        <Video presentVideoId={currentVideoId}></Video>
        </div>
        <div className="flex2">
        <Sidebar videoHandler={handleVideoClick}></Sidebar>
        </div>
      </div> 
      <Footer/> 
          </> 
  );
 }

export default App;






