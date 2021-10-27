import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// material
import { Grid } from '@mui/material';
import HotelCard from './HotelCard';
import { queryApi } from '../../../utils/queryApi';

// ----------------------------------------------------------------------

HotelList.propTypes = {
  hotels: PropTypes.array.isRequired
};

export default function HotelList({ hotels, ...other }) {
  const [booked, setBooked] = useState([]);

  const fetchBooked = async () => {
    const [res, error] = await queryApi(process.env.REACT_APP_BOOKING_SERVICE_API);
    if (error) {
      console.log(error, 'errrroor');
    } else {
      setBooked(res);
      console.log(res);
    }
  };

  useEffect(() => {
    fetchBooked();
  }, []);

  return (
    <Grid container spacing={3} {...other}>
      {hotels.map((hotel) => (
        <Grid key={hotel.id} item xs={12} sm={6} md={4}>
          <HotelCard hotel={hotel} />
        </Grid>
      ))}
    </Grid>
  );
}
