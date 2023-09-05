import { EmailOutlined, GitHub, LinkedIn, Twitter } from '@mui/icons-material';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import { motion } from "framer-motion";
import React, { useEffect, useRef } from 'react';
import Typed from "typed.js";
import Flexbetween from '../../components/Flexbetween';
// import "./style.css";


function Home() {

    const textRef = useRef(null);
    const isNonMobile = useMediaQuery("(min-width: 1000px)");
    const isMobile = useMediaQuery("(min-width: 760px)");

    useEffect(() => {
        const typed = new Typed(textRef.current, {
            strings: ["Frontend Developer", "Mern Developer", "Android Developer", "Opensource Contributor"],
            typeSpeed: 50,
            startDelay: 1000,
            backSpeed: 50,
            backDelay: 3000,
            loop: true,
        });

        return () => typed.destroy();
    }, [textRef]);

    return (
        <Flexbetween height="100vh" padding={isNonMobile ? "4.5rem" : "2rem"} mt={8}>
            <Box display="flex" flexDirection="column" justifyContent="center" component={motion.div}
                initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 1 }} transition={{ duration: 1, delay: 0.2 }}>
                <Typography sx={{ fontSize: "1.3rem", color: "white" }} textAlign="start" color="white" fontFamily="serif">{"`<h5> "}Hi, my name is{" </h5>`"}</Typography>
                <Typography fontFamily="serif" sx={{ fontSize: `${isMobile ? "3.5rem" : "2.5rem"}`, fontWeight: "bold", lineHeight: "1.2" }} color="white">
                    Subham Bhattacharjee</Typography>
                <Box paddingY={2} zIndex={1}>
                    <Typography color="white" fontFamily="serif" fontSize={isMobile ? "2rem" : "1.5rem"}
                        sx={{ opacity: "0.6" }}>
                        {"`<p>"} I am a {" "} <span ref={textRef}></span> {"</p>`"}
                        <span style={{ fontSize: `${isMobile ? "2rem" : "1.5rem"}`, animation: "typedjsBlink 0.7s infinite" }} />
                    </Typography>
                </Box>
                <Box display="flex" gap={isMobile ? 4 : 2} paddingY={2}>
                    <a href="mailto:subhambhattachariyatech03@gmail.com" target="_blank" rel="noreferrer" aria-label="mail">
                        <EmailOutlined sx={{ fill: "white", fontSize: `${isMobile ? "1.7rem" : "1.4rem"}`, ':hover': { fill: "orange" } }} />
                    </a>
                    <a href="https://www.instagram.com/itz_subham07/" target="_blank" rel="noreferrer" aria-label="instagram">
                        <InstagramIcon sx={{ fill: "white", fontSize: `${isMobile ? "1.7rem" : "1.4rem"}`, ':hover': { fill: "#d6249f" } }} />
                    </a>
                    <a href="https://twitter.com/SubhamB82338312" target="_blank" rel="noreferrer" aria-label="twitter">
                        <Twitter sx={{ fill: "white", fontSize: `${isMobile ? "1.7rem" : "1.4rem"}`, ':hover': { fill: "#00acee" } }} />
                    </a>
                    <a href="https://github.com/SubhamB2003" target="_blank" rel="noreferrer" aria-label="github">
                        <GitHub sx={{ fill: "white", fontSize: `${isMobile ? "1.7rem" : "1.4rem"}` }} />
                    </a>
                    <a href="https://www.linkedin.com/in/subham-bhattacharjee-b39a9a1ba/" target="_blank" rel="noreferrer" aria-label="linkedin">
                        <LinkedIn sx={{ fill: "white", fontSize: `${isMobile ? "1.7rem" : "1.4rem"}`, ':hover': { fill: "#0e76a8" } }} />
                    </a>
                </Box>

                <Box paddingY={isMobile ? 4 : 2} zIndex={1}>
                    <a href="#contact" style={{ textDecoration: "none" }} aria-label="connect">
                        <Button variant="Let's Talk" sx={{
                            paddingX: "2.2rem", paddingY: "0.4rem", border: "2px solid #7027f9", color: "white", fontSize: "1.1rem",
                            fontFamily: "serif", borderRadius: "10px", textTransform: 'none', ':hover': { backgroundColor: "#9645ff" }
                        }}>Let's Talk</Button>
                    </a>
                </Box>
            </Box>

            <Box display="flex" alignItems="center">
                <Box position="fixed" sx={{ rotate: "90deg", opacity: "0.2", right: `${isNonMobile ? "-1%" : "-10%"}`, top: `${isNonMobile ? "30%" : "50%"}` }}>
                    <Typography fontFamily="serif" fontSize={isNonMobile ? "8rem" : "6rem"} color="white">DEV</Typography>
                </Box>
                {isNonMobile && (
                    <Box position="absolute" sx={{ left: "45%" }} component={motion.div}
                        initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 1 }} transition={{ duration: 1, delay: 0.2 }}>
                        <motion.img src={require("../../Assets/graph.webp")} alt="graph" style={{ width: "15%", height: "25%", position: "absolute", top: "-2%", right: "20%", zIndex: "1" }}
                            initial={{ scale: 0 }} animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 6 }} draggable="false" />
                        <motion.img src={require("../../Assets/note.webp")} alt="note" style={{ width: "12%", height: "22%", position: "absolute", top: "8%", left: "12%", zIndex: "1" }}
                            initial={{ scale: 0 }} animate={{ scale: [1, 1.3, 1] }} transition={{ repeat: Infinity, duration: 6 }} draggable="false" />
                        <motion.img src={require("../../Assets/coding.png")} alt="header-pic" style={{ width: "100%", height: "100%", }}
                            initial={{ scale: 0 }} animate={{ scale: [1, 0.9, 1] }} transition={{ repeat: Infinity, duration: 6 }} draggable="false" />
                    </Box>
                )}
            </Box>
        </Flexbetween>
    )
}

export default Home;

