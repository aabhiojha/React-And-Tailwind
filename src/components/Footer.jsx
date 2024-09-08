import React from 'react'
import {
    AiOutlineFacebook,
    AiOutlineInstagram,
    AiOutlineTwitter,
    AiOutlineDribbble,
    AiOutlineGithub
} from "react-icons/ai";



const Footer = () => {
    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div>
                <h1 className='w-full text-3xl font-bold text-[#00df9a]'>NavBar</h1>
                <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eum voluptatum, esse quidem officia odit porro eaque non exercitationem impedit ab ullam fuga. Necessitatibus quo aspernatur tempore molestias excepturi ipsum!</p>
                <div className='flex md:w-[75%] my-6 justify-between'>
                    <AiOutlineFacebook size={30} />
                    <AiOutlineDribbble size={30} />
                    <AiOutlineGithub size={30} />
                    <AiOutlineInstagram size={30} />
                    <AiOutlineTwitter size={30} />
                </div>
            </div>
            <div className='lg:col-span-2 flex justify-between mt-8'>
                <div>
                    <h6 className='font-medium text-gray-400'>Solutions</h6>
                    <ul>
                        <li className='py-2 text-sm'>Analytics</li>
                        <li className='py-2 text-sm'>Marketing</li>
                        <li className='py-2 text-sm'>Commerce</li>
                        <li className='py-2 text-sm'>Insights</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Support</h6>
                    <ul>
                        <li className='py-2 text-sm'>Pricing</li>
                        <li className='py-2 text-sm'>Documentation</li>
                        <li className='py-2 text-sm'>Guides</li>
                        <li className='py-2 text-sm'>API Status</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Solutions</h6>
                    <ul>
                        <li className='py-2 text-sm'>Analytics</li>
                        <li className='py-2 text-sm'>Marketing</li>
                        <li className='py-2 text-sm'>Commerce</li>
                        <li className='py-2 text-sm'>Insights</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Solutions</h6>
                    <ul>
                        <li className='py-2 text-sm'>Analytics</li>
                        <li className='py-2 text-sm'>Marketing</li>
                        <li className='py-2 text-sm'>Commerce</li>
                        <li className='py-2 text-sm'>Insights</li>
                    </ul>
                </div>
            </div>
        </div>

    );
}

export default Footer;