import { Box, Typography, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import Bootstrap from "../../Assets/Tech Icons/Bootstrap.png";
import C from "../../Assets/Tech Icons/c.png";
import ChartJs from "../../Assets/Tech Icons/Chart.png";
import Css from "../../Assets/Tech Icons/css.svg";
import Express from "../../Assets/Tech Icons/Express.png";
import Framer from "../../Assets/Tech Icons/Framer Motion.jpg";
import Git from "../../Assets/Tech Icons/git.svg";
import Github from "../../Assets/Tech Icons/github.svg";
import Html from "../../Assets/Tech Icons/html.svg";
import Java from "../../Assets/Tech Icons/java.svg";
import JavaScript from "../../Assets/Tech Icons/javascript.svg";
import Mui from "../../Assets/Tech Icons/Metarial_UI.png";
import MongoDB from "../../Assets/Tech Icons/mongodb.webp";
import Node from "../../Assets/Tech Icons/nodejs.svg";
import ReactIcon from "../../Assets/Tech Icons/react.svg";
import ReactNative from "../../Assets/Tech Icons/React_Native.png";
import Redux from "../../Assets/Tech Icons/redux.svg";
import Tailwind from "../../Assets/Tech Icons/tailwindcss.svg";
import Icon from '../../components/Skill_Icons/Icon';


function Skill() {

    const isNonMobile = useMediaQuery("(min-width: 1000px)");

    return (
        <Box id="skill" padding={isNonMobile ? "4.5rem" : "2rem"} mt={!isNonMobile && 10} component={motion.div}
            initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}>
            <Box paddingY={8}>
                <Typography color="white" fontFamily="serif" fontSize="1.2rem">SKILLS</Typography>
                <Typography color="#9645ff" fontSize={isNonMobile ? "4.2rem" : "3rem"} fontFamily="serif" sx={{ lineHeight: "1.5", fontWeight: "bold" }}>My Skills</Typography>
                <Typography color="white" fontFamily="serif" fontSize={isNonMobile ? "1.5rem" : "1.2rem"}>I like to take responsibility to craft aesthetic user experience <br />using modern frontend architecture.</Typography>
            </Box>

            <Box paddingTop={4}>
                <Typography color="white" fontFamily="serif" fontSize={isNonMobile ? "1.6rem" : "1.2rem"}>Languages and Tools</Typography>
                <Box display="flex" gap={isNonMobile ? 3 : 2} paddingY={2}>
                    <Icon icon={C} icon_txt={"C"} i={1} />
                    <Icon icon={Java} icon_txt={"Java"} i={2} />
                    <Icon icon={Html} icon_txt={"Html"} i={3} />
                    <Icon icon={Css} icon_txt={"Css"} i={4} />
                    <Icon icon={JavaScript} icon_txt={"JavaScript"} i={5} />
                </Box>
            </Box>

            <Box>
                <Typography color="white" fontFamily="serif" fontSize={isNonMobile ? "1.6rem" : "1.2rem"}>Framework and Libraries</Typography>
                <Box display="flex" flexWrap="wrap" gap={isNonMobile ? 3 : 2} paddingY={2}>
                    <Icon icon={ReactIcon} icon_txt={"React"} i={1} />
                    <Icon icon={Redux} icon_txt={"Redux"} i={2} />
                    <Icon icon={ReactNative} icon_txt={"React Native"} i={3} />
                    <Icon icon={Node} icon_txt={"Node"} i={4} />
                    <Icon icon={Express} icon_txt={"Express"} i={5} />
                    <Icon icon={Bootstrap} icon_txt={"Bootstrap"} i={6} />
                    <Icon icon={Tailwind} icon_txt={"Tailwind"} i={7} />
                    <Icon icon={Mui} icon_txt={"Mui"} i={8} />
                    <Icon icon={ChartJs} icon_txt={"Chart Js"} i={9} />
                    <Icon icon={Framer} icon_txt={"Framer Motion"} i={10} />
                </Box>
            </Box>

            <Box>
                <Typography color="white" fontFamily="serif" fontSize={isNonMobile ? "1.6rem" : "1.2rem"}>Database</Typography>
                <Box display="flex" gap={isNonMobile ? 3 : 2} paddingY={2}>
                    <Icon icon={MongoDB} icon_txt={"MongoDB"} i={1} />
                </Box>
            </Box>

            <Box>
                <Typography color="white" fontFamily="serif" fontSize={isNonMobile ? "1.6rem" : "1.2rem"}>Version Control</Typography>
                <Box display="flex" gap={isNonMobile ? 3 : 2} paddingY={2}>
                    <Icon icon={Git} icon_txt={"Git"} i={1} />
                    <Icon icon={Github} icon_txt={"Github"} i={2} />
                </Box>
            </Box>
        </Box>
    )
}

export default Skill;