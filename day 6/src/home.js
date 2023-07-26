import React from 'react';
import Navbar from './components/nave';
import MediaCard from './components/card';
import './components/home.css'
// import Avatar from '@mui/material/Avatar';


const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <h1>Choose Any You Are Looking For  :)</h1>
      <MediaCard />
    </div>
  );
};

export default Home;