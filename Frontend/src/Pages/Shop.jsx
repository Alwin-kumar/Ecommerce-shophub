import React from 'react';
import Hero from '../Components/Hero/Hero';
import Popular from '../Components/Popular/Popular';
import Offers from '../Components/Offers/Offers';
import NewCollection from '../Components/NewCollection/NewCollection';
import Newsletter from '../Components/Newsletter/Newsletter';  // ✅ fixed spelling
import Footer from '../Components/Footer/Footer';

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollection />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Shop;
