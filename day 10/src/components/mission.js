import React from 'react';
import { useNavigate } from 'react-router-dom';
import mission from '../image/mission.jpg';
import './maaveran.css';
// import { Height } from '@mui/icons-material';
// import './concert.css';


export default function Mission(){
    const navigate = useNavigate();
const handleClick = () => 
{
    navigate("/movie");
}
  return (
    <div className='im'>
        <center><img src={mission} alt='mission'></img></center>
        <center><button className='mb' onClick={handleClick}>Go Back</button></center>
    </div>
  );
}