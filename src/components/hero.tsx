import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
    <div className='w-full h-[100vh] bg-[url("/images/bg.jpg")] bg-no-repeat bg-cover pt-[176px] pl-[60%]'>
        {/* <Image src={"/images/bg.jpg"} alt=" " width={100} height={100} className='w-full h-[100vh]'></Image> */}
        <div className='w-[400px] h-auto flex flex-col text-white'>

        <div className='text-[24px] text-white'>Welcome to Food Mania!</div>
        <p className='my-4'>Our Priority is to serve you in the best possible way we can!</p>
        <button className='bg-orange-400 p-3 w-[130px] h-[45px] rounded-md  '>Order Now</button>
        </div>
    </div>
  )
}

export default Hero