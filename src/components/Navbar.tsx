import React, { useState } from 'react'
import logo from '../Assets/logo.png'
import { HiArrowRight } from 'react-icons/hi2';
import HomeIcon from '@mui/icons-material/Home'
import { HiOutlineBars3 } from "react-icons/hi2";
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { PopupButton } from 'react-calendly';

const Nav = () => {
  const [openMenu, setOpenMenu] = useState (false)
  const menuOptions = [
    {
      text: 'Home',
      url: '#',
      icon: <HomeIcon />
    },
    {
      text: 'Blog',
      url: '#',
      icon: <HomeIcon />
    },
    {
      text: 'Contact Us',
      url: '#',
      icon: <HiArrowRight />
    },
  ]
  const rootElement = document.getElementById("root");
  if (!rootElement) {
    return null;
  }
  return (
    <nav>
      <div  className='navContainer'>
      <img src={logo} alt='logo' className='navLogo' />
      <p className='logoText'>etra</p>
      </div>
      <div className='navLinks'>
        <a href='#'>Home</a>
        <a href='#'>Blog</a>
        <PopupButton
        className='navButton'
        url="https://calendly.com/hello-choosevetra/30min"
        rootElement={rootElement}
        text="Contact Us"
      />
      
      </div>
      <div className='navMenu'>
        <HiOutlineBars3  onClick={() => setOpenMenu(true)}/>
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor='right'>
        <Box sx={{ width: 250 }} role="presentation" onClick={() => setOpenMenu(false)} onKeyDown={() => setOpenMenu(false)} >
          <List>
            {menuOptions.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </nav>
  )
}

export default Nav
