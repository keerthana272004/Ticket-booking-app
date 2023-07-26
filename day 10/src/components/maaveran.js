import React from 'react';
import { useNavigate } from 'react-router-dom';
import img from '../image/img.jpg';
import './maaveran.css';
// import { Height } from '@mui/icons-material';
// import './concert.css';


export default function Maveeran(){
    const navigate = useNavigate();
const handleClick = () => 
{
    navigate("/movie");
}
  return (
    <div className='im'>
        <center><img src={img} alt='img'></img></center>
        <center><button className='mb' onClick={handleClick}>Go Back</button></center>
    </div>
  );
}