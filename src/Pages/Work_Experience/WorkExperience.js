import { Timeline, TimelineConnector, TimelineContent, TimelineItem, TimelineOppositeContent, TimelineSeparator, timelineItemClasses } from '@mui/lab';
import { Avatar, Box, Typography, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../../Data/Constant';
import Experience from './Experience';

function Work_Experience() {

    const isNonMobile = useMediaQuery("(min-width: 1000px)");
    const isBreakPoint = useMediaQuery("(min-width: 1200px)");

    return (
        <Box id="experience" padding={isNonMobile ? "6rem" : "1rem"} sx={{ fontFamily: "serif", color: "white" }}
        // component={motion.div}
        // initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}
        >
            <Box paddingY={6}>
                <Typography color="white" fontFamily={"serif"} sx={{ fontFamily: 'Sofia' }} fontSize="1.2rem">WORK EXPERIENCE</Typography>
                <Typography color="#9645ff" fontSize={isNonMobile ? "3.6rem" : "3rem"} fontFamily="serif" sx={{ lineHeight: "1.2", fontWeight: "bold" }}>My Work Experience</Typography>
                {/* <Typography color="white" fontFamily="serif" fontSize={isNonMobile ? "1.5rem" : "1.2rem"}>I like to take responsibility to craft aesthetic user experience <br />using modern web architecture.</Typography> */}
            </Box>

            <Box>
                <Timeline position={isBreakPoint ? "alternate" : "right"} sx={{
                    [`& .${timelineItemClasses.root}:before`]: {
                        flex: 0,
                        padding: 0,
                    },
                    padding: '0'
                }}>
                    {experiences.map((experience, index) => (
                        <TimelineItem key={index}>
                            {isBreakPoint && <TimelineOppositeContent color="text.secondary" component={motion.div}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.5 }}>
                                <Typography fontSize="1.3rem" fontFamily="serif" color="gray">{experience.date}</Typography>
                            </TimelineOppositeContent>}
                            <TimelineSeparator>
                                <Avatar sx={{ width: `${isNonMobile ? '4rem' : '3.5rem'}`, height: `${isNonMobile ? '4rem' : '3.5rem'}`, border: "0.4rem solid white" }}
                                    src={require(`../../Assets/Experience/${experience.img}`)} alt='company' component={motion.div}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.5 }} />
                                <TimelineConnector style={{ background: 'white', width: '0.3rem' }} />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', pr: `${!isNonMobile && '0'}`, pl: `${!isNonMobile && '0'}` }} component={motion.div}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: experience.id * 0.5 }}>
                                <Experience experience={experience} />
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </Box>

        </Box>
    )
}

export default Work_Experience