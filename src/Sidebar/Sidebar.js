import React, { useState } from 'react';
import './Sidebar.css';

import Collapse from '@mui/material/Collapse';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import Paper from '@mui/material/Paper';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LaunchIcon from '@mui/icons-material/Launch';

function Section({section,items,onVideo}) {
const [open, setOpen] = useState();
  const [hoveredItemIndex, setHoveredItemIndex] = useState(null);
  const [clickedItemIndex, setClickedItemIndex] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const openBox = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  

  const handleMouseEnter = (index) => {
    setHoveredItemIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredItemIndex(null);
  };
  const onClickDo = (id,index) =>
  {
         onVideo(id);
         setClickedItemIndex(index);
  }
  
  return (
    <>
      <TableRow onClick={() => setOpen(!open)} style={{backgroundColor:'#f7f9fa'}}>
        <TableCell >
          <div className='section'>{section}</div>
          <div style={{fontSize:'12px'}}>23/45 | 7h 45min</div>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }}>
          <Collapse in={open} timeout="auto" unmountOnExit>
           {items.map((item, index) => (
              <div
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                style={{ backgroundColor: (hoveredItemIndex === index) || (clickedItemIndex === index) ? '#d1d7dc' : 'white',cursor: 'pointer' }}
                
              >
                <div className="gap" onClick={() =>onClickDo(item.videoId,index)}>
                  <input type='checkbox' className='checkbox'/>
                  <div className='item'>{item.videoName}</div>
                </div>
                <div className='timer' ><OndemandVideoIcon style={{height:'16px',marginTop:'2px'}}></OndemandVideoIcon><div style={{paddingRight:'100px'}}>42min</div>
                   <div className='btnsection' >
                      <button className='btn1' onClick={handleClick} >
                          <FolderCopyIcon style={{fontSize:'15px',marginTop:'5px',marginRight:'4px'}}></FolderCopyIcon>
                          <div className='resource'>Resources</div>
                          <KeyboardArrowDownSharpIcon></KeyboardArrowDownSharpIcon>
                      </button>
                      <Menu
                        anchorEl={anchorEl}
                        open={openBox}
                        onClose={handleClose}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                      >
                        <MenuItem onClick={handleClose} className='link'><div className='ref'><LaunchIcon style={{fontSize:'15px',marginRight:'10px',marginTop:'4px'}}></LaunchIcon><div>Java Program Reference</div></div></MenuItem>
                        
                     </Menu>
                  </div>
                </div>
              </div>
          ))}

          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default function Sidebar({videoHandler}) {
  const sections = [
    { name: 'Section 1: Core java', 
      items: 
         [
          {videoName:'Java Introduction',videoId:'bm0OyhwFDuY'},
          {videoName:'JDK SetUp',videoId:'WRISYpKhIrc'},
          {videoName:'First Code in Java',videoId:'tSqNBjGacYk'},
          {videoName:'How Java works',videoId:'NHrsLjhjmi4'},
         ] 
    },
    { name: 'Section 2: Advance Java', items: ['Item 4', 'Item 5'] },
    { name: 'Section 3: Maven', items: ['Item 6', 'Item 7', 'Item 8'] },
    { name: 'Section 4: JDBC(Java Database Connectivity)', items: ['Item 6', 'Item 7', 'Item 8'] },
    { name: 'Section 5: Getting started with Spring6', items: ['136. Spring 1st Project', '137. Spring Bean Xml Config', '138. Object Creation'] },
    { name: 'Section 6: EXploring Spring Framework', items: ['Item 6', 'Item 7', 'Item 8'] },
  ];
  const onClickVideo = (id) => {
    videoHandler(id);
  };
  return (
    <TableContainer component={Paper} style={{width:'362px',}}>
      <Table aria-label="collapsible table">
        <TableBody >
          {sections.map((section, index) => (
            <Section key={index} section={section.name} items={section.items} onVideo={onClickVideo}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
