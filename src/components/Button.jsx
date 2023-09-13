import React from 'react';

const Button = ({label, iconUrl}) => {
  return (
    <button className='flex justify-center rounded-full items-center gap-2 px-7 py-4 border border-coral-red text-white font-montserrat text-lg leading-none bg-coral-red'>{label} <img src={iconUrl} alt={iconUrl} className='ml-2 rounded-full w-5 h-5'/></button>
  );
}

export default Button;