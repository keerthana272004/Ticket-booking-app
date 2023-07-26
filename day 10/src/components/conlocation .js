import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import './theater.css';
import Navbar from "./nave";
import { MicrophoneStage } from 'phosphor-react';

export default function Conlocation() {
  const navigate=useNavigate();
  const handleClick=() =>{
    navigate('/conprice');
  }  
  return(
    <div>
        <Navbar/>
        <h1>Music Shows</h1>
      <div className="fun">
        <br/>
        <br/>
        <pre><p>Codissia   <MicrophoneStage size={32} /></p></pre>
        
        <Button variant="outlined" onClick={handleClick}>12/5/23 </Button>
        <Button variant="outlined" onClick={handleClick}>15/6/23</Button>
        <Button variant="outlined" onClick={handleClick}>27/6/23</Button>
        <br/>
        <pre><p>Chennai     <MicrophoneStage size={32} /></p></pre>
        <Button variant="outlined" onClick={handleClick}>13/5/23</Button>
        <Button variant="outlined" onClick={handleClick}>18/6/23</Button>
        <Button variant="outlined" onClick={handleClick}>25/7/23</Button>
        <br/>
        <pre><p>Hindustan college  <MicrophoneStage size={32} /></p></pre>
        <Button variant="outlined" onClick={handleClick}>29/8/23</Button>
        <Button variant="outlined" onClick={handleClick}>19/9/23</Button>
        <Button variant="outlined" onClick={handleClick}>20/10/23</Button>
        <br/>
        <pre><p>Bangalore   <MicrophoneStage size={32} /></p></pre>
        <Button variant="outlined" onClick={handleClick}>28/9/23</Button>
        <Button variant="outlined" onClick={handleClick}>15/11/23</Button>
        <Button variant="outlined" onClick={handleClick}>24/12/23</Button>
        <br/>
        <pre><p>Hydrabad   <MicrophoneStage size={32} /></p></pre>
        <Button variant="outlined" onClick={handleClick}>1/11/23</Button>
        <Button variant="outlined" onClick={handleClick}>14/3/24</Button>
        <Button variant="outlined" onClick={handleClick}>16/9/23</Button>
        <br/>
        <br/>
        <br/>
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