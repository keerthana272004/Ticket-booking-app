import React from 'react';
// import "./seatlayout.css";
import "./style.css";

const SeatLayout = ({ seats, onSeatClick }) => {
  return (
    <div>
      {seats.map((seat) => (
        <div
          key={seat.id}
          className={`seat ${seat.selected ? 'selected' : seat.available ? 'available' : 'unavailable'}`}
          onClick={() => onSeatClick(seat.id)}
        >
          {seat.row}{seat.number}
        </div>
      ))}
    </div>
  );
};

export default SeatLayout;
