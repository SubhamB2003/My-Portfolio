import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import './style.css';

function Cursor() {

    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });

    useEffect(() => {
        const mouseMove = e => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            })
        }

        window.addEventListener("mousemove", mouseMove);
        return () => {
            window.removeEventListener("mousemove", mouseMove);
        }
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
        },
        followed: {
            height: 50,
            width: 50,
            x: mousePosition.x - 32,
            y: mousePosition.y - 32,
            transition: {
                duration: 0.01,
            }
        }
    }

    return (
        <>
            <motion.div
                className='cursor'
                variants={variants}
                animate="default"
            />
            <motion.div
                className='cursor-followed'
                variants={variants}
                animate="followed"
            />
        </>
    );
}

export default Cursor;