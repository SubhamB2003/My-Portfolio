import { motion } from 'framer-motion';
import React from 'react';

function SkillButtons({ icon, icon_txt, i }) {
    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.25 * i }}
            draggable="false" style={{
                display: 'flex', justifyContent: 'center', alignItems: 'center', height: '3rem',
                border: '0.1px solid white', borderRadius: '10px', padding: '0 1rem', backgroundColor: 'rgb(23, 23, 33)'
            }}
        >
            <img src={icon} alt={icon_txt} draggable="false" style={{ height: "3vh", objectFit: "contain" }} />
            <p style={{ fontFamily: 'serif', fontSize: '1rem', color: 'white', marginLeft: '0.5rem' }}>{icon_txt}</p>
        </motion.div>
    )
}

export default SkillButtons