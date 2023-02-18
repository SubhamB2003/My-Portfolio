import { Box, Typography } from '@mui/material';
import React from 'react';


function Footer() {

    return (
        <Box width="100%" sx={{ bottom: "5rem" }} paddingY={5}>
            <Typography textAlign="center" fontFamily="serif" fontSize="1rem" sx={{ color: "white", opacity: "0.8" }}>© 2023 itz_subham07. All rights reserved.</Typography>
        </Box>
    )
}

export default Footer;