import React from 'react';

const CategoryCard = ({ src, color }) => {
  const cardStyle = {
    backgroundImage: `url(${src})`, // Set the background image using the src prop
    backgroundSize: 'contain', // Adjust the background size as needed
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat' // Adjust the background position as needed
  };

  return (
    <div className={`flex flex-1 items-center justify-end h-[450px] w-[300px] lg:w-[400px] lg:h-[530px] rounded-full flex-col max-sm:w-full ${color}`}
    style={cardStyle}
    >
      {/* You can optionally add content inside the card */}
      {/* <img src={src} className='w-[400px] h-auto' alt="image"/> */}
      <div className='border-[15px] rounded-full border-orange-50 bg-orange-500 px-[70px] py-[20px] relative top-[25px]'>
        <p className='text-white'>Details</p>
      </div>
    </div>
  );
};

export default CategoryCard;
