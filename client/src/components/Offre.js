import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HotelList } from './_dashboard/hotels';
import { queryApi } from '../utils/queryApi';
import Cart from './Cart';

export default function Offre() {
  const [Hotels, setHotels] = useState([]);

  const fetchAllProfiles = async () => {
    const [res, error] = await queryApi(process.env.REACT_APP_HOTEL_SERVICE_API);
    if (error) {
      console.log(error, 'errrroor');
    } else {
      setHotels(res);
    }
  };

  useEffect(() => {
    fetchAllProfiles();
  }, []);

  return (
    <div className="offre">
      <div className="u-center-text">
        <h1 className="offre__text">Decouvrir Nos Promos</h1>
      </div>
      <HotelList hotels={Hotels} />
      <Link to="/booking/me">
        <Cart />
      </Link>
    </div>
  );
}
