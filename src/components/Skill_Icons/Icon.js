import { Box, useMediaQuery } from '@mui/material';
import React from 'react';

function Icon({ icon, icon_txt }) {

    const isNonMobile = useMediaQuery("(min-width: 1000px)");

    return (
        <Box>
            <img src={icon} alt={icon_txt} draggable="false"
                style={{ width: `${isNonMobile ? "4rem" : "3rem"}`, height: `${isNonMobile ? "8vh" : "6vh"}`, objectFit: "contain" }} />
        </Box>
    )
}

export default Icon;