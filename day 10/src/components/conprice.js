import React from "react";
import Navbar from "./nave";
import { useNavigate } from "react-router-dom";
import {Button} from "@mui/material";
import { GiMoneyStack } from 'react-icons/gi';


export default function Conprice() {
    const navigate=useNavigate();
    const handleClick1=() =>{
      navigate('/Price500');
    } 
    const handleClick2=() =>{
      navigate('/Price1000');
    } 
    const handleClick3=() =>{
      navigate('/Price3000');
    } 
    const handleClick4=() =>{
      navigate('/Price5000');
    } 
return(
    <div>
        <Navbar/>
        <h1>Music Shows</h1>
      <div className="fun">
        <pre><p>Price Range  <GiMoneyStack size={32}/></p></pre>
        
        <Button variant="outlined" onClick={handleClick1}>Rs:500 - 1000 </Button>
        <Button variant="outlined" onClick={handleClick2}>Rs:1000 - 3000</Button>
        <Button variant="outlined" onClick={handleClick3}>Rs:3000 - 5000</Button>
        <Button variant="outlined" onClick={handleClick4}>Rs:above 5000</Button>
        <br/>
        <br/>

    </div>
    </div>
    );
}