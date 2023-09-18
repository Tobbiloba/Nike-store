import React from 'react';

const FavouriteCollection = () => {
  return (
    <div className='max-container flex flex-col items-center justify-center pb-[10rem]'>
        <h1 className='text-slate-600 font-montserrat text-4xl font-bold'>Our favorite Collection</h1>
        <p className='text-orange-500 mt-3 font-mono text-xl'>Loren ipsum dolor sit amet consecteur. Loren ipsum dolor sit amet consecteur.</p>
        <div className='flex justify-between mt-8 flex-col lg:flex-row flex-wrap lg:h-[25rem] h-[75rem]'>
            <div className='w-3/12 '>
                <img src='https://boogzelclothing.com/cdn/shop/files/Blue-Heart-Aesthetic-Sneakers-Boogzel-Clothing-6_800x.jpg?v=1693113660' alt='shoe' className='w-[100%] h-[25rem] object-contain'/>
            </div>
            <div className='w-5/12 h-[10rem]'>
                <img src='https://images.complex.com/complex/images/c_crop,h_3154,w_4811,x_2446,y_1886/c_fill,f_auto,g_center,w_1200/fl_lossy,pg_1/ccu6py5wzctnjxjzrbtg/air-jordan-1-off-white-aq0818-100-pair' alt='shoe' className='w-[100%] h-[35rem] object-contain'/>
            </div>
            <div className='w-3/12 h-[10rem]'>
               <img src='https://di2ponv0v5otw.cloudfront.net/posts/2020/09/03/5f5162db3a0db91cc982db2a/m_5f516308633cfc60652f2986.jpg' alt='shoe' className='w-[100%] h-[25rem] object-contain'/> 
            </div>
            
        </div>
    </div>
  );
}

export default FavouriteCollection;
