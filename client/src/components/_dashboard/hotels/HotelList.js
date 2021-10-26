import PropTypes from 'prop-types';
// material
import { Grid } from '@mui/material';
import HotelCard from './HotelCard';

// ----------------------------------------------------------------------

HotelList.propTypes = {
  hotels: PropTypes.array.isRequired
};

export default function HotelList({ hotels, ...other }) {
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
