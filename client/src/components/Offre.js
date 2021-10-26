import React from 'react';
import { HotelList } from './_dashboard/hotels';
import PRODUCTS from '../_mocks_/products';

export default function Offre() {
  return (
    <div className="offre">
      <div className="u-center-text">
        <h1 className="offre__text">Decouvrir Nos Promos</h1>
      </div>
      <HotelList hotels={PRODUCTS} />
    </div>
  );
}
