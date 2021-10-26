import React from 'react';
import Offre from '../components/Offre';
import Hero from '../components/Hero';
import Navbar from '../layouts/Navbar';

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Offre />
    </div>
  );
}
