import React from 'react';
import { useNavigate } from 'react-router-dom';
import inside from '../image/inside.jpg';
import './maaveran.css';


export default function Inside(){
    const navigate = useNavigate();
const handleClick = () => 
{
    navigate("/movie");
}
  return (
    <div className='im'>
        <center><img src={inside} alt='inside'></img></center>
        <center><button className='mb' onClick={handleClick}>Go Back</button></center>
    </div>
  );
}