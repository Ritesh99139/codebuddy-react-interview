import React from 'react';
import classes from './BookMySeat.module.css';

const Seats = props => (
  <div className={classes.section}>
    {props.values.map(seat => {
      const isAvailable = props.availableSeats.includes(seat);
      const isBooked = props.bookedSeats.includes(seat);
      let seatClass;
      if (!isAvailable) {
        seatClass = classes.disabled;
      }

      if (isBooked) {
        seatClass = classes.booked;
      }

      return (
        <div className={seatClass} onClick={props.addSeat} key={seat}>
          {seat}
        </div>
      );
    })}
  </div>
);

export default Seats;
