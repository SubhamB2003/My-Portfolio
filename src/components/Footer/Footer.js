import { Box, Typography, useMediaQuery } from '@mui/material';
import React from 'react';


function Footer() {

    const isNonMobile = useMediaQuery("(min-width: 1000px)");

    return (
        <Box width="100%" sx={{ bottom: "5rem" }} paddingY={5}>
            <Typography textAlign="center" fontFamily="serif" fontSize={isNonMobile ? "1rem" : "0.8rem"} sx={{ color: "white", opacity: "0.8" }}>© 2023 itz_subham07. All rights reserved.</Typography>
        </Box>
    )
}

export default Footer;