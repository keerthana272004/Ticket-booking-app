import React from 'react';
import { useNavigate } from 'react-router-dom';
import india from '../image/india.png';
import './maaveran.css';


export default function India(){
    const navigate = useNavigate();
const handleClick = () => 
{
    navigate("/movie");
}
  return (
    <div className='im'>
        <center><img src={india} alt='india'></img></center>
        <center><button className='mb' onClick={handleClick}>Go Back</button></center>
    </div>
  );
}