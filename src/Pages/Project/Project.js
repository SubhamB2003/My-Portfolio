// import { LooksOne, LooksTwo } from '@mui/icons-material';
import { HourglassTopRounded, Looks3, Looks4, LooksOne, LooksTwo } from '@mui/icons-material';
import { Box, useMediaQuery } from '@mui/material';
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ProjectCard from './ProjectCard';


function Project() {

    const isNonMobile = useMediaQuery("(min-width: 1000px)");

    return (
        <Box id="project" padding={isNonMobile ? "6rem" : "2rem"} sx={{ fontFamily: "serif", color: "white" }}>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#9645ff', color: '#fff' }}
                    date="15/02/2023 - 18/02/2023"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: 'black' }}
                    icon={<LooksOne />}
                >
                    <ProjectCard Title={"Portfolio Website"} Description={"It was my portfolio website."}
                        Role={"Frontend"} Tech_Stack={["React", "Mui", "Framer motion", "typed js"]} />
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#9645ff', color: '#fff' }}
                    date="10/01/2023 - 25/01/2023"
                    iconStyle={{ background: 'yellow', color: 'black' }}
                    icon={<LooksTwo />}
                >
                    <ProjectCard Title={"Placement Helper"} Description={"Share the job or internship opportunities."}
                        Role={"Mern Stack"} Tech_Stack={["Mern Stack", "Mui", "Git", "Github"]} />
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#9645ff', color: '#fff' }}
                    date="24/12/2022 - 29/12/2022"
                    iconStyle={{ background: 'violet', color: 'black' }}
                    icon={<Looks3 />}
                >
                    <ProjectCard Title={"Open Ai Chat GPT"} Description={"It was an AI-based chat application."}
                        Role={"Frontend"} Tech_Stack={["React", "Express", "Mui", "Openai API"]} />
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#9645ff', color: '#fff' }}
                    date="08/05/2022 - 15/05/2022"
                    iconStyle={{ background: 'orange', color: 'black' }}
                    icon={<Looks4 />}
                >
                    <ProjectCard Title={"Chrome Extension"} Description={"The extension is used to convert the current tab URL to a QR Code."}
                        Role={"Frontend"} Tech_Stack={["React", "Tailwind Css", "Json"]} />
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