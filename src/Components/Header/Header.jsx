import { render } from 'preact';
import React, { useState } from 'react'
import logo from '../assets/logo.png'
import hero from '../assets/hero.png'

console.log("Header render outside");


const Header = () => {
  return (
    <>
      {/* <div className="bg-slate-100	 py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className=''>
              <img src={logo} alt="" />
            </div>
            <div className=''>
              <ul className='flex gap-8'>
                <a href="#"><li className='cursor-pointer hover:text-gray-600 font-bold'>Каталог</li></a>
                <a href="#Category"><li className='cursor-pointer hover:text-gray-600 font-bold'>Доставка</li></a>
                <a href="#Product"><li className='cursor-pointer hover:text-gray-600 font-bold'>Условия</li></a>
                <a href="#Footer"><li className='cursor-pointer hover:text-gray-600 font-bold'>Контакты</li></a>
              </ul>
            </div>
            <div className='flex flex-col items-end'>
              <div className='flex gap-2'>
                <p className='text-xl	s'>+ 375 736 463 64 72</p>
                <p className='text-xl ml-3 text-gray-500'>/</p>
                <p className='text-xl'>+ 375 736 463 64 72</p>
              </div>
              <div>
                <span className='text-sm	text-slate-300'>Заказать звонок</span>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="bg-slate-100 py-5">
  <div className="container">
    <div className="flex flex-col md:flex-row items-center justify-between">
      <div className="mb-4 md:mb-0">
        <img src={logo} alt="" />
      </div>
      <div className="hidden md:flex">
        <ul className="flex flex-col md:flex-row gap-4 md:gap-8">
          <a href="#">
            <li className="cursor-pointer hover:text-gray-600 font-bold">Каталог</li>
          </a>
          <a href="#Category">
            <li className="cursor-pointer hover:text-gray-600 font-bold">Доставка</li>
          </a>
          <a href="#Product">
            <li className="cursor-pointer hover:text-gray-600 font-bold">Условия</li>
          </a>
          <a href="#Footer">
            <li className="cursor-pointer hover:text-gray-600 font-bold">Контакты</li>
          </a>
        </ul>
      </div>
      <div className="flex flex-col items-start md:items-end">
        <div className="flex gap-2">
          <p className="text-xl">+ 375 736 463 64 72</p>
          <p className="text-xl ml-3 text-gray-500">/</p>
          <p className="text-xl">+ 375 736 463 64 72</p>
        </div>
        <div>
          <span className="text-sm text-slate-300">Заказать звонок</span>
        </div>
      </div>
    </div>
  </div>
</div>

      <div className='mt-32'>
        <div className="container">
          <div id='Hero' className='flex items-center justify-center gap-2 flex-wrap'>
            <div className='flex flex-col gap-8 items-start w-[470px]'>
              <h2 className='text-5xl font-bold w-4/6'>Мебель на любой вкус!</h2>
              <ul className='flex flex-col list-disc	text-lg font-normal'>
                <li className="marker:text-yellow-300">Худи, чашки для горячего чая и термосы </li>
                <li className="marker:text-yellow-300">Eлочные игрушки, брелочки</li>
                <li className="marker:text-yellow-300">Начало списка вещей, которые можно </li>
              </ul>
              <button className='py-2.5 px-20	bg-amber-500 rounded-3xl text-white	hover:bg-yellow-500  duration-300'>Перейти в каталог</button>
            <a href="#"><p className='items-center flex text-center text-amber-500'>Внести список артикулов</p></a>
            </div>
            <div className="w-[500px] h-[350px]">
              <img className="w-full h-full" src={hero} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
