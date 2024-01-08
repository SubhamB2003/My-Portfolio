import { Circle, CorporateFare, Language, Person } from '@mui/icons-material';
import { Box, Chip, IconButton, Typography, useMediaQuery } from "@mui/material";
import React from 'react';


function Experience({ companyName, website, techStack, role, keyPoints, certificate }) {

    const isNonMobile = useMediaQuery("(min-width: 1000px)");

    return (
        <Box>
            <Box display="flex" justifyContent="space-between">
                <Box display="flex">
                    <CorporateFare fontSize="large" sx={{ fill: "white" }} />
                    <Typography variant='' fontFamily="serif" pl={2} fontSize={isNonMobile ? "1.4rem" : "1.2rem"}>{companyName}</Typography>
                </Box>
                <a href={website} target='_blank' rel='noreferrer'>
                    <Language fontSize={isNonMobile ? 'large' : 'medium'} sx={{ fill: "white" }} />
                </a>
            </Box>

            <Box display="flex" alignItems="center">
                <IconButton sx={{ border: "1px solid white" }}>
                    <Person fontSize='medium' sx={{ fill: "white" }} />
                </IconButton>
                <Typography variant='' fontFamily="serif" pl={1.5} fontSize={isNonMobile ? "1.2rem" : "1.1rem"}>{role}</Typography>
            </Box>

            <Box mt={2} pl={2}>
                {keyPoints.map((item, i) =>
                    <Box display="flex" alignItems="start">
                        <Circle fontSize='small' sx={{ pt: '0.3rem' }} />
                        <Typography variant='' fontFamily="serif" pl={2} fontSize={isNonMobile ? "1rem" : "0.9rem"}>{item}</Typography>
                    </Box>
                )}
            </Box>

            <Box display="flex" flexWrap="wrap" gap={1} mt={2}>
                {techStack?.map((item, i) => (
                    <Chip key={i} label={item} variant="outlined" size='medium' sx={{ color: "white", fontFamily: "serif" }} />
                ))}
            </Box>

            <Box mt={2} display="flex" justifyContent="center" alignItems="center">
                <a href={certificate} target='_blank' rel='noreferrer' style={{ textDecoration: "none" }}>
                    <Box sx={{ border: "2px solid white", borderRadius: "10px" }} px={5} py={1.2}>
                        <Typography variant='' fontFamily="serif" fontSize="1.1rem" color="white">View Certificate</Typography>
                    </Box>
                </a>
            </Box>
        </Box>
    )
}

export default Experience