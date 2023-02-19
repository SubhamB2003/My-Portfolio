import emailjs from '@emailjs/browser';
import SendIcon from '@mui/icons-material/Send';
import { Button, TextField, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import "./style.css";


function Feedback() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const isNonMobile = useMediaQuery("(min-width: 1000px)");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name !== '' && email !== '' && message !== '') {
            emailjs.sendForm('service_u33z68g',
                'template_3oqczjd',
                e.target,
                'user_ne1wvrwUw7RlLbCObv0tF').then((res) => {
                    console.log(res);
                    setEmail('')
                    setName('')
                    setMessage('')
                    window.alert('Thank you for your feedback');
                })
        }
        else {
            window.alert('Please Fill the form');
        }
    }

    return (
        <Box display="flex" justifyContent="space-evenly" flexDirection="column" padding={isNonMobile ? 10 : 5}
            marginY="auto" sx={{ backdropFilter: "blur(2rem)", borderRadius: "2%", boxShadow: "rgba(0, 0, 0, 0.80) 0px 5px 15px" }}
            className='md:p-10 px-8 py-4 my-auto rounded-tl-3xl rounded-br-3xl'>
            <form onSubmit={handleSubmit} style={{ width: "100%", display: "flex", flexDirection: "column", gap: "2rem" }}>
                <TextField className='textfield' InputLabelProps={{
                    style: { color: '#fff', fontFamily: "serif" }
                }} id="standard-basic1" required label="Name" name='user_name' variant="outlined" autoComplete='off' sx={{ input: { color: 'white', fontFamily: "serif" } }}
                    onChange={(e) => setName(e.target.value)} value={name} />
                <TextField className='textfield' InputLabelProps={{
                    style: { color: '#fff', fontFamily: "serif" }
                }} id="standard-basic2" label="Email" variant="outlined" name='user_email' autoComplete='off' required
                    onChange={(e) => setEmail(e.target.value)} value={email} sx={{ input: { color: 'white', fontFamily: "serif" } }} />
                <TextField className='textfield' InputLabelProps={{
                    style: { color: '#fff', fontFamily: "serif" }
                }} id="standard-basic3" required label="Message" variant="outlined" autoComplete='off'
                    onChange={(e) => setMessage(e.target.value)} name='message' value={message} sx={{ input: { color: 'white', fontFamily: "serif" } }} />
                <Box marginX="auto" mt={2}>
                    <Button type="submit"
                        sx={{
                            width: `${isNonMobile ? "28vw" : "60vw"}`, height: "6vh", backgroundColor: "#7027f9",
                            color: "white", fontFamily: "serif", ":hover": { backgroundColor: "#7027f9", opacity: "0.7" }
                        }}>
                        <SendIcon sx={{ marginRight: "4%" }} /> Send</Button>
                </Box>
            </form>
        </Box>
    )
}

export default Feedback