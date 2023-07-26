// import * as React from 'react';
// import Checkbox from '@mui/material/Checkbox';
// import './seat.css';
// import Navbar from './nave';
// // import { TextUnderline } from '@phosphor-icons/react';
// import { Link } from 'react-router-dom';
// // import Theater from './theater';

// const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

// export default function SeatSelection() {
//   return (
//     <div>
//         <Navbar/> 
//         <h1>Select Your Seats Here....</h1>   
//         <div className='row'>
//         <div className='dcol1'>
//      <div >
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
      
//     </div>
//     <div>
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
      
//     </div>
//     <div>
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
      
//     </div>
//     <div>
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
      
//     </div>
//     <br/>
//      <div >
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
      
//     </div>
//     <div>
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
      
//     </div>
//     <div>
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
      
//     </div>
//      <div >
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
      
//     </div>
//     <div>
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
      
//     </div>
//     <div>
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
      
//     </div>
//     </div>

//     <div className='dcol2'>
//     <div>
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//     </div>
//     <div>
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//     </div>
//     <div>
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//     </div>
//     <div>
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//     </div>
//     <br/>
//     <div>
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//     </div>
//     <div>
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//     </div>
//     <div>
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//     </div>
//     <div>
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//     </div>
//     <br/>
//     <div>
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//     </div>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <div className='screen'>
//     <h1><b>______________________________</b></h1>
//     </div>
//     <br/>
//     <br/>
//     <div>
//         <Link to={'/payment'}><button className='but'>Book Tickets..!</button></Link>
//     </div>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     </div>


//     <div className='dcol3'>
//     <div>
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
      
//     </div>
//     <div>
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
      
//     </div>
//     <div>
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
      
      
//     </div>
//     <div>
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
      
      
//     </div>
//     <br/>
//     <div>
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
      
//     </div>
//     <div>
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
      
//     </div>
//     <div>
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
      
      
//     </div>
//     <div>
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
      
//     </div>
//     <div>
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
      
//     </div>
//     <div>
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
//       <Checkbox {...label} />
      
      
//     </div>
    
//     </div>
   
    
//     </div>
//     </div>

//   );
// }