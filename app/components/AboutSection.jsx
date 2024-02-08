"use client"
import React, {useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

const TAB_DATA = [
        {
                title: "Skills",
                id: "skills",
                content: (
                        <ul className='list-disc pl-2'>
                                <li>C</li>
                                <li>Python</li>
                                <li>java</li>
                                <li>Javascript</li>
                                <li>HTML and CSS</li>
                                <li>Google Slides</li>
                                <li>Google Sheets/Excel</li>
                        </ul>
                )
        },
        {
                title: "Experience",
                id: "experience",
                content: (
                        <ul className='list-disc pl-2'>
                                <li>UNSW Engsoc Programs Director</li>
                                <li>UNSW Engsoc Programs Subcommittee</li>
                                <li>Mobile Technition</li>
                                <li>Uniqlo Sales Associate</li>
                                <li>Macdonalds Kitchen Crew Member</li>
                        </ul>
                )
        },
        {
                title: "Projects",
                id: "projects",
                content: (
                        <ul className='list-disc pl-2'>
                                <li>UNSWBeans</li>
                                <li>Knockoff Astroid Game</li>
                                <li>Personal Website</li>
                                <li>Other UNSW Projects</li>
                        </ul>
                )
        }
]

 function AboutSection() {

        const [tab, setTab] = useState("skills");
        const [isPending, startTransition] = useTransition();

        const handleTabChange = (id) => {
                startTransition(() => {
                        setTab(id);
                });
        }

   return (
     <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <Image src="/images/P1030350.jpg"
                width={500}
                height={500}
                alt="Image"
                />
                <div>
                        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'></div>
                        <h2 className='text-4xl font-bold text-white mb-4'>
                                About Me
                        </h2>
                        <p className='text-base lg:text-lg'>
                                I am currently studying a bachelor of Commerce / Computer Science.
                                I am a hardworking and diligent individual who can perform tasks 
                                with the upmost maturity and professionalism. What I consider 
                                myself to be is a goal orientated individual who is experienced 
                                in groupwork.
                        </p>
                        <div className='flex flex-row justify-start mt-8'>
                                <TabButton 
                                selectTab={() => handleTabChange("skills")} 
                                active={tab ==="skills"}>
                                        Skills
                                </TabButton>
                                <TabButton 
                                        selectTab={() => handleTabChange("experience")} 
                                        active={tab ==="experience"}>
                                                {" "}
                                        Experience {" "}
                                </TabButton>
                                <TabButton 
                                        selectTab={() => handleTabChange("projects")} 
                                        active={tab ==="projects"}> 
                                        {" "}
                                        Projects {" "}
                                </TabButton>
                        </div>
                        <div className='mt-8 '>
                                {TAB_DATA.find((t) => t.id === tab).content}
                        </div>
                </div>
        </div>
     </section>
   )
 }
 
 export default AboutSection