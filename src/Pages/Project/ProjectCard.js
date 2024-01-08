import { GitHub, Language } from '@mui/icons-material';
import { Box, Typography, useMediaQuery } from '@mui/material';
import Chip from '@mui/material/Chip';
import { motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

function ProjectCard({ Title, Description, Tech_Stack, Role, Project_Pic, githubUrl, hostUrl }) {

    const picRef = useRef(null);
    const isNonMobile = useMediaQuery("(min-width: 900px)");

    useEffect(() => {
        VanillaTilt.init(picRef.current, {
            max: 10,
            speed: 400
        });
    }, [picRef, isNonMobile]);

    return (
        <Box width={isNonMobile ? "40%" : "100%"} border="1px solid" padding="1.5rem 0" display="flex" flexDirection="column"
            justifyContent="center" alignItems="center" sx={{
                borderRadius: "1rem", backdropFilter: "blur(2rem)", boxShadow: "5px 5px white", transition: 'transform 0.3s ease-out',
                ':hover': {
                    transform: 'scale(1.05)',
                }
            }}
            component={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }}>
            <img ref={picRef} src={Project_Pic} alt="project 1"
                style={{ width: `${isNonMobile ? "40%" : "90%"}`, paddingX: "auto", objectFit: "contain" }} />

            <Box display="flex" flexDirection="column" padding={isNonMobile ? "0.6rem 2rem" : "0.6rem 1.2rem"}>
                <Box display="flex" justifyContent="space-between">
                    <Typography fontFamily="serif">
                        <span style={{ fontSize: "1.2rem" }}>{Role}</span><br />
                        <span style={{ fontSize: "1.6rem" }}>{Title}</span><br />
                    </Typography>

                    <Box display="flex" alignItems="start" columnGap={2}>
                        <a href={hostUrl} target="_blank" rel="noreferrer">
                            <Language fontSize={isNonMobile ? 'large' : 'medium'} sx={{ fill: "white" }} />
                        </a>
                        <a href={githubUrl} target="_blank" rel="noreferrer">
                            <GitHub fontSize={isNonMobile ? 'large' : 'medium'} sx={{ fill: "white" }} />
                        </a>
                    </Box>
                </Box>
                <Typography fontFamily="serif" style={{ fontSize: "1.1rem" }}>{Description}</Typography>
                <Box display="flex" flexWrap="wrap" gap={1} mt={2}>
                    {Tech_Stack?.map((item, i) => (
                        <Chip key={i} label={item} variant="outlined" size='medium' sx={{ color: "white", fontFamily: "serif" }} />
                    ))}
                </Box>
            </Box>
        </Box>
    )
}

export default ProjectCard;