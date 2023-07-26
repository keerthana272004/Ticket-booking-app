import React from 'react';
import { useNavigate } from 'react-router-dom';
import spider from '../image/spider.png';
import './maaveran.css';

export default function Spider(){
    const navigate = useNavigate();
const handleClick = () => 
{
    navigate("/movie");
}
  return (
    <div className='im'>
        <center><img src={spider} alt='spider'></img></center>
        <center><button className='mb' onClick={handleClick}>Go Back</button></center>
    </div>
  );
}