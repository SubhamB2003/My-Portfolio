import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';


function About() {

    const isNonMobile = useMediaQuery("(min-width: 1000px)");
    const picRef = useRef(null);

    useEffect(() => {
        VanillaTilt.init(picRef.current, {
            max: 10,
            speed: 200
        });
    }, [picRef]);

    return (
        <Box id="about" display="flex" flexDirection={!isNonMobile && "column"} justifyContent="space-around" padding={isNonMobile ? "15%" : "10%"} gap={isNonMobile && "20%"}
            component={motion.div} initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}>
            <Box display="flex" justifyContent="center" alignItems="center" ref={picRef}
                sx={{
                    border: "1px solid #9645ff", borderRadius: "20px", padding: "0.6rem", backdropFilter: "blur(2rem)",
                    boxShadow: 'rgba(23, 92, 230, 0.50) 0px 4px 24px'
                }}>
                <img src={require("../../Assets/IMG.png")} alt="Profile Pic" draggable="false"
                    style={{
                        borderRadius: "20px", width: `${isNonMobile ? "22vw" : "70vw"}`, height: "auto", objectFit: "cover",

                    }} />
            </Box>
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" mt={!isNonMobile && "30px"}>
                <Box>
                    <Typography fontFamily="serif" fontSize={isNonMobile ? "1.3rem" : "1.1rem"} color="white" sx={{ fontFamily: 'Sofia' }}>I am 
                        a Full-Stack Software Engineer with nearly 2 years of experience building scalable, user-focused web applications and 
                        AI-powered solutions. Skilled in React.js, Node.js, NestJS, TypeScript, Python and PostgreSQL, I enjoy solving 
                        real-world problems through clean code and efficient system design. Passionate about continuous learning, 
                        collaboration, and innovation, I strive to create impactful digital solutions while growing as a technology 
                        professional. </Typography>
                </Box>
                <Box sx={{ position: "relative", top: `${isNonMobile && "6%"}` }} mt={!isNonMobile && 4}>
                    <a href="https://drive.google.com/drive/folders/1lOOKzPGjwm0q51D9DGgzs9ikghgR_dxV?usp=sharing" target='_blank' rel="noreferrer" style={{ textDecoration: "none" }}>
                        <Button sx={{
                            border: "1px solid #9645ff", boxShadow: 'rgba(23, 92, 230, 1) 0px 4px 24px',
                            color: "white", paddingX: "1rem", paddingY: "5%", fontFamily: "serif", ":hover": { backgroundColor: "#9645ff" }
                        }}>
                            Download Resume
                        </Button>
                    </a>
                </Box>
            </Box>
        </Box>
    )
}

export default About;