import React from 'react';
import Seat from './seat';
import "./style.css";

const SeatRow = ({ seats, onSeatClick }) => {
  return (
    <div className="seat-row">
      {seats.map((seat) => (
        <Seat key={seat.id} seat={seat} onClick={onSeatClick} />
      ))}
    </div>
  );
};

export default SeatRow;