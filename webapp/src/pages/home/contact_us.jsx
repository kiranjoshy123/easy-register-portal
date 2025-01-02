import React, { useState } from 'react';
import { Grid, TextField, Button, Typography, Box, Stack } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from "@mui/icons-material/Email";

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState(''); 
  const [message, setMessage] = useState(''); 
  
  const handleSubmit = () => 
  { 
    console.log('Name:', name); 
    console.log('Email:', email);
    console.log('Message:', message);
    // ToDo: Integrate email service.
  };

  return (
    <Box sx={{  textAlign: "center" }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "left" }}>
            Thank you for stopping by our website. Our dedicated and hardworking team is here to manage your mail, handle your calls, and provide behind-the-scenes support for your business. We guarantee professional, dependable, and friendly service at all times.
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "left" }}>
            Our support team is available to assist you from 9:00 AM to 5:30 PM, Monday through Friday, except on UK public holidays.
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "left" }}>
            To get in touch, kindly use our contact form to send an email, or find our details below to give us a call or schedule a call back.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Get in touch
          </Typography>
          <Stack spacing={2}>
            <Typography>Complete the below form and we will get back to you as soon as possible.</Typography>
            <TextField label="Your name" variant="outlined" required fullWidth value={name} onChange={(e) => setName(e.target.value)}/>
            <TextField label="Your e-mail" variant="outlined" required fullWidth value={email} onChange={(e) => setEmail(e.target.value)}/>
            <TextField label="Your message" variant="outlined" required fullWidth multiline rows={4} value={message} onChange={(e) => setMessage(e.target.value)}/>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Stack>
        </Grid>
      </Grid>
      <Grid container spacing={4} sx={{ textAlign: "left", mt: 2 }}>
        <Grid item xs={12} md={3}>
          <Typography variant="h5">
            <Box component="span" sx={{ display: 'flex', alignItems: 'center' }}>
              <LocationOnIcon sx={{ mr: 1 }} color="primary"/> Address 
            </Box>
          </Typography>
          <Typography sx={{ ml: 4 }}>
            <span>Flat 5</span><br />
            <span>93 Station Road</span><br />
            <span>Redhill</span>
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h5">
            <Box component="span" sx={{ display: 'flex', alignItems: 'center' }}>
              <AccessTimeIcon sx={{ mr: 1 }} color="primary"/>Office Hours
            </Box>
          </Typography>
          <Typography sx={{ ml: 4 }}>
            <span>Monday - Friday</span><br />
            <span>9am to 6pm</span><br />
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h5">
            <Box component="span" sx={{ display: 'flex', alignItems: 'center' }}>
              <PhoneIcon sx={{ mr: 1 }} color="primary"/>Phone
            </Box>
          </Typography>
          <Typography sx={{ ml: 4 }}>
            <span>Number 1</span><br />
            <span>Number 2</span><br />
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h5">
            <Box component="span" sx={{ display: 'flex', alignItems: 'center' }}>
              <EmailIcon sx={{ mr: 1 }} color="primary"/>Email
            </Box>
          </Typography>
          <Typography sx={{ ml: 4 }}>
            <span>info@gmail.com</span><br />
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactUs;

