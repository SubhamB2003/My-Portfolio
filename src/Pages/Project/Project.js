import { Box, Typography, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import ProjectCard from './ProjectCard';


function Project() {

    const isNonMobile = useMediaQuery("(min-width: 1000px)");

    return (
        <Box id="project" padding={isNonMobile ? "6rem" : "1rem"} sx={{ fontFamily: "serif", color: "white" }} component={motion.div}
            initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}>
            <Box paddingY={6}>
                <Typography color="white" fontFamily="serif" fontSize="1.2rem" sx={{ fontFamily: 'Sofia' }}>PROJECT</Typography>
                <Typography color="#9645ff" fontSize={isNonMobile ? "3.6rem" : "3rem"} fontFamily="serif" sx={{ lineHeight: "1.5", fontWeight: "bold" }}>My Projects</Typography>
                <Typography color="white" fontFamily="serif" fontSize={isNonMobile ? "1.3rem" : "1.1rem"} lineHeight={1.2} sx={{ fontFamily: 'Sofia' }}>I like to take responsibility to craft aesthetic user experience <br />using modern web architecture.</Typography>
            </Box>
            <Box width="100%" display="flex" flexWrap="wrap" justifyContent="space-evenly" rowGap={4} px={!isNonMobile && "1rem"}>
                <ProjectCard Project_Pic={require("../../Assets/Portfolio.png")} Title={"Portfolio Website"}
                    Description={"Featuring a website to showcase my projects, detailed work experience, and additional highlights that offer a comprehensive overview of my skills and achievements."}
                    Role={"Frontend"} Tech_Stack={["React", "Mui", "Framer motion", "typed js"]}
                    githubUrl={"https://github.com/SubhamB2003/My-Portfolio"}
                    hostUrl={"https://itz-subham-dev.vercel.app"} />

                <ProjectCard Project_Pic={require("../../Assets/Github-user-finder.png")} Title={"Github-User-Finder"}
                    Description={"A web tool that provides insights on GitHub users through their username search and an elegant, user-friendly interface. Effortlessly explore GitHub profiles and repositories with unparalleled efficiency."}
                    Role={"Frontend"} Tech_Stack={["React", "Tailwind Css", "Github-api"]}
                    githubUrl={"https://github.com/SubhamB2003/Github-User-Finder"}
                    hostUrl={"https://github-user-finder-web.vercel.app"} />

                <ProjectCard Project_Pic={require("../../Assets/Authentication.png")} Title={"Firebase Authentication"}
                    Description={"Learn how to add email password and google authentication service using firebase."}
                    Role={"Frontend"} Tech_Stack={["React", "Firebase", "Tailwind Css"]}
                    githubUrl={"https://github.com/SubhamB2003/Firebase-Authentication"}
                    hostUrl={"https://authentication-fbd44.web.app"} />

                <ProjectCard Project_Pic={require("../../Assets/Alumini.png")} Title={"Placement Helper"}
                    Description={"Introducing a purpose-driven social media platform (Placement Helper) focused on assisting our college students in efficiently discovering job and internship opportunities."}
                    Role={"Mern Stack"} Tech_Stack={["Mern Stack", "Mui", "Github"]}
                    githubUrl={"https://github.com/SubhamB2003/PlacementHelper"}
                    hostUrl={"https://placement-helper.vercel.app"} />

                <ProjectCard Project_Pic={require("../../Assets/Extension.png")} Title={"Chrome Extension"}
                    Description={"This is a chrome extension. This extension convert the current tab url to QR Code."}
                    Role={"Frontend"} Tech_Stack={["React", "Tailwind Css", "Json", "Chrome-extension"]}
                    githubUrl={"https://github.com/SubhamB2003/Tab_Url_QR_Code_Generator"} hostUrl={"/"} />
            </Box>
        </Box>
    )
}

export default Project;