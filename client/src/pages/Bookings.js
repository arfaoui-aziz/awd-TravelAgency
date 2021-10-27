import React, { useEffect, useState } from 'react';

import { queryApi } from '../utils/queryApi';
import Hero from '../components/Hero';
import Navbar from '../layouts/Navbar';
import BookingCard from '../components/BookingCard';

export default function Bookings() {
  const [bookingData, setBookingData] = useState([]);
  const [myBookings, setMyBookings] = useState([]);

  const fetchMyBookings = async () => {
    const [res, error] = await queryApi(`${process.env.REACT_APP_BOOKING_SERVICE_API}/me/1`);
    if (error) {
      console.log(error, 'errrroor');
    } else {
      setMyBookings(res.MyBookings);
      setBookingData(res.bookInfo.flat());
      console.log(res);
    }
  };

  useEffect(() => {
    fetchMyBookings();
  }, []);

  return (
    <div className="container">
      <Navbar />
      <Hero />
      {bookingData.map((booking) => (
        <BookingCard key={booking.id} bookingItem={booking} bokl={myBookings} />
      ))}
      <br />
    </div>
  );
}
