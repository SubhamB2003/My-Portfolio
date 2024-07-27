import { ArrowLeft, ArrowRight, Circle, FileCopy, Language } from '@mui/icons-material';
import { Box, Chip, Typography, useMediaQuery } from "@mui/material";
import React from 'react';


function Experience({ experience }) {

    const isNonMobile = useMediaQuery("(min-width: 1000px)");
    const isBreakPoint = useMediaQuery("(min-width: 1200px)");

    return (
        <Box display="flex" flexDirection={experience.id % 2 !== 0 && isBreakPoint && "row-reverse"} >
            {experience.id % 2 === 0 ? <ArrowLeft fontSize='medium' color='white' /> : !isBreakPoint ?
                <ArrowLeft fontSize='medium' color='white' /> : <ArrowRight fontSize='medium' color='white' />}
            <Box key={experience.id} sx={{
                border: '0.1px solid gray', borderRadius: '10px', marginBottom: '2rem', boxShadow: 'rgba(23, 92, 230, 0.25) 0px 4px 24px',
                padding: `${isNonMobile ? '1rem 1.2rem' : '1rem 0.8rem'}`, backgroundColor: 'rgb(23, 23, 33)',
            }} >

                <Box display="flex" flexDirection={!isNonMobile && 'column'} justifyContent="space-between">
                    <Box display="flex" alignItems="center">
                        <img style={{
                            width: `${isNonMobile ? '3rem' : '2.5rem'}`, height: `${isNonMobile ? '3rem' : '2.5rem'}`,
                            borderRadius: '8px'
                        }} src={require(`../../Assets/Experience/${experience.img}`)} alt='company' />
                        <Box display="flex" flexDirection="column" >
                            <Typography textAlign='start' fontFamily="serif" pl={isNonMobile ? 2 : 0.8} fontSize={isNonMobile ? "1.4rem" : "1rem"} lineHeight={1} color="white">{experience.role}</Typography>
                            <Typography textAlign='start' fontFamily="serif" pl={isNonMobile ? 2 : 0.8} fontSize={isNonMobile ? "1.1rem" : "0.8rem"} lineHeight={isNonMobile ? 1.5 : 2} color="rgb(242 243 244 / 60%)" sx={{ fontFamily: 'Sofia' }}>{experience.company}</Typography>
                            <Typography textAlign='start' fontFamily="serif" pl={isNonMobile ? 2 : 0.8} fontSize={isNonMobile ? "1rem" : "0.7rem"} lineHeight={1} color="rgb(177 178 179 / 60%)">{experience.date}</Typography>
                        </Box>
                    </Box>
                    <Box display="flex" alignItems="start" justifyContent='space-around' gap={2} mt={!isNonMobile && 1}>
                        <a href={experience.doc} target='_blank' rel='noreferrer' style={{ textDecoration: "none" }}>
                            <FileCopy fontSize={isNonMobile ? 'medium' : 'small'} sx={{ fill: "rgb(242 243 244 / 60%)" }} />
                        </a>

                        <a href={experience.url} target='_blank' rel='noreferrer'>
                            <Language fontSize={isNonMobile ? 'medium' : 'small'} sx={{ fill: "rgb(242 243 244 / 60%)" }} />
                        </a>
                    </Box>
                </Box>

                <Box mt={isNonMobile && 1} pl={isNonMobile && 2}>
                    {experience.desc?.map((item, i) =>
                        <Box display="flex" alignItems="start" justifyContent="start" pt={1}>
                            <Circle sx={{ width: `${isNonMobile ? '1rem' : '0.8rem'}`, height: `${isNonMobile ? '1rem' : '0.8rem'}`, color: 'gray' }} />
                            <Typography textAlign='start' fontFamily={"serif"} color="rgb(242 243 244 / 60%)" pl={1} fontSize="0.9rem" lineHeight={1.2}>{item}</Typography>
                        </Box>
                    )}
                </Box>

                <Box display="flex" justifyContent="center" alignItems="center" flexWrap="wrap" gap={1} mt={2}>
                    <Typography fontFamily="serif" fontSize={isNonMobile ? "1.2rem" : "1rem"} color="rgb(242 243 244 / 90%)" fontWeight="bold" sx={{ fontFamily: 'Sofia' }}>Skills :</Typography>
                    {experience.skills?.map((item, i) => (
                        <Chip key={i} label={item} size='small' sx={{ backgroundColor: 'rgba(133, 76, 230, 0.082)', color: "#fff", fontFamily: "Sofia", border: '0.1px solid #9645ff' }} />
                    ))}
                </Box>

                {/* <Box mt={1} display="flex" justifyContent="center" alignItems="center">
                <a href={experience.doc} target='_blank' rel='noreferrer' style={{ textDecoration: "none" }}>
                    <Box sx={{ border: "2px solid white", borderRadius: "10px" }} px={5} py={1.2}>
                        <Typography variant='' fontFamily="serif" fontSize="1.1rem" color="white">View Certificate</Typography>
                    </Box>
                </a>
            </Box> */}
            </Box>
        </Box>
    )
}

export default Experience