import React from 'react';
import { useNavigate } from 'react-router-dom';
import good from '../image/good.png';
import './maaveran.css';
// import { Height } from '@mui/icons-material';
// import './concert.css';


export default function Good(){
    const navigate = useNavigate();
const handleClick = () => 
{
    navigate("/movie");
}
  return (
    <div className='im'>
        <center><img src={good} alt='good'></img></center>
        <center><button className='mb' onClick={handleClick}>Go Back</button></center>
    </div>
  );
}