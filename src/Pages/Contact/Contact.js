import { Box, useMediaQuery } from '@mui/material';
import React from 'react';
import Feedback from '../../components/Feedback/Feedback';

function Contact() {

    const isNonMobile = useMediaQuery("(min-width: 1000px)");

    return (
        <Box id="contact" padding={isNonMobile ? "5rem" : "2rem"}>
            <Box display="flex" justifyContent="space-around">
                {isNonMobile && (
                    <Box paddingLeft={6}>
                        <img src={require("../../Assets/contact.png")} alt="contact" draggable="false"
                            style={{ width: "5rem", height: "5rem", rotate: "340deg", position: "absolute" }} />
                        <img src={require("../../Assets/contact_person.png")} alt="contact_image" draggable="false"
                            style={{ width: "90%", height: "90%" }} />
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