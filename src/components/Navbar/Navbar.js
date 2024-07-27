import { CloseOutlined, MenuOutlined } from '@mui/icons-material';
import { Avatar, Box, Drawer, IconButton, List, Tooltip, Typography, useMediaQuery } from '@mui/material';
import { motion } from "framer-motion";
import { useState } from 'react';


function Navbar(props) {

    const isMobile = useMediaQuery("(min-width: 640px)");
    const isNonMobile = useMediaQuery("(min-width: 760px)");

    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const drawerWidth = 320;

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const container = window !== undefined ? () => window().document.body : undefined;


    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ height: "100vh", backgroundColor: "rgb(17,14,21)" }}>
            <List sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "3rem", marginY: "auto" }}>
                <a href="#top" style={{ textDecoration: "none" }}>
                    <Typography sx={{
                        color: "white", fontSize: "1.2rem", fontFamily: "Sofia", fontWeight: "bold",
                        ':hover': { color: "#7027f9", transition: "0.5s" }
                    }}>Home</Typography>
                </a>
                <a href="#about" style={{ textDecoration: "none" }}>
                    <Typography sx={{
                        color: "white", fontSize: "1.2rem", fontFamily: "Sofia", fontWeight: "bold",
                        ':hover': { color: "#7027f9", transition: "0.5s" }
                    }}>About</Typography>
                </a>
                <a href="#skill" style={{ textDecoration: "none" }}>
                    <Typography sx={{
                        color: "white", fontSize: "1.2rem", fontFamily: "Sofia", fontWeight: "bold",
                        ':hover': { color: "#7027f9", transition: "0.5s" }
                    }}>Skill</Typography>
                </a>
                <a href="#project" style={{ textDecoration: "none" }}>
                    <Typography sx={{
                        color: "white", fontSize: "1.2rem", fontFamily: "Sofia", fontWeight: "bold",
                        ':hover': { color: "#7027f9", transition: "0.5s" }
                    }}>Project</Typography>
                </a>
                <a href="#experience" style={{ textDecoration: "none" }}>
                    <Typography sx={{
                        color: "white", fontSize: "1.2rem", fontFamily: "Sofia", fontWeight: "bold",
                        ':hover': { color: "#7027f9", transition: "0.5s" }
                    }}>Experience</Typography>
                </a>
                <a href="#contact" style={{ textDecoration: "none" }}>
                    <Typography sx={{
                        color: "white", fontSize: "1.2rem", fontFamily: "Sofia", fontWeight: "bold",
                        ':hover': { color: "#7027f9", transition: "0.5s" }
                    }}>Contact</Typography>
                </a>
            </List>
        </Box>
    );

    return (
        <>
            <Box display="flex" justifyContent="space-between" paddingY="1.5rem" paddingX={"4%"} sx={{
                width: "100%", position: "fixed", backgroundColor: "transparent",
                zIndex: "49"
            }} >
                <Box display="flex" alignItems="center" paddingX={isNonMobile ? "1rem" : "1.2rem"} paddingY="0.7rem" position="absolute"
                    sx={{ color: "white", backdropFilter: "blur(2rem)", border: "1px solid hsla(0,0%,100%,.1)", borderRadius: "1.6rem" }}>
                    <a href="#top" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
                        <Tooltip title="Itz_me">
                            <IconButton sx={{ p: 0 }}>
                                <Avatar alt="Itz_me" src={require("../../Assets/IMG.png")} />
                            </IconButton>
                        </Tooltip>
                        <Typography fontSize="1.25rem" paddingLeft={2} fontFamily="serif"
                            sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' }, color: "white", fontFamily: "Sofia" }}>
                            Subham.<span style={{ color: "#9645ff" }}>( )</span>
                        </Typography>
                    </a>
                </Box>

                <Box display="flex" alignItems="center" paddingLeft={isNonMobile && "3rem"} paddingX={isNonMobile ? "3rem" : "0.5rem"} paddingY={isNonMobile ? "1rem" : "0.5rem"} position="absolute"
                    sx={{ color: "white", backdropFilter: "blur(2rem)", border: "1px solid hsla(0,0%,100%,.1)", borderRadius: "1.6rem", right: `${isNonMobile ? "4rem" : "0.25rem"}` }}>
                    <Box display={isMobile ? "block" : "none"}>
                        <Box display="flex" gap={3}>
                            <a href="#about" style={{ textDecoration: "none" }}>
                                <Typography sx={{
                                    color: "white", fontSize: "1.2rem", fontFamily: "Sofia", fontWeight: "bold",
                                    ':hover': { color: "#7027f9", transition: "0.5s" }
                                }}>About</Typography>
                            </a>
                            <a href="#skill" style={{ textDecoration: "none" }}>
                                <Typography sx={{
                                    color: "white", fontSize: "1.2rem", fontFamily: "Sofia", fontWeight: "bold",
                                    ':hover': { color: "#7027f9", transition: "0.5s" }
                                }}>Skill</Typography>
                            </a>
                            <a href="#project" style={{ textDecoration: "none" }}>
                                <Typography sx={{
                                    color: "white", fontSize: "1.2rem", fontFamily: "Sofia", fontWeight: "bold",
                                    ':hover': { color: "#7027f9", transition: "0.5s" }
                                }}>Project</Typography>
                            </a>
                            <a href="#experience" style={{ textDecoration: "none" }}>
                                <Typography sx={{
                                    color: "white", fontSize: "1.2rem", fontFamily: "Sofia", fontWeight: "bold",
                                    ':hover': { color: "#7027f9", transition: "0.5s" }
                                }}>Experience</Typography>
                            </a>
                            <a href="#contact" style={{ textDecoration: "none" }}>
                                <Typography sx={{
                                    color: "white", fontSize: "1.2rem", fontFamily: "Sofia", fontWeight: "bold",
                                    ':hover': { color: "#7027f9", transition: "0.5s" }
                                }}>Contact</Typography>
                            </a>
                        </Box>
                    </Box>

                    <IconButton
                        component={motion.button}
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerToggle}
                        sx={{ display: { sm: 'none' } }}
                        whileTap={{
                            rotate: [0, 360]
                        }}
                    >
                        {mobileOpen ? <CloseOutlined fontSize='large' /> : <MenuOutlined fontSize='large' />}
                    </IconButton>
                </Box>
            </Box>

            <Box>
                <Drawer
                    container={container}
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </>
    )
}



export default Navbar