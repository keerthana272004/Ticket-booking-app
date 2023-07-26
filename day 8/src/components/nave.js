import React from 'react';
// import { Link } from 'react-router-dom';
import './nave.css';
import AccountMenu from './accountmenu';
import { FilmSlate } from 'phosphor-react';
import { MicrophoneStage } from 'phosphor-react';
// import Avatar from '@mui/material/Avatar';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className='nrow'>
        <div className='ncol1'>
      <FilmSlate size={32} /><MicrophoneStage size={32} />
      </div>
      <div className='ncol2'>
      <AccountMenu/>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;