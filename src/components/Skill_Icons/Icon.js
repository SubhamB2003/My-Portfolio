import { useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';

function Icon({ icon, icon_txt, i }) {

    const isNonMobile = useMediaQuery("(min-width: 1000px)");

    return (
        <motion.img src={icon} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.25 * i }}
            alt={icon_txt} draggable="false"
            style={{ width: `${isNonMobile ? "4rem" : "3rem"}`, height: `${isNonMobile ? "8vh" : "6vh"}`, objectFit: "contain" }} />
    )
}

export default Icon;