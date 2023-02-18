import { GitHub } from '@mui/icons-material';
import { Box, Typography, useMediaQuery } from '@mui/material';
import Chip from '@mui/material/Chip';
import { motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

function ProjectCard({ Title, Description, Tech_Stack, Role, Project_Pic, githubUrl, hostUrl }) {

    const isNonMobile = useMediaQuery("(min-width: 1000px)");
    const picRef = useRef(null);
    useEffect(() => {
        VanillaTilt.init(picRef.current, {
            max: 10,
            speed: 400
        });
    }, [picRef, isNonMobile]);

    return (
        <Box display="flex" flexDirection={!isNonMobile && "column"} gap={isNonMobile && 1} sx={{ fontFamily: "serif" }}
            component={motion.div} initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }}>
            <img ref={picRef} src={Project_Pic} alt="project 1"
                style={{ width: `${isNonMobile ? "40%" : "100%"}`, paddingX: "auto" }} />
            <Box sx={{ marginBottom: "1rem" }}>
                <Typography textAlign="start" fontFamily="serif">
                    <span style={{ fontSize: "1.1rem", lineHeight: "0.6" }}>{Role}</span>
                    <a href={hostUrl} target="_blank" rel="noreferrer">
                        <img src={require("../../Assets/netlify-logo.png")} alt="netlify-logo"
                            style={{
                                width: `${isNonMobile ? "6%" : "10%"}`, position: "absolute", right: "6%", top: `${isNonMobile ? "10%" : "87%"}`,
                                bottom: `${!isNonMobile && "7%"}`
                            }} />
                    </a>
                    <a href={githubUrl} target="_blank" rel="noreferrer">
                        <GitHub fontSize={isNonMobile ? 'large' : 'medium'} sx={{
                            position: "absolute", right: "14%", top: `${isNonMobile && "8%"}`,
                            bottom: `${!isNonMobile && "7%"}`, marginRight: `${!isNonMobile && "1rem"}`, fill: "black"
                        }} />
                    </a>
                    <br />
                    <span style={{ fontSize: "1.6rem", lineHeight: "0.6" }}>{Title}</span><br />
                    <span style={{ fontSize: "1rem" }}>{Description}</span></Typography>
                <Box display="flex" flexWrap="wrap" gap={1} mt={1}>
                    {Tech_Stack?.map((item, i) => (
                        <Chip key={i} label={item} variant="outlined" size='small' sx={{ color: "white", fontFamily: "serif" }} />
                    ))}
                </Box>
            </Box>
        </Box>
    )
}

export default ProjectCard;