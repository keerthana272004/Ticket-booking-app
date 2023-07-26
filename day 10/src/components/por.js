import React from 'react';
import { useNavigate } from 'react-router-dom';
import por from '../image/por.png';
import './maaveran.css';


export default function Por(){
    const navigate = useNavigate();
const handleClick = () => 
{
    navigate("/movie");
}
  return (
    <div className='im'>
        <center><img src={por} alt='por'></img></center>
        <center><button className='mb' onClick={handleClick}>Go Back</button></center>
    </div>
  );
}