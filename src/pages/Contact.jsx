import React from 'react'
import Banner from '../components/Banner'
import { Box, Grid, Stack } from '@mui/system'
import { Button, Card, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Contact() {
  return (

    <Stack component={'div'} >
    <Banner heading={"Contact"} pageLink={"/contact"} />

      <Box sx={{ padding: "1rem", maxWidth: "100%", margin: "auto" }}>
        <Card elevation={4} sx={{ padding: "2rem" }}>
          <Grid container spacing={4}>
            {/* Left Section */}
            <Grid item size={{xs:12, md:5}} sx={{display:"inline-grid",justifyContent:{xs:'left',sm:"center"}}}>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", color: "#ff5722", mb: 2 }}
              >
                OFFICE IN India
              </Typography>
              <Box  >
                <Typography component={'div'}  gutterBottom sx={{display:"flex" }}>
                <span  style={{color:'orange'}}><LocationOnIcon/></span>
                  <strong style={{fontSize:"18px"}}>Location</strong>
                </Typography>
                <Typography variant="body2" gutterBottom sx={{fontSize:"16px"}}>
                  Universal Logistics <br />
                  Airport Road, PO Box: 32309 <br />
                  Saudi Arabia
                </Typography>

                <Typography variant="body1" gutterBottom sx={{ mt: 2,display:"flex" }}>
                    <span  style={{color:'orange'}}><PhoneAndroidIcon/></span>
                  <strong style={{fontSize:"18px"}}>Phone</strong>
                </Typography>
                <Typography variant="body2" gutterBottom sx={{fontSize:"16px"}}>
                +971 55 654 0154
                </Typography>

                <Typography variant="body1" gutterBottom sx={{ mt: 2,display:"flex"}}>
                   <span style={{display:'flex',color:'orange'}}><MarkEmailUnreadIcon/></span>
                  <strong style={{fontSize:"18px"}}>Email</strong>
                </Typography>
                <Typography variant="body2" sx={{fontSize:"16px"}}>Universal@gmail.com</Typography>
              </Box>
            </Grid>

            {/* Right Section */}
            <Grid item size={{xs:12, md:7}}>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", mb: 2 }}
              >
                CONTACT US
              </Typography>
              <Grid container spacing={2}>
                <Grid item size={{xs:12,sm:6}}>
                  <TextField
                    fullWidth
                    label="First Name"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item size={{xs:12,sm:6}}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item size={{xs:12,sm:6}}>
                  <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item size={{xs:12,sm:6}}>
                  <TextField
                    fullWidth
                    label="Mobile Number"
                    type="tel"
                    variant="outlined"
                    required
                    InputProps={{
                      startAdornment: (
                        <Typography sx={{ mr: 1 }}>+91</Typography>
                      ),
                    }}
                  />
                </Grid>
                <Grid item size={{xs:12,sm:6}}>
                  <FormControl fullWidth required>
                    <InputLabel>Requirement</InputLabel>
                    <Select variant="outlined">
                      <MenuItem value="General Inquiry">General Inquiry</MenuItem>
                      <MenuItem value="Logistics Support">
                        Logistics Support
                      </MenuItem>
                      <MenuItem value="Others">Others</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item size={{xs:12,sm:6}}>
                  <TextField
                    fullWidth
                    label="Message here..."
                    multiline
                    rows={1}
                    variant="outlined"
                  />
                </Grid>
                <Grid item size={{xs:12,sm:5}}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="warning"
                    size="large"
                    sx={{background:"#101c4b"}}
                  >
                    Send Your Message
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Box>

      <Box sx={{ margin: "20px", }}>
        <iframe
        
  src="https://www.google.com/maps?q=28.607689813781093,77.35534764883654&z=15&output=embed"
          width="100%" height="320" aria-hidden="false" title="Google Map"
        />

      </Box>


    </Stack>
  )
}

export default Contact