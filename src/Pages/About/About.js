import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import ResumeFile from "../../Assets/Resume.pdf";


function About() {

    const isNonMobile = useMediaQuery("(min-width: 1000px)");
    const picRef = useRef(null);

    useEffect(() => {
        VanillaTilt.init(picRef.current, {
            max: 10,
            speed: 400
        });
    }, [picRef]);

    return (
        <Box id="about" display="flex" flexDirection={!isNonMobile && "column"} justifyContent="space-around" padding={isNonMobile ? "15%" : "10%"} gap={isNonMobile && "20%"}
            component={motion.div} initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}>
            <Box display="flex" justifyContent="center" alignItems="center" ref={picRef}>
                <img src={require("../../Assets/IMG.png")} alt="Profile Pic" draggable="false"
                    style={{ borderRadius: "10%", width: `${isNonMobile ? "20vw" : "60vw"}`, objectFit: "cover" }} />
            </Box>
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" mt={!isNonMobile && "30px"}>
                <Box>
                    <Typography fontFamily="serif" fontSize={isNonMobile ? "1.3rem" : "1.1rem"} color="white">I am an undergrad with a passion for learning and growing in the professional world.
                        I have decent communication and problem-solving skill. I am eager to apply my skills to a new role and
                        contribute to the success of an organization. I am confident that my enthusiasm, dedication, and
                        willingness to learn will make me an asset to any team and I love to do challenging works where I can
                        utilize my ability and improve it. My objective is to apply my knowledge(technical &non-technical)
                        for the betterment of society.</Typography>
                </Box>
                <Box sx={{ position: "relative", top: `${isNonMobile && "6%"}` }} mt={!isNonMobile && 4}>
                    <a href={ResumeFile} download="Resume.pdf" style={{ textDecoration: "none" }}>
                        <Button variant="outlined" sx={{ color: "white", paddingY: "4%", fontFamily: "serif", ":hover": { backgroundColor: "#9645ff" } }}>
                            Download Resume
                        </Button>
                    </a>
                </Box>
            </Box>
        </Box>
    )
}

export default About;