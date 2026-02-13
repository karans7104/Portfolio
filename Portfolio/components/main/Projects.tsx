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
                    description=" Built using Next.js, Tailwind, Gemini AI, Prisma, and Shadcn UI, this AI-driven personal finance platform automates expense categorization and provides financial insights for over 100 simulated user sessions. By integrating Gemini AI, the system achieves 85%+ accuracy in expense prediction and utilizes real-time dashboard analytics to improve financial tracking efficiency by 60% while reducing page load times by 30%."
                    liveUrl="https://welth-zeta-nine.vercel.app/"              
                />
                <ProjectCard
                    src="/space_theme.png"
                    title="Space Themed Website"
                    description=" Developed with Next.js, React, and Tailwind CSS, this portfolio platform features a responsive UI that ensures a seamless experience across all devices, improving accessibility by 100%. The application achieves a sub-1.5s page load time through Next.js performance features and includes SEO optimization to increase professional visibility and discoverability."
                    liveUrl="https://portfolio-psi-wine-47.vercel.app/"               
                />
                <ProjectCard
                    src="/projectflow.jpeg"
                    title="ProjectFlow — Full Stack Project Management System"
                    description=" This scalable platform, engineered with the PERN Stack (PostgreSQL, Express, React, and Node.js), supports task tracking for 200+ simulated team operations. The system features role-based access control and real-time collaboration that improved workflow efficiency by 50% and maintained optimized API response times under 150ms during stress testing."
                    liveUrl="https://welth-zeta-nine.vercel.app/"              
                />
            </div>
        </div>
    );
};

export default Projects;