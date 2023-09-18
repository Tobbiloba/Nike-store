import React from 'react';
import Hero from './sections/Hero';
import PopularProducts from './sections/PopularProducts';
import SuperQuality from './sections/SuperQuality';
import Services from './sections/Services';
import SpecialOffer from './sections/SpecialOffer';
import CustomerReviews from './sections/CustomerReviews';
import Subscribe from './sections/Subscribe';
import Footer from './sections/Footer';
import Nav from './components/Nav';
import Explore from './sections/Explore';
import FavouriteCollection from './sections/FavouriteCollection';

const App = () => (
  <main className='relative bg-orange-50'>
    {/* Nav */}
    <Nav />
    <section className='xl:padding-l wide:padding-r padding-b'>
      <Hero />
    </section>
    <section className='padding'>
      <PopularProducts />
    </section>
    {/* <section className='padding'>
      <FavouriteCollection />
    </section> */}
    <section className='padding'>
      <Explore />
    </section>
    
    <section className='padding'>
      <SuperQuality />
    </section>
 
    <section className='padding-x py-10'>
      <Services />

    </section>
    <section className='padding'>
      <SpecialOffer />
    </section>

    <section className='padding'>
      <CustomerReviews />
    </section>
    <section className='padding'>
      <Subscribe />
    </section>
    <section className='padding-x bg-black padding-x padding-t pb-8'>
      <Footer />
    </section>
  </main>
)

export default App;
