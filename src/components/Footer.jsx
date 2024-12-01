import React from 'react'
import { assets } from '../assets/assets'
// Developed by Sonu Pandey
const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr,1fr,1fr] gap-14 my-10 mt-40 text-sm'>
                <div>
                    <p className="text-3xl">WINSTRO.</p>
                    <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, labore. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae cumque sit ab? Voluptatibus quia totam cupiditate libero architecto, nobis itaque. </p>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col  gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col  gap-1 text-gray-600'>
                        <li>+91-1234567890</li>
                        <li>contactwistron@gmail.com</li>
                    </ul>
                </div>

            </div>
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2024@ Wistron.com -All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer