import { Button } from "@mui/material";
import React from "react";
import {useNavigate } from "react-router-dom";
// import SeatSelection from "./seat";
import './theater.css';
import Navbar from "./nave";
import { BiMoviePlay } from 'react-icons/bi';

export default function Theater(){
  const navigate=useNavigate();
  const handleClick=() =>{
    navigate('/seatselection');
  }
  return(
    <div>
        <Navbar/>
        <h1>Choose theater and time you like</h1>
      <div className="fun">
        <br/>
        <br/>
        <pre><p>Cinipolies:Fun Republic Mall     <BiMoviePlay size={30}/></p></pre>
        
        <Button variant="outlined" onClick={handleClick}>8:30 AM</Button>
        <Button variant="outlined" onClick={handleClick}>10:45 AM</Button>
        <Button variant="outlined" onClick={handleClick}>3:45 PM</Button>
        <Button variant="outlined" onClick={handleClick}>7:45 PM</Button>
        <Button variant="outlined" onClick={handleClick}>10:00 PM</Button>
        <br/>
        <pre><p>KG Cinimas     <BiMoviePlay size={30}/></p></pre>
        <Button variant="outlined" onClick={handleClick}>8:30 AM</Button>
        <Button variant="outlined" onClick={handleClick}>10:45 AM</Button>
        <Button variant="outlined" onClick={handleClick}>3:45 PM</Button>
        <Button variant="outlined" onClick={handleClick}>7:45 PM</Button>
        <Button variant="outlined" onClick={handleClick}>10:00 PM</Button>
        <br/>
        <pre><p>Brookfeilds Mall     <BiMoviePlay size={30}/></p></pre>
        <Button variant="outlined" onClick={handleClick}>8:30 AM</Button>
        <Button variant="outlined" onClick={handleClick}>10:45 AM</Button>
        <Button variant="outlined" onClick={handleClick}>3:45 PM</Button>
        <Button variant="outlined" onClick={handleClick}>7:45 PM</Button>
        <Button variant="outlined" onClick={handleClick}>10:00 PM</Button>
        <br/>
        <pre><p>Broadway Cinimas    <BiMoviePlay size={30}/></p></pre>
        <Button variant="outlined" onClick={handleClick}>8:30 AM</Button>
        <Button variant="outlined" onClick={handleClick}>10:45 AM</Button>
        <Button variant="outlined" onClick={handleClick}>3:45 PM</Button>
        <Button variant="outlined" onClick={handleClick}>7:45 PM</Button>
        <Button variant="outlined" onClick={handleClick}>10:00 PM</Button>
        <br/>
        <pre><p>Ganga Yamuna     <BiMoviePlay size={30}/></p></pre>
        <Button variant="outlined" onClick={handleClick}>8:30 AM</Button>
        <Button variant="outlined" onClick={handleClick}>10:45 AM</Button>
        <Button variant="outlined" onClick={handleClick}>3:45 PM</Button>
        <Button variant="outlined" onClick={handleClick}>7:45 PM</Button>
        <Button variant="outlined" onClick={handleClick}>10:00 PM</Button>
        <br/>
        <pre><p>Thangam     <BiMoviePlay size={30}/></p></pre>
        <Button variant="outlined" onClick={handleClick}>8:30 AM</Button>
        <Button variant="outlined" onClick={handleClick}>10:45 AM</Button>
        <Button variant="outlined" onClick={handleClick}>3:45 PM</Button>
        <Button variant="outlined" onClick={handleClick}>7:45 PM</Button>
        <Button variant="outlined" onClick={handleClick}>10:00 PM</Button>
        <br/>
        <pre><p>Karpagam     <BiMoviePlay size={30}/></p></pre>
        <Button variant="outlined" onClick={handleClick}>8:30 AM</Button>
        <Button variant="outlined" onClick={handleClick}>10:45 AM</Button>
        <Button variant="outlined" onClick={handleClick}>3:45 PM</Button>
        <Button variant="outlined" onClick={handleClick}>7:45 PM</Button>
        <Button variant="outlined" onClick={handleClick}>10:00 PM</Button>
        <br/>
        <pre><p>Arasan Cinimas     <BiMoviePlay size={30}/></p></pre>
        <Button variant="outlined" onClick={handleClick}>8:30 AM</Button>
        <Button variant="outlined" onClick={handleClick}>10:45 AM</Button>
        <Button variant="outlined" onClick={handleClick}>3:45 PM</Button>
        <Button variant="outlined" onClick={handleClick}>7:45 PM</Button>
        <Button variant="outlined" onClick={handleClick}>10:00 PM</Button>
        {/* <h4>follow us</h4>
              <div className="social-links">
                <a href="https://www.facebook.com/profile.php?id=100088095992292"><i className="fab fa-facebook-f" /><img src='https://res.cloudinary.com/dggrpzdnl/image/upload/v1669136043/1_xriwsb.jpg' width={40} height={40}style={{borderRadius:50}}></img></a>
                <a href="https://twitter.com/OMG__burgers"><i className="fab fa-twitter" /><img src='https://res.cloudinary.com/dggrpzdnl/image/upload/v1669136581/7_m5zlyz.jpg' width={40} height={40} style={{borderRadius:50}}></img></a>
                <a href="https://www.linkedin.com/in/omg-burgers-939437257/"><i className="fab fa-linkedin-in" /><img src='https://res.cloudinary.com/dggrpzdnl/image/upload/v1669136599/5_tf2hye.png' width={40} height={40} style={{borderRadius:50}}></img></a>
              </div> */}
        </div> 

         
        </div>
  )
}