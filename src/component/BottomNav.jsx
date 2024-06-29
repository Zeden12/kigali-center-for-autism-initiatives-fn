import React from 'react'

const BottomNav = () => {
  return (
    <div className='flex justify-between items-center mx-auto px-4 py-[10px]'>
        <div>
            <h1 className='font-poppins font-bold'>KCA</h1>
        </div>
        <nav className='font-poppins font-medium text-[13px] flex items-center gap-[20px]'>
            <ul><a href="#">Home</a></ul>
            <ul><a href="#">Who We Are</a></ul>
            <ul><a href="#">Projects</a></ul>
            <ul><a href="#">Blog</a></ul>
            <ul><a href="#">Contact Us</a></ul>
            <button className='bg-[#FFC107] px-[20px] py-[10px] rounded-[5px]'>Donate</button>
        </nav>
    </div>
  )
}

export default BottomNav