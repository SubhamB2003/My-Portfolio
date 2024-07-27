import { Box, Typography, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import GitHubCalendar from 'react-github-calendar';

function GithubCal() {

    const isNonMobile = useMediaQuery("(min-width: 1000px)");

    return (
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" sx={{ color: "#fff", fontFamily: "serif" }}
            paddingX={!isNonMobile && 3}
            gap={isNonMobile ? 8 : 4} paddingY={20} component={motion.div}
            initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}>
            <Typography fontFamily="serif" fontWeight="bold" fontSize={isNonMobile ? "2.6rem" : "2rem"} sx={{ fontFamily: 'Sofia' }}>Days I <span style={{ color: "#9645ff" }}>Code</span></Typography>
            <GitHubCalendar username='SubhamB2003'
                blockSize={15}
                blockMargin={5}
                color="#c084f5"
                fontSize={isNonMobile ? 16 : 12} />
        </Box>
    )
}

export default GithubCal;