import React from 'react';
import { useNavigate } from 'react-router-dom';
import maamannan from '../image/maamannan.png';
import './maaveran.css';


export default function Maamannan(){
    const navigate = useNavigate();
const handleClick = () => 
{
    navigate("/movie");
}
  return (
    <div className='im'>
        <center><img src={maamannan} alt='maamannan'></img></center>
        <center><button className='mb' onClick={handleClick}>Go Back</button></center>
    </div>
  );
}