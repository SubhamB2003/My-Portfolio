import { Box, Typography, useMediaQuery } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';


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
        <Box id="about" display="flex" flexDirection={!isNonMobile && "column"} justifyContent="space-around" padding={isNonMobile ? "15%" : "10%"} gap={isNonMobile && "20%"}>
            <Box display="flex" justifyContent="center" alignItems="center" ref={picRef}>
                <img src={require("../../Assets/IMG.png")} alt="Profile Pic" draggable="false"
                    style={{ borderRadius: "10%", width: `${isNonMobile ? "20vw" : "60vw"}`, objectFit: "cover" }} />
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center" mt={!isNonMobile && "30px"}>
                <Typography fontFamily="serif" fontSize={isNonMobile ? "1.3rem" : "1.1rem"} color="white">I am an undergrad with a passion for learning and growing in the professional world.
                    I have decent communication and problem-solving skill. I am eager to apply my skills to a new role and
                    contribute to the success of an organization. I am confident that my enthusiasm, dedication, and
                    willingness to learn will make me an asset to any team and I love to do challenging works where I can
                    utilize my ability and improve it. My objective is to apply my knowledge(technical &non-technical)
                    for the betterment of society.</Typography>
            </Box>
        </Box>
    )
}

export default About;