import { Box, Typography, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import Feedback from '../../components/Feedback/Feedback';

function Contact() {

    const isNonMobile = useMediaQuery("(min-width: 1000px)");

    return (
        <Box id="contact" padding={isNonMobile ? "5rem" : "1rem"} component={motion.div}
            initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}>
            <Box paddingY={2} marginBottom={3}>
                <Typography color="#9645ff" fontSize={isNonMobile ? "3.6rem" : "3rem"} fontFamily="serif" sx={{ lineHeight: "1.2", fontWeight: "bold" }}>Contact</Typography>
                <Typography color="white" fontFamily="serif" fontSize={isNonMobile ? "1.4rem" : "1.2rem"} sx={{ fontFamily: 'Sofia' }}>Hey, please share your thoughts.</Typography>
            </Box>
            <Box display="flex" justifyContent="space-around">
                {isNonMobile && (
                    <Box paddingLeft={6}>
                        <motion.img src={require("../../Assets/contact.png")} alt="contact" draggable="false"
                            style={{ width: "5rem", height: "5rem", rotate: "340deg", position: "absolute" }}
                            animate={{ scale: [1.1, 0.9, 1.1] }} transition={{ repeat: Infinity, duration: 4 }} />
                        <motion.img src={require("../../Assets/contact_person.png")} alt="contact_image" draggable="false"
                            style={{ width: "90%", height: "90%" }}
                            animate={{ scale: [0.9, 1.1, 0.9] }} transition={{ repeat: Infinity, duration: 4 }} />
                    </Box>
                )}

                <Box display="flex" justifyContent="center" alignItems="center">
                    <Feedback />
                </Box>
            </Box>
        </Box>
    )
}

export default Contact;