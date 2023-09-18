import React, {useState} from 'react';
import {star} from '../assets/icons';
import {AiFillStar} from 'react-icons/ai'
import {BsBag} from 'react-icons/bs'
const PopularProductCard = ({imgURL, name, price, description}) => {
  const [onHover, setOnHover] = useState(false)
  return (
    <div className={`flex flex-1 items-center h-[600px] lg:h-[630px] px-4 pt-4 pb-8 rounded-full flex-col  w-fit cursor-pointer ${onHover ? 'bg-orange-100' : 'bg-white'} max-sm:w-fit`} onMouseEnter={() => setOnHover(true)} onMouseLeave={() => setOnHover(false)}>
      <img src={imgURL} alt={name} className='lg:w-[360px] border-4 border-white rounded-full h-[360px]'/>
      <div className='mt-8 flex justify-start gap-2' >
        <AiFillStar size={22} color='#f97316'/>
        <AiFillStar size={22} color='#f97316'/>
        <AiFillStar size={22} color='#f97316'/>
        <AiFillStar size={22} color='#f97316'/>
        {/* <p className='font-montserrat text-xl leading-normal text-slate-gray'>(4.5)</p> */}
      </div>
      <div className='w-full px-1 mt-3 flex flex-row justify-between'>
        <div>
                <h3 className='text-[20px] mt-2 leading-normal text-orange-500 font-semibold font-palanquin'>{name}</h3>
                <p className='text-[16px] font-mono'>{description}</p>
      
        </div>
        <p className='font-semibold font-montserrat text-[23px] leading-normal text-orange-600 mt-2'>{price}</p>

      </div>

      <div className='flex flex-row border border-black gap-3 px-7 py-2 rounded-full mt-[10%]'>
        <BsBag size={22}/>
        <p className='font-montserrat text-xl font-medium'>Cart</p>
      </div>

    </div>
  );
}

export default PopularProductCard;
