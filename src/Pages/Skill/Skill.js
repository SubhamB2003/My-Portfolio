import { Box, Typography, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import Bootstrap from "../../Assets/Tech_Icons/Bootstrap.png";
import ChartJs from "../../Assets/Tech_Icons/Chart.png";
import Express from "../../Assets/Tech_Icons/Express.png";
import Framer from "../../Assets/Tech_Icons/Framer_Motion.jpg";
import Mui from "../../Assets/Tech_Icons/Metarial_UI.png";
import Postman from '../../Assets/Tech_Icons/Postman.png';
import ReactNative from "../../Assets/Tech_Icons/React_Native.png";
import C from "../../Assets/Tech_Icons/c.png";
import Css from "../../Assets/Tech_Icons/css.svg";
import Firebase from "../../Assets/Tech_Icons/firebase.png";
import Git from "../../Assets/Tech_Icons/git.svg";
import Github from "../../Assets/Tech_Icons/github.svg";
import Html from "../../Assets/Tech_Icons/html.svg";
import Java from "../../Assets/Tech_Icons/java.svg";
import JavaScript from "../../Assets/Tech_Icons/javascript.svg";
import MongoDB from "../../Assets/Tech_Icons/mongodb.webp";
import Netlify from "../../Assets/Tech_Icons/netlify.png";
import Node from "../../Assets/Tech_Icons/nodejs.svg";
import Postgresql from "../../Assets/Tech_Icons/postgresql.png";
import ReactIcon from "../../Assets/Tech_Icons/react.svg";
import Redux from "../../Assets/Tech_Icons/redux.svg";
import Sequelize from "../../Assets/Tech_Icons/sequelize.png";
import Tailwind from "../../Assets/Tech_Icons/tailwindcss.svg";
import Icon from '../../components/Skill_Icons/Icon';


function Skill() {

    const isNonMobile = useMediaQuery("(min-width: 1000px)");

    return (
        <Box id="skill" padding={isNonMobile ? "4.5rem" : "2rem"} mt={!isNonMobile && 10} component={motion.div}
            initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}>
            <Box paddingY={8}>
                <Typography color="white" fontFamily="serif" fontSize="1.2rem">SKILL</Typography>
                <Typography color="#9645ff" fontSize={isNonMobile ? "4.2rem" : "3rem"} fontFamily="serif" sx={{ lineHeight: "1.5", fontWeight: "bold" }}>My Skills</Typography>
                <Typography color="white" fontFamily="serif" fontSize={isNonMobile ? "1.5rem" : "1.2rem"}>Experience in developing and deploying web applications.</Typography>
            </Box>

            <Box paddingTop={4}>
                <Typography color="white" fontFamily="serif" fontSize={isNonMobile ? "1.6rem" : "1.2rem"}>Languages and Tools</Typography>
                <Box display="flex" gap={isNonMobile ? 3 : 2} paddingY={2}>
                    <Icon icon={C} icon_txt={"C"} i={1} />
                    <Icon icon={Java} icon_txt={"Java"} i={2} />
                    <Icon icon={JavaScript} icon_txt={"JavaScript"} i={3} />
                </Box>
            </Box>

            <Box>
                <Typography color="white" fontFamily="serif" fontSize={isNonMobile ? "1.6rem" : "1.2rem"}>Framework and Libraries</Typography>
                <Box display="flex" flexWrap="wrap" gap={isNonMobile ? 3 : 2} paddingY={2}>
                    <Icon icon={Html} icon_txt={"Html"} i={1} />
                    <Icon icon={Css} icon_txt={"Css"} i={2} />
                    <Icon icon={ReactIcon} icon_txt={"React"} i={3} />
                    <Icon icon={Redux} icon_txt={"Redux"} i={4} />
                    <Icon icon={ReactNative} icon_txt={"React Native"} i={5} />
                    <Icon icon={Node} icon_txt={"Node"} i={6} />
                    <Icon icon={Express} icon_txt={"Express"} i={7} />
                    <Icon icon={Bootstrap} icon_txt={"Bootstrap"} i={8} />
                    <Icon icon={Tailwind} icon_txt={"Tailwind"} i={9} />
                    <Icon icon={Mui} icon_txt={"Mui"} i={10} />
                    <Icon icon={Sequelize} icon_txt={"Sequelize"} i={11} />
                    <Icon icon={ChartJs} icon_txt={"Chart Js"} i={12} />
                    <Icon icon={Framer} icon_txt={"Framer Motion"} i={13} />
                </Box>
            </Box>

            <Box>
                <Typography color="white" fontFamily="serif" fontSize={isNonMobile ? "1.6rem" : "1.2rem"}>Databases</Typography>
                <Box display="flex" gap={isNonMobile ? 3 : 2} paddingY={2}>
                    <Icon icon={MongoDB} icon_txt={"MongoDB"} i={1} />
                    <Icon icon={Postgresql} icon_txt={"Postgresql"} i={2} />
                </Box>
            </Box>

            <Box>
                <Typography color="white" fontFamily="serif" fontSize={isNonMobile ? "1.6rem" : "1.2rem"}>Version Control</Typography>
                <Box display="flex" gap={isNonMobile ? 3 : 2} paddingY={2}>
                    <Icon icon={Git} icon_txt={"Git"} i={1} />
                    <Icon icon={Github} icon_txt={"Github"} i={2} />
                    <Icon icon={Postman} icon_txt={"Postman"} i={3} />
                </Box>
            </Box>

            <Box>
                <Typography color="white" fontFamily="serif" fontSize={isNonMobile ? "1.6rem" : "1.2rem"}>Deployment</Typography>
                <Box display="flex" gap={isNonMobile ? 3 : 2} paddingY={2}>
                    <Icon icon={Netlify} icon_txt={"Netlify"} i={1} />
                    <Icon icon={Firebase} icon_txt={"Firebase"} i={2} />
                </Box>
            </Box>
        </Box>
    )
}

export default Skill;