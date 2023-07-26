import React from 'react';
import { useNavigate } from 'react-router-dom';
import asvins from '../image/asvins.jpg';
import './maaveran.css';

export default function Asvins(){
    const navigate = useNavigate();
const handleClick = () => 
{
    navigate("/movie");
}
  return (
    <div className='im'>
        <center><img src={asvins} alt='asvins'></img></center>
        <center><button className='mb' onClick={handleClick}>Go Back</button></center>
    </div>
  );
}