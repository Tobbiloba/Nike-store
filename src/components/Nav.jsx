import React from 'react';
import {headerLogo} from '../assets/images';
import {hamburger} from '../assets/icons'
import { navLinks } from '../constants';
import Button from './Button';
import {BiSearch} from 'react-icons/bi'
const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a href="/" className=' text-[22px] flex flex-row items-center'>
                {/* <img src={headerLogo} alt="logo" className='' width={130} height={29}/> */}
                TOB<span className=' textBorder p-2'> BIE</span>
            </a>

            <div className="lg:max-w-[25%] min-w-[20rem] lg:flex hidden items-center justify-between max-sm:flex-col bg-white gap-5 px-5 py-1  rounded-full">
        <input type="text" placeholder="subscribe@nikee.com" className="w-[70%] text-[16px] font-mono text-center outline-none h-[100%]"/>
        <div className="flex max-sm:justify-end py-2 items-center max-sm:w-full">
          {/* <Button label="Sign Up" fullWidth/> */}
          <div className='border-2 pl-4 border-white border-l-black'>
            <BiSearch className='text-xl'/>
          </div>
          
        </div>
      </div>
            <ul className='w-fit flex justify-center items-center gap-16 max-lg:hidden'>
                {
                    navLinks.map((item) => (
                        <li key={item.label}>
                            <a href={item.href} className='font-montserrat text-[16px] text-black'>{item.label}</a>
                        </li>
                    ))
                }
            </ul>
          
            <div className='lg:hidden'>
                <img src={hamburger} alt={hamburger} width={25} height={25}/>
            </div>
        </nav>
    </header>
  );
}

export default Nav;
