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
                    <p className='text-base lg:text-lg'>I am a dedicated and enthusiastic Software Developer with a deep-rooted passion for back-end development. I have always been fascinated by the intricate workings of systems behind the scenes, which led me to specialize in back-end development. I excel in designing, building, and maintaining efficient code. I value collaboration and am committed to continuous learning. Outside of work, I enjoy staying updated with the latest tech trends and participating in coding challenges.
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