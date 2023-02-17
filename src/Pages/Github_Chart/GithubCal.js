import { Box, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import GitHubCalendar from 'react-github-calendar';

function GithubCal() {

    const isNonMobile = useMediaQuery("(min-width: 1000px)");

    return (
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" sx={{ color: "#fff", fontFamily: "serif" }} paddingX={!isNonMobile && 3}
           gap={isNonMobile ? 8 : 4} paddingY={isNonMobile ? 20 : 8}>
            <Typography fontFamily="serif" fontSize={isNonMobile ? "3rem" : "2rem"}>Days I <span style={{ color: "#9645ff" }}>Code</span></Typography>
            <GitHubCalendar username='SubhamB2003'
                blockSize={15}
                blockMargin={5}
                color="#c084f5"
                fontSize={isNonMobile ? 16 : 12} />
        </Box>
    )
}

export default GithubCal;