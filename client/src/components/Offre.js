import React from 'react';
import { ProductCartWidget, ProductList } from './_dashboard/products';
import PRODUCTS from '../_mocks_/products';

export default function Offre() {
  return (
    <div className="offre">
      <h1 className="offre__text">Decouvrir Nos Promos</h1>
      <ProductList products={PRODUCTS} />
      {/* <ProductCartWidget /> */}
    </div>
  );
}
