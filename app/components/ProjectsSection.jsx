"use client";
import React, { useState, useRef }from 'react'
import { ProjectCard } from './ProjectCard'
import ProjectTag from './ProjectTag';
import { motion, useInView } from 'framer-motion';


const projectsData = [
        {
                id: 1,
                title: "React Portfolio Website",
                description: "This is my website Portfolio! This contains things about me and some of the work that i do and have done.",
                image: "/images/projects/ReactProjects.png",
                tag: ["All", "Web"],
                gitUrl: "https://github.com/OfflineGiraffe/Portfolio",
                previewUrl: "destination.html"
        },
        {
                id: 2,
                title: "UNSW Beans",
                description: "A microsoft teams duplicate which includes channels, reacts, profile images etc.",
                image: "/images/projects/UNSWBean.png",
                tag: ["All", "Web"],
                gitUrl: "https://github.com/OfflineGiraffe/UNSWBeans/tree/main",
                previewUrl: "https://drive.google.com/drive/u/0/folders/1FdNesvzWLlpDD83QmMvGwZWCFRndiQDf"
        },
        {
                id: 5,
                title: "Blackout Controller",
                description: "You can create and remove satellites. Different satellites have different properties.",
                image: "/images/projects/BlackoutController.png",
                tag: ["All", "Game"],
                gitUrl: "https://github.com/OfflineGiraffe/BlackoutController",
                previewUrl: "https://drive.google.com/drive/u/0/folders/1Wv5ucAEs0Sk6d_UZ1gQGs6vWGYlLgHAg"
        },
        {
                id: 6,
                title: "DungeonMania",
                description: "A dungeon maze like game where you can collect items and fight monsters.",
                image: "/images/projects/dungeon_mania.png",
                tag: ["All", "Game"],
                gitUrl: "https://github.com/OfflineGiraffe/DungeonMania",
                previewUrl: "https://drive.google.com/drive/u/0/folders/1dHlm9nP-mZ8qlZgr-YXiYdUA66Nr6cBl"
        },
        {
                id: 3,
                title: "Astroid Game",
                description: "A knockoff astroid game with a temporary powerup. The main goal is to get a high score.",
                image: "/images/projects/Astroid.webp",
                tag: ["All", "Game"],
                gitUrl: "https://github.com/OfflineGiraffe/Space-invaders",
                previewUrl: "https://drive.google.com/drive/u/0/folders/1_R68em-iEdXogQdvRKAGyWvT9eNrMEpZ"
        },
        {
                id: 4,
                title: "Tamagochi Game",
                description: "Survive and get the most points! A point and click game to survive while getting the most points possible.",
                image: "/images/projects/Tamagochi.webp",
                tag: ["All", "Game"],
                gitUrl: "https://github.com/OfflineGiraffe/Tamagotchi",
                previewUrl: "https://drive.google.com/drive/u/0/folders/1FuOQAu1zxT84JmH3dIUiN1H0cpEp1duH"
        },
]

const cardVariants = {
        initial: { y: 50, opacity: 0},
        animate: { y:0, opacity: 1},
}

const ProjectsSection = ( {id} ) => {
        const [tag, setTag] = useState("All");
        const ref = useRef(null);
        const isInView =  useInView(ref, {once: true});

        const handleTagChange = (newTag) => {
                setTag(newTag);
        };

        const filteredProjects = projectsData.filter((project) => 
                project.tag.includes(tag)
        );

  return (
        <section id={id}>
                <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
                        My Projects
                </h2>
                <div className='text-white flex flex-row justify-center items-center gap-2 py-6 '>
                        <ProjectTag 
                        onClick={handleTagChange} 
                        name="All" 
                        isSelected={tag === "All"}
                        />
                        <ProjectTag 
                        onClick={handleTagChange} 
                        name="Web" 
                        isSelected={tag === "Web"}
                        />
                        <ProjectTag 
                        onClick={handleTagChange} 
                        name="Game" 
                        isSelected={tag === "Game"}
                        />

                </div>
                <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
                        {filteredProjects.map((project, index) => (
                        <motion.li 
                        key={`${index}-${tag}`} // Add a key with tag to force remount
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: index * 0.4}}
                        >

                        <ProjectCard key={project.id} 
                        title={project.title} 
                        description={project.description} 
                        imgUrl={project.image} 
                        tags={project}
                        gitUrl={project.gitUrl}
                        previewUrl={project.previewUrl}
                        />
                        </motion.li>
                        ))}
                </ul>
                
        </section>

  );
};

export default ProjectsSection