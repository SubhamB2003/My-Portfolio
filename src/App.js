import { KeyboardArrowUp } from '@mui/icons-material';
import { Box, CssBaseline, Divider, Fab, Fade, useScrollTrigger } from '@mui/material';
import React from 'react';
import "./App.css";
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import GithubCal from './Pages/Github_Chart/GithubCal';
import Home from './Pages/Home/Home';
import Project from './Pages/Project/Project';
import Skill from './Pages/Skill/Skill';
import WorkExperience from './Pages/Work_Experience/WorkExperience';
import Cursor from "./components/Cursor/Cursor";
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Progressbar from "./components/Progressbar/Progressbar";


function App(props) {
  return (
    <>
      <CssBaseline />
      <Progressbar />
      <Cursor />
      <Box width="100%" height="100%" sx={{ backgroundColor: "rgb(17,14,21)", overflow: "hidden" }}>
        <Navbar />
        <span id="back-to-top-anchor" />
        <Home />
        <About />
        <Skill />
        <Project />
        <WorkExperience />
        <GithubCal />
        <Contact />
        <ScrollTop {...props}>
          <Fab size="small" aria-label="scroll back to top">
            <KeyboardArrowUp />
          </Fab>
        </ScrollTop>
        <Divider sx={{ backgroundColor: "gray", width: "90%", marginX: "auto" }} />
        <Footer />
      </Box>
    </>
  )
}


function ScrollTop(props) {

  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

export default App;