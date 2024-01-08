import { LooksOne, LooksTwo } from '@mui/icons-material';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Experience from './Experience';

function Work_Experience() {

    const isNonMobile = useMediaQuery("(min-width: 1000px)");

    return (
        <Box id="experience" padding={isNonMobile ? "6rem" : "2rem"} sx={{ fontFamily: "serif", color: "white" }} component={motion.div}
            initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}>
            <Box paddingY={6}>
                <Typography color="white" fontFamily="serif" fontSize="1.2rem">WORK EXPERIENCE</Typography>
                <Typography color="#9645ff" fontSize={isNonMobile ? "4.2rem" : "3rem"} fontFamily="serif" sx={{ lineHeight: "1.5", fontWeight: "bold" }}>My Work Experience</Typography>
                {/* <Typography color="white" fontFamily="serif" fontSize={isNonMobile ? "1.5rem" : "1.2rem"}>I like to take responsibility to craft aesthetic user experience <br />using modern web architecture.</Typography> */}
            </Box>

            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#9645ff', color: '#fff' }}
                    date="05/07/2023 - 05/01/2024"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: 'black' }}
                    icon={<LooksOne />}
                >
                    <Experience companyName={"TCM STUNNER IT CONSULTANTS LLP"} website={"https://tcmstunner.com/"} role={"Full Stack Developer Intern"}
                        techStack={["React Native", "React", "Nodejs", "Postgresql", "GitLab"]} keyPoints={[
                            "Working on implementing new features and improvements in mobile applications using React Native.",
                            "Contributing also some full stack projects.",
                            "Collaborating with senior developers to write clean, efficient, and maintainable code."
                        ]} certificate={"https://drive.google.com/drive/folders/1oYj8trNt3gV5UM--y4qJ3n504v10gh_V?usp=sharing"} />
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#9645ff', color: '#fff' }}
                    date="20/05/2023 - 10/08/2023"
                    iconStyle={{ background: 'rgb(34 197 94)', color: 'black' }}
                    icon={<LooksTwo />}
                >
                    <Experience companyName={"GIRLSCRIPT SUMMER OF CODE"} website={"https://gssoc.girlscript.tech/"} role={"Open-Source Contributor"}
                        techStack={["React", "Nodejs", "firebase", "Github"]} keyPoints={[
                            "GirlScript Summer of Code is a 3-month Open-Source program by the GirlScript Foundation.",
                            "Implemented front-end features like PWA, Code Splitting, and Lazy Loading, decreasing page load time and increasing user engagement metrics.",
                            "Securing rank 13 over 2000 of participants."
                        ]} certificate={"https://drive.google.com/file/d/1IwsgVuQM48MaYqo8ZUur0zO3JyEj6tzN/view"} />
                </VerticalTimelineElement>
            </VerticalTimeline>
        </Box>
    )
}

export default Work_Experience