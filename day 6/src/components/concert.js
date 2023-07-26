import React from 'react';
import { Link } from 'react-router-dom';
import './concert.css';
import Navbar from './nave';

function Hom(){
  return (
    
    <div className="back">
      <Navbar />        
      <center><h2 className='hr'>Music Shows</h2></center>
       <div className="music-panels1">
        <h1>Events For You.......</h1>
      <Link to="/conlocation">
        <img
          src="https://tse2.mm.bing.net/th?id=OIP.jXeGfTKtQvIX90DsxhU9UgHaE8&pid=Api&P=0&h=180"
        />
      </Link>
      
      <Link to="/conlocation">
        <img
          src="https://res.cloudinary.com/dqitu9wyl/image/upload/v1689259143/bftfhjtko5vqxwzk7fly.jpg"
          alt="s"
        />
      </Link>

      <Link to="/conlocation">
        <img src="https://res.cloudinary.com/dqitu9wyl/image/upload/v1689259400/fvwob3abwusp14xk2pdl.jpg" />
      </Link>

      <Link to="/conlocation">
        <img src="https://res.cloudinary.com/dqitu9wyl/image/upload/v1689259559/kikxwvzzzlgx163e1jfs.jpg" />
      </Link>

      <Link to="/conlocation">
        <img src="https://res.cloudinary.com/dqitu9wyl/image/upload/v1689259820/v4zctcnmtkrzw7inceni.jpg" />
      </Link>

      <Link to="conlocation">
        <img src="https://res.cloudinary.com/dqitu9wyl/image/upload/v1689260121/abenrpd5l8vvkcdgqees.webp" />
      </Link>

      <Link to="/conlocation">
        <img src="https://res.cloudinary.com/dqitu9wyl/image/upload/v1689260359/br4eyqmcdjcsb3zvqlsc.jpg" />
      </Link>

      <Link to="/conlocation">
        <img src="https://res.cloudinary.com/dqitu9wyl/image/upload/v1689260555/scqyupunuby1pzmgohgg.jpg" />
      </Link>

      <Link to="/conlocation">
      <img src="https://res.cloudinary.com/dqitu9wyl/image/upload/v1689260713/qediswqkhgji5cce3mda.jpg" />
      </Link>

    </div>
  </div> 
  )
}
export default Hom;
