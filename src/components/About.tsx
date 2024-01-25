"use client"
import React, {useTransition, useState} from 'react'
import Image from 'next/image'
import AboutImage from '@/assets/pngegg (1).png'
export default function About(){
    
    return(
        <section className="text-white">
           
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image src={AboutImage} alt='ImageAbout' width={400} height={400}></Image>
                <div>
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className='text-base lg:text-lg'>
                    </p>
                    <div className='flex flex-row mt-8'>
                    <span className='mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-blue-500'>Skills</span>
                    <span className='mr-3 font-semibold hover:text-white text-[#ADB7BE]'>Education</span>
                    <span className='mr-3 font-semibold hover:text-white text-[#ADB7BE]'>Experience</span>
                </div>
                </div>
                
            </div>
        </section>
    )
}