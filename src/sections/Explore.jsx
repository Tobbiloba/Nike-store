import React from 'react';
import { categories } from '../constants';
import CategoryCard from '../components/CategoryCard';
const Explore = () => {
  return (
    <div className='border max-container flex flex-col items-center'>
      <h1 className='text-[58px] font-mono font-bold'>Explore New Collections</h1>
      <p className='mt-3 text-slate-500 text-center leading-8 font-montserrat'>Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.

Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>

<div className="mt-16 space-y-8 w-[100%] grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {categories.map((category) => (
          <CategoryCard key={category.src} {...category}/>
        ))}
      </div>
    </div>
  );
}

export default Explore;
