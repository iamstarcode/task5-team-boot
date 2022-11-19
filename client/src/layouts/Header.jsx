import React from 'react'
import Logo from '../assets/images/Kitchen-Diary.png'
import menu from '../assets/icons/menu.svg'

function Header() {
  return (
    <div className='flex-row justify-between items-center flex px-6  lg:px-[100px] md:px-[70px] py-4 overflow-hidden  h-20 gap-12'>
      <span className='block h-full  py-2'> <img src={Logo} alt='Kitchen Diary' /> </span> 
      <span className='hidden lg:flex flex-row justify-between items-center gap-10'>
        <ul>Home </ul>
        <ul>About </ul>
        <ul>Recipes </ul>
        <ul>Blog </ul> 
        <ul>Contact Us </ul>
        <ul>FAQs </ul>
        </span> 
      <span className='hidden lg:flex flex-row gap-3'>
        <button className='button text-[#F67A24] border border-[#F67A24] hover:border-[#F9A66D] bg-white'> Log in</button>
        <button className='button bg-[#F67A24] hover:bg-[#F9A66D] text-white'> Sign Up</button>
         </span>  
         <span className='lg:hidden flex flex-row gap-3'>
         <img src={menu} alt='menu' />
         </span>  

    </div>
  )
}

export default Header