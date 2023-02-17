import { EmailOutlined, GitHub, LinkedIn, Twitter } from '@mui/icons-material';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import Typed from "typed.js";
import headerImg from "../../Assets/header-image.png";
import Flexbetween from '../../components/Flexbetween';

function Home() {

    const textRef = useRef(null);
    const isNonMobile = useMediaQuery("(min-width: 1000px)");
    const isMobile = useMediaQuery("(min-width: 760px)");

    useEffect(() => {
        const typed = new Typed(textRef.current, {
            strings: ["Frontend Developer", "Mern Developer", "Android Developer"],
            typeSpeed: 50,
            startDelay: 1000,
            backSpeed: 50,
            backDelay: 3000,
            loop: true,
        });

        return () => typed.destroy();
    }, [textRef]);

    return (
        <Flexbetween height="100vh" padding={isNonMobile ? "4.5rem" : "2rem"}>
            <Box>
                <Typography sx={{ fontSize: "1.3rem", color: "#9645ff" }} textAlign="start" color="white" fontFamily="serif">{"`<h5> "}Hi, my name is{" </h5>`"}</Typography>
                <Typography fontFamily="serif" sx={{ fontSize: `${isMobile ? "3.5rem" : "2.5rem"}`, fontWeight: "bold", lineHeight: "1.2" }} color="white">
                    {/* textShadow: "2px 2px 8px #9645ff" */}
                    Subham Bhattacharjee</Typography>
                <Box paddingY={2} zIndex={1}>
                    <Typography color="white" fontFamily="serif" fontSize={isMobile ? "2rem" : "1.5rem"}
                        sx={{ opacity: "0.6" }}>
                        {"`<p>"} I am a {" "} <span ref={textRef}></span> {"</p>`"}
                        <span style={{ fontSize: `${isMobile ? "2rem" : "1.5rem"}`, animation: "typedjsBlink 0.7s infinite" }} />
                    </Typography>
                </Box>
                <Box display="flex" gap={isMobile ? 4 : 2} paddingY={2}>
                    <EmailOutlined sx={{ fill: "white", fontSize: `${isMobile ? "1.7rem" : "1.4rem"}`, ':hover': { fill: "orange" } }} />
                    <InstagramIcon sx={{ fill: "white", fontSize: `${isMobile ? "1.7rem" : "1.4rem"}`, ':hover': { fill: "#d6249f" } }} />
                    <Twitter sx={{ fill: "white", fontSize: `${isMobile ? "1.7rem" : "1.4rem"}`, ':hover': { fill: "#00acee" } }} />
                    <GitHub sx={{ fill: "white", fontSize: `${isMobile ? "1.7rem" : "1.4rem"}` }} />
                    <LinkedIn sx={{ fill: "white", fontSize: `${isMobile ? "1.7rem" : "1.4rem"}`, ':hover': { fill: "#0e76a8" } }} />
                </Box>

                <Box paddingY={isMobile ? 4 : 2} zIndex={1}>
                    <a href="#contact" style={{ textDecoration: "none" }}>
                        <Button variant="caption" sx={{
                            paddingX: "2.2rem", paddingY: "0.4rem", border: "2px solid #7027f9", color: "white", fontSize: "1.1rem",
                            fontFamily: "serif", borderRadius: "10px", textTransform: 'none', ':hover': { backgroundColor: "#9645ff" }
                        }}>Let's Connect</Button>
                    </a>
                </Box>
            </Box>

            <Box display="flex" alignItems="center">
                <Box position="fixed" sx={{ rotate: "90deg", opacity: "0.2", right: `${isNonMobile ? "-1%" : "-10%"}`, top: `${isNonMobile ? "30%" : "50%"}` }}>
                    <Typography fontFamily="serif" fontSize={isNonMobile ? "8rem" : "6rem"} color="white">DEV</Typography>
                </Box>
                {isNonMobile && (
                    <Box position="absolute" sx={{ left: "60%" }}>
                        <img src={headerImg} alt="header-pic" style={{ width: "90%", height: "90%" }} />
                    </Box>
                )}
            </Box>
        </Flexbetween>
    )
}

export default Home;