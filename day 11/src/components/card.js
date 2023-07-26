import * as React from 'react';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './card.css';
// import { Link } from 'react-router-dom';
import{ CardActionArea} from '@mui/material';
import { useNavigate } from 'react-router-dom';


export default function MediaCard() {
  const navigate=useNavigate();

  const handleSubmit=(e)=>{
    navigate("/movie");

  }
  const handle=(e)=>{
    navigate("/concert");

  }
  return (
    <div class='align'>
      <div class='d'>
      
   <Card sx={{ maxWidth: 400 }} onClick={handleSubmit}>
   <CardActionArea>
      <CardMedia
        sx={{ height: 250 }}
        image="https://www.newsbugz.com/wp-content/uploads/2021/05/vikram-movie.jpg"
        title 
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <center><h1>MOVIES</h1></center>
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Many people enjoy talking about movies. We can talk about movies in casual situations with our friends or family, but we can also talk about movies with business clients or co-workers when we do not have anything else to say and we are just trying to make small talk.
        </Typography>
      </CardContent>
      
      </CardActionArea>
    </Card >
    </div>
<div class='move'>
  <div class='a'>
     <Card className="sdpk" sx={{ maxWidth: 400 }} onClick={handle}>
      <CardActionArea>
      <CardMedia
        sx={{ height: 250 }}
        image="https://wallpapercave.com/wp/wp6686864.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        
         <center><h1> CONCERT</h1></center>
        </Typography>
        <Typography variant="body2" color="text.secondary">
        A concert is a live music performance in front of an audience.The performance may be by a single musician, sometimes then called a recital, or by musical ensemble, such as an orchestra, or band not only famos people does this anyone interested can perform concert.
        </Typography>
      </CardContent>
      </CardActionArea>
      
    </Card>
    </div>
    </div>
    
    </div>
  );
}