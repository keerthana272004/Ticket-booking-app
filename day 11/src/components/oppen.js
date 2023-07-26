import React from 'react';
import { useNavigate } from 'react-router-dom';
import oppen from '../image/oppen.png';
import './maaveran.css';


export default function Oppen(){
    const navigate = useNavigate();
const handleClick = () => 
{
    navigate("/movie");
}
  return (
    <div className='im'>
        <center><img src={oppen} alt='oppen'></img></center>
        <center><button className='mb' onClick={handleClick}>Go Back</button></center>
    </div>
  );
}