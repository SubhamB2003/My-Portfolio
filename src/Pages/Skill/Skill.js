import { Box, Typography, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import Bootstrap from "../../Assets/Tech_Icons/Bootstrap.png";
import Express from "../../Assets/Tech_Icons/Express.png";
import Framer from "../../Assets/Tech_Icons/Framer_Motion.jpg";
import Mui from "../../Assets/Tech_Icons/Metarial_UI.png";
import Postman from '../../Assets/Tech_Icons/Postman.png';
import ReactNative from "../../Assets/Tech_Icons/React_Native.png";
import Typeorm from "../../Assets/Tech_Icons/Typeormlogo.png";
import C from "../../Assets/Tech_Icons/c.png";
import Css from "../../Assets/Tech_Icons/css.svg";
import Docker from "../../Assets/Tech_Icons/docker.png";
import Firebase from "../../Assets/Tech_Icons/firebase.png";
import Git from "../../Assets/Tech_Icons/git.svg";
import Github from "../../Assets/Tech_Icons/github.svg";
import Html from "../../Assets/Tech_Icons/html.svg";
import Java from "../../Assets/Tech_Icons/java.svg";
import JavaScript from "../../Assets/Tech_Icons/javascript.svg";
import MongoDB from "../../Assets/Tech_Icons/mongodb.webp";
import Mongoose from "../../Assets/Tech_Icons/mongoose.png";
import Nestjs from '../../Assets/Tech_Icons/nestjs.png';
import Netlify from "../../Assets/Tech_Icons/netlify.png";
import Node from "../../Assets/Tech_Icons/nodejs.png";
import Postgresql from "../../Assets/Tech_Icons/postgresql.png";
import ReactIcon from "../../Assets/Tech_Icons/react.svg";
import Redux from "../../Assets/Tech_Icons/redux.svg";
import Sequelize from "../../Assets/Tech_Icons/sequelize.png";
import Tailwind from "../../Assets/Tech_Icons/tailwindcss.svg";
import Typescript from '../../Assets/Tech_Icons/typescript.png';
import Vercel from "../../Assets/Tech_Icons/vercel.png";
import Vscode from '../../Assets/Tech_Icons/vscode.png';
import SkillButtons from '../../components/Skill_Icons/SkillButtons';


function Skill() {

    const isNonMobile = useMediaQuery("(min-width: 1000px)");

    return (
        <Box id="skill" padding={isNonMobile ? "4.5rem" : "1rem"} mt={!isNonMobile && 10} component={motion.div}
            initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}>
            <Box paddingY={8}>
                <Typography color="white" fontFamily="serif" fontSize="1.2rem" sx={{ fontFamily: 'Sofia' }}>SKILL</Typography>
                <Typography color="#9645ff" fontSize={isNonMobile ? "3.6rem" : "3rem"} fontFamily="serif" sx={{ lineHeight: "1.5", fontWeight: "bold" }}>My Skills</Typography>
                <Typography color="white" fontFamily="serif" fontSize={isNonMobile ? "1.3rem" : "1.2rem"} lineHeight={1.2} sx={{ fontFamily: 'Sofia' }}>Experience in developing and deploying web applications.</Typography>
            </Box>

            <Box paddingTop={4}>
                <Typography color="white" fontFamily="serif" fontSize={isNonMobile ? "1.6rem" : "1.3rem"} sx={{ fontFamily: 'Sofia' }}>Languages</Typography>
                <Box display="flex" flexWrap="wrap" gap={isNonMobile ? 3 : 2} paddingY={2}>
                    <SkillButtons icon={C} icon_txt={"C"} i={1} />
                    <SkillButtons icon={Java} icon_txt={"Java"} i={2} />
                    <SkillButtons icon={JavaScript} icon_txt={"JavaScript"} i={3} />
                    <SkillButtons icon={Typescript} icon_txt={"TypeScript"} i={4} />
                </Box>
            </Box>

            <Box>
                <Typography color="white" fontFamily="serif" fontSize={isNonMobile ? "1.6rem" : "1.3rem"} sx={{ fontFamily: 'Sofia' }}>Framework and Libraries</Typography>
                <Box display="flex" flexWrap="wrap" gap={isNonMobile ? 3 : 2} paddingY={2}>
                    <SkillButtons icon={Html} icon_txt={"Html"} i={1} />
                    <SkillButtons icon={Css} icon_txt={"Css"} i={2} />
                    <SkillButtons icon={ReactIcon} icon_txt={"React Js"} i={3} />
                    <SkillButtons icon={Redux} icon_txt={"Redux"} i={4} />
                    <SkillButtons icon={ReactNative} icon_txt={"React Native"} i={5} />
                    <SkillButtons icon={Node} icon_txt={"Node Js"} i={6} />
                    <SkillButtons icon={Express} icon_txt={"Express Js"} i={7} />
                    <SkillButtons icon={Nestjs} icon_txt={"Nest Js"} i={8} />
                    <SkillButtons icon={Bootstrap} icon_txt={"Bootstrap"} i={9} />
                    <SkillButtons icon={Tailwind} icon_txt={"Tailwind Css"} i={10} />
                    <SkillButtons icon={Mui} icon_txt={"Mui"} i={11} />
                    <SkillButtons icon={Sequelize} icon_txt={"Sequelize"} i={12} />
                    <SkillButtons icon={Typeorm} icon_txt={"TypeOrm"} i={13} />
                    <SkillButtons icon={Mongoose} icon_txt={"Mongoose"} i={14} />
                    <SkillButtons icon={Framer} icon_txt={"Framer Motion"} i={15} />
                </Box>
            </Box>

            <Box>
                <Typography color="white" fontFamily="serif" fontSize={isNonMobile ? "1.6rem" : "1.3rem"} sx={{ fontFamily: 'Sofia' }}>Databases</Typography>
                <Box display="flex" gap={isNonMobile ? 3 : 2} paddingY={2}>
                    <SkillButtons icon={MongoDB} icon_txt={"MongoDB"} i={1} />
                    <SkillButtons icon={Postgresql} icon_txt={"Postgresql"} i={2} />
                </Box>
            </Box>

            <Box>
                <Typography color="white" fontFamily="serif" fontSize={isNonMobile ? "1.6rem" : "1.3rem"} sx={{ fontFamily: 'Sofia' }}>Tools</Typography>
                <Box display="flex" flexWrap="wrap" gap={isNonMobile ? 3 : 2} paddingY={2}>
                    <SkillButtons icon={Git} icon_txt={"Git"} i={1} />
                    <SkillButtons icon={Github} icon_txt={"Github"} i={2} />
                    <SkillButtons icon={Postman} icon_txt={"Postman"} i={3} />
                    <SkillButtons icon={Docker} icon_txt={"Docker"} i={3} />
                    <SkillButtons icon={Vscode} icon_txt={"Vs Code"} i={3} />
                </Box>
            </Box>

            <Box>
                <Typography color="white" fontFamily="serif" fontSize={isNonMobile ? "1.6rem" : "1.3rem"} sx={{ fontFamily: 'Sofia' }}>Deployment</Typography>
                <Box display="flex" flexWrap="wrap" gap={isNonMobile ? 3 : 2} paddingY={2}>
                    <SkillButtons icon={Vercel} icon_txt={"Vercel"} i={1} />
                    <SkillButtons icon={Firebase} icon_txt={"Firebase"} i={2} />
                    <SkillButtons icon={Netlify} icon_txt={"Netlify"} i={3} />
                </Box>
            </Box>
        </Box>
    )
}

export default Skill;