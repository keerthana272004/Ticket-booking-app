import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./movie.css";
import { Link } from "react-router-dom";
import Navbar from './nave';
import { Info } from 'phosphor-react';


function Home() {
  return (
    <div>
       <Navbar /> 
        <h2 id="pre-head">Premieres</h2>
    
    <div className="card-pre">
      <div className="crow">
        <div className="ccol1">
      <Card>
        <Card.Img
          src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcStM3HLQyCkcRrXD8hGHmg62nWo4aE8vqBZY6ayWqBGR97-6jnX"
          alt="Card image"
        />
        <Card.Body>
          <Card.Title>MAAVEERAN</Card.Title>
          <Card.Text></Card.Text>
        
          <div className="info"><Link to={'/theater'}><Button >
            Book Tickets
          </Button>
          </Link><Link to={'/Maveeran'}><Info size={32} /></Link></div>
        </Card.Body>
      </Card>
   

      
      <Card >
        <Card.Img
          src="https://res.cloudinary.com/dqitu9wyl/image/upload/v1689350038/wdjenbx53mkddhcuiahj.jpg"
          alt="Card image"
        />
        <Card.Body>
          <Card.Title>MISSION IMPOSSIBLE</Card.Title>
          <Card.Text></Card.Text>
          <div className="info"><Link to={'/theater'}><Button>
          Book Tickets
          </Button></Link><Link to={'/mission'}><Info size={32} /></Link></div>
        </Card.Body>
      </Card>


      <Card>
        <Card.Img
          src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSYVtJmJfo_5VULmdc2A4W3btdkSs3YxHqJdBDNhIC-COrzlL7n"
          alt="Card image"
        />
        <Card.Body>
          <Card.Title>MAAMANNAN</Card.Title>
          <Card.Text></Card.Text>
          <div className="info"><Link to={'/theater'}><Button>
          Book Tickets
          </Button></Link><Link to={'/maamannan'}><Info size={32} /></Link></div>
        </Card.Body>
      </Card>



      <Card>
        <Card.Img
          src="https://m.media-amazon.com/images/M/MV5BMTJjN2NhY2EtYzZkOC00NDQ0LWFhMzEtNWZhYTFhNzNhNjllXkEyXkFqcGdeQXVyMTUyNjIwMDEw.V1.jpg"
          alt="Card image"
        />
        <Card.Body>
          <Card.Title>GOOD NIGHT</Card.Title>
          <Card.Text></Card.Text>
          <div className="info"><Link to={'/theater'}><Button>
          Book Tickets
          </Button></Link><Link to={'/good'}><Info size={32} /></Link></div>
        </Card.Body>
      </Card>


      <Card>
        <Card.Img
          src="https://res.cloudinary.com/dqitu9wyl/image/upload/v1689351372/fdvjyrelzwxn4fbymwn7.jpg"
          alt="Card image"
        />
        <Card.Body>
          <Card.Title>ASVINS</Card.Title>
          <Card.Text></Card.Text>
          <div className="info"><Link to={'/theater'}><Button>
          Book Tickets
          </Button></Link><Link to={'/asvins'}><Info size={32} /></Link></div>
        </Card.Body>
      </Card>
      <br/>
   <br/>
   <br/>
    </div>






        <div className="ccol1">
        <Card>
        <Card.Img
          src="https://m.media-amazon.com/images/M/MV5BMjMwMmU4ZTktMjVkZi00NTQ5LTg2ZjQtZGU2YzA5MWJkMWViXkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_QL75_UX380_CR0,57,380,562_.jpg"
          alt="Card image"
        />
        <Card.Body>
          <Card.Title>POR THOZHIL</Card.Title>
          <Card.Text></Card.Text>
        
          <div className="info"><Link to={'/theater'}><Button>
          Book Tickets
          </Button></Link><Link to={'/por'}><Info size={32} /></Link></div>
        </Card.Body>
      </Card>
  
      
      <Card>
        <Card.Img
          src="https://res.cloudinary.com/dqitu9wyl/image/upload/v1689573047/snea8digngl7zv5rbjlc.jpg"
          alt="Card image"
        />
        <Card.Body>
          <Card.Title>INSIDIOUS</Card.Title>
          <Card.Text></Card.Text>
          <div className="info"><Link to={'/theater'}><Button>
          Book Tickets

          </Button></Link><Link to={'/inside'}><Info size={32} /></Link></div>
        </Card.Body>
      </Card>


      <Card>
        <Card.Img
          src="https://wallpapercave.com/dwp1x/wp12552494.jpg"
          alt="Card image"
        />
        <Card.Body>
          <Card.Title>OPPENHEIMER</Card.Title>
          <Card.Text></Card.Text>
          <div className="info"><Link to={'/theater'}><Button>
          Book Tickets
          </Button></Link><Link to={'/open'}><Info size={32} /></Link></div>
        </Card.Body>
      </Card>



      <Card>
        <Card.Img
          src="https://www.themoviedb.org/t/p/w220_and_h330_face/an8b2d5Hne9zIK3Za1KfmLDwrWO.jpg"
          alt="Card image"
        />
        <Card.Body>
          <Card.Title>INDIANA JONES</Card.Title>
          <Card.Text></Card.Text>
          <div className="info"><Link to={'/theater'}><Button>
          Book Tickets
          </Button></Link><Link to={'/india'}><Info size={32} /></Link></div>
        </Card.Body>
      </Card>


      <Card>
        <Card.Img
          src="https://image.tmdb.org/t/p/original/16HMAMQNceEKrY3odATphns0lm7.jpg"
          alt="Card image"
        />
        <Card.Body>
          <Card.Title>SPIDER VERSE</Card.Title>
          <Card.Text></Card.Text>
          <div className="info"><Link to={'/theater'}><Button>
          Book Tickets
          </Button></Link><Link to={'/spider'}><Info size={32} /></Link></div>
        </Card.Body>
      </Card>
      <br/>
   <br/>
   <br/>
    </div>
    </div>
    </div>
    </div>
  );
}

export default Home;
