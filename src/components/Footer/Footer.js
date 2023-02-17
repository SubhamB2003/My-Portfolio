import { Box, useMediaQuery } from '@mui/material';
import React from 'react';

function Footer() {

    const isNonMobile = useMediaQuery("(min-width: 1000px)");

    return (
        <Box padding={isNonMobile ? "4.5rem" : "2rem"}>

        </Box>
    )
}

export default Footer;