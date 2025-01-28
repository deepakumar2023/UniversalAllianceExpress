import React, { useState } from "react";
import Banner from "../components/Banner";
import { Box, Grid, Stack } from "@mui/system";
import emailjs from "emailjs-com";
import {
  Button,
  Card,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    requirement: "",
    message: "",
  });

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    if (!formData.firstName || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    // Send email via EmailJS
    emailjs
      .send(
        "service_4vsek7k", // Your Service ID
        "template_s8q8pxf", // Correct Template ID from the EmailJS dashboard
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          mobile: formData.mobile,
          requirement: formData.requirement,
          message: formData.message,
        },
        "gbgxL1Q9FqWmhnjot" // Your Public Key
      )
      .then(
        (response) => {
          console.log(
            "Email sent successfully!",
            response.status,
            response.text
          );
          alert("Message sent successfully!");

          // Reset form data
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            mobile: "",
            requirement: "",
            message: "",
          });
        },
        (error) => {
          console.error("Error sending email:", error);
          alert("Failed to send the message. Please try again.");
        }
      )
      .catch((error) => {
        console.error("Network or email service error:", error);
        alert("Failed to send the message. Please try again.");
      });
  };

  return (
    <Stack component={"div"}>
      <Banner heading={"Contact"} pageLink={"/contact"} />

      <Box sx={{ padding: "1rem", maxWidth: "100%", margin: "auto" }}>
        <form onSubmit={handleSubmit}>
          <Card elevation={4} sx={{ padding: "2rem" }}>
            <Grid container spacing={4}>
              {/* Left Section */}
              <Grid
                item
                size={{ xs: 12, md: 5 }}
                sx={{
                  display: "inline-grid",
                  justifyContent: { xs: "left", sm: "center" },
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", color: "#eaaa00", mb: 2 }}
                >
                  OFFICE In Dubai
                </Typography>
                <Box>
                  <Typography
                    component={"div"}
                    gutterBottom
                    sx={{ display: "flex" }}
                  >
                    <span style={{ color: "#eaaa00" }}>
                      <LocationOnIcon />
                    </span>
                    <strong style={{ fontSize: "18px" }}>Location</strong>
                  </Typography>
                  <Typography
                    variant="body2"
                    gutterBottom
                    sx={{ fontSize: "16px" }}
                  >
                    Al Warsan- Office number - S09, Dubai , <br />
                    United Arab Emirates <br />
                  </Typography>

                  <Typography
                    variant="body1"
                    gutterBottom
                    sx={{ mt: 2, display: "flex" }}
                  >
                    <span style={{ color: "#eaaa00" }}>
                      <PhoneAndroidIcon />
                    </span>
                    <strong style={{ fontSize: "18px" }}>Phone</strong>
                  </Typography>
                  <Typography
                    variant="body2"
                    gutterBottom
                    sx={{ fontSize: "16px" }}
                  >
                    +971 55 654 0154
                  </Typography>

                  <Typography
                    variant="body1"
                    gutterBottom
                    sx={{ mt: 2, display: "flex" }}
                  >
                    <span style={{ display: "flex", color: "#eaaa00" }}>
                      <MarkEmailUnreadIcon />
                    </span>
                    <strong style={{ fontSize: "18px" }}>Email</strong>
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: "16px" }}>
                    info@universalallianceexpress.com
                  </Typography>
                </Box>
              </Grid>

              {/* Right Section */}
              <Grid item size={{ xs: 12, md: 7 }}>
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                  CONTACT US
                </Typography>
                <Grid container spacing={2}>
                  <Grid item size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      name="firstName"
                      label="First Name"
                      variant="outlined"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      name="lastName"
                      label="Last Name"
                      variant="outlined"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      name="email"
                      label="Email"
                      type="email"
                      variant="outlined"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      name="mobile"
                      label="Mobile Number"
                      type="tel"
                      variant="outlined"
                      value={formData.mobile}
                      onChange={handleChange}
                      InputProps={{
                        startAdornment: (
                          <Typography sx={{ mr: 1 }}>+91</Typography>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item size={{ xs: 12, sm: 6 }}>
                    <FormControl fullWidth required>
                      <InputLabel>Requirement</InputLabel>
                      <Select
                        name="requirement"
                        value={formData.requirement}
                        onChange={handleChange}
                      >
                        <MenuItem value="General Inquiry">
                          General Inquiry
                        </MenuItem>
                        <MenuItem value="Logistics Support">
                          Logistics Support
                        </MenuItem>
                        <MenuItem value="Others">Others</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      name="message"
                      label="Message here..."
                      multiline
                      rows={1}
                      variant="outlined"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item size={{ xs: 12, sm: 5 }}>
                    <Button
                      fullWidth
                      variant="contained"
                      color="warning"
                      type="submit"
                      size="large"
                      sx={{ background: "#eaaa00" }}
                    >
                      Send Your Message
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </form>
      </Box>

      <Box sx={{ margin: "20px" }}>
        <iframe
          src="https://www.google.com/maps?q=25.2600410,55.2901700&z=15&output=embed"
          width="100%"
          height="320"
          aria-hidden="false"
          title="Google Map"
        ></iframe>
      </Box>
    </Stack>
  );
}

export default Contact;
