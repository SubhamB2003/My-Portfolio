// import { LooksOne, LooksTwo } from '@mui/icons-material';
import { HourglassTopRounded, Looks3, Looks4, LooksOne, LooksTwo } from '@mui/icons-material';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ProjectCard from './ProjectCard';


function Project() {

    const isNonMobile = useMediaQuery("(min-width: 1000px)");

    return (
        <Box id="project" padding={isNonMobile ? "6rem" : "2rem"} sx={{ fontFamily: "serif", color: "white" }} component={motion.div}
            initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}>
            <Box paddingY={6}>
                <Typography color="white" fontFamily="serif" fontSize="1.2rem">Projects</Typography>
                <Typography color="#9645ff" fontSize={isNonMobile ? "4.2rem" : "3rem"} fontFamily="serif" sx={{ lineHeight: "1.5", fontWeight: "bold" }}>My Projects</Typography>
                <Typography color="white" fontFamily="serif" fontSize={isNonMobile ? "1.5rem" : "1.2rem"}>I like to take responsibility to craft aesthetic user experience <br />using modern frontend architecture.</Typography>
            </Box>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#9645ff', color: '#fff' }}
                    date="15/02/2023 - 18/02/2023"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: 'black' }}
                    icon={<LooksOne />}
                >
                    <ProjectCard Project_Pic={require("../../Assets/Portfolio.png")} Title={"Portfolio Website"} Description={"It was my portfolio website."}
                        Role={"Frontend"} Tech_Stack={["React", "Mui", "Framer motion", "typed js"]}
                        githubUrl={"https://github.com/SubhamB2003/My-Portfolio"} hostUrl={""} />
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#9645ff', color: '#fff' }}
                    date="10/01/2023 - 25/01/2023"
                    iconStyle={{ background: 'yellow', color: 'black' }}
                    icon={<LooksTwo />}
                >
                    <ProjectCard Project_Pic={require("../../Assets/Alumini.png")} Title={"Placement Helper"} Description={"Share job or internship opportunities."}
                        Role={"Mern Stack"} Tech_Stack={["Mern Stack", "Mui", "Git", "Github"]}
                        githubUrl={"https://github.com/SubhamB2003/Placement-helper-frontend"} hostUrl={"https://placement-helper-alumini.netlify.app/"} />
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#9645ff', color: '#fff' }}
                    date="24/12/2022 - 29/12/2022"
                    iconStyle={{ background: 'violet', color: 'black' }}
                    icon={<Looks3 />}
                >
                    <ProjectCard Project_Pic={require("../../Assets/Chat GPT.png")} Title={"Open Ai Chat GPT"} Description={"It was an AI-based chat application."}
                        Role={"Full Stack"} Tech_Stack={["React", "Express", "Mui", "Openai API"]}
                        githubUrl={"https://github.com/SubhamB2003/OpenAPIChatGPT"} hostUrl={"https://openai-chatapp.netlify.app/"} />
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#9645ff', color: '#fff' }}
                    date="08/05/2022 - 15/05/2022"
                    iconStyle={{ background: 'orange', color: 'black' }}
                    icon={<Looks4 />}
                >
                    <ProjectCard Project_Pic={require("../../Assets/Extension.png")} Title={"Chrome Extension"} Description={"The extension is used to convert the current tab URL to a QR Code."}
                        Role={"Frontend"} Tech_Stack={["React", "Tailwind Css", "Json"]}
                        githubUrl={"https://github.com/SubhamB2003/Tab_Url_QR_Code_Generator"} hostUrl={"/"} />
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: 'black' }}
                    icon={<HourglassTopRounded />}
                />
            </VerticalTimeline>
        </Box>
    )
}

export default Project;