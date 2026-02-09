import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
    return (
        <div
            className="flex flex-col items-center justify-center py-20"
            id="projects"
        >
           <h1 className="text-[40px] font-semibold py-20 text-white">
             My{" "}
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
               Projects
             </span>
           </h1>

            <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
                <ProjectCard
                    src="/Welth.png"
                    title="Welth-Full Stack AI Finance Platform"
                    description=" Built an AI-driven personal finance platform enabling automated expense categorization and financial insights,
                                  supporting 100+ simulated user sessions, reducing page load time by 30%.
                                  Integrated Gemini AI to generate smart budgeting suggestions achieving 85%+ accuracy in expense prediction during
                                  testing.
                                  Developed secure authentication and real-time dashboard analytics improving financial tracking efficiency by 60%."
                    liveUrl="https://welth-zeta-nine.vercel.app/"              
                />
                <ProjectCard
                    src="/space_theme.png"
                    title="Space Themed Website"
                    description=" Implemented responsive UI ensuring seamless experience across mobile, tablet, and desktop devices improving
                                   accessibility by 100%.  
                                   Achieved sub-1.5s page load time using optimized assets and Next.js performance features.
                                   Deployed live portfolio with SEO optimization increasing discoverability and professional visibility."
                    liveUrl="https://welth-zeta-nine.vercel.app/"               
                />
                <ProjectCard
                    src="/projectflow.jpeg"
                    title="ProjectFlow — Full Stack Project Management System"
                    description=" Engineered scalable project management platform supporting task tracking for 200+ simulated team operations,reducing
                                  project tracking time by 35%.
                                  Implemented role-based access control and real-time task collaboration improving workflow efficiency by 50%.
                                  Deployed production-ready application with optimized API response time under 150ms during stress testing."
                    liveUrl="https://welth-zeta-nine.vercel.app/"              
                />
            </div>
        </div>
    );
};

export default Projects;