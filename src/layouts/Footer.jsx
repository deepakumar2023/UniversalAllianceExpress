import { Container, Typography, List, ListItem, Stack } from "@mui/material";
import { Grid } from "@mui/system";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";

const data = [
  "Fraud Awareness",
  "Legal Notice",
  "Terms of Use",
  "Privacy Notice",
  "Dispute Resolution",
  "Additional Information",
  "Cookie Settings",
];
const socialIcons = [
  <YouTubeIcon />,
  <FacebookIcon />,
  <LinkedInIcon />,
  <InstagramIcon />,
];

function Footer() {
  return (
    <Stack
      sx={{ bgcolor: "#101c4b", fontFamily: "sans-serif", color: "white" }}
    >
      <Container>
        <Grid container spacing={4} sx={{ pt: "2.5rem", pb: "1.5rem" }}>
          <Grid item="true" size={{ xs: 12, sm: 6, md: 9 }}>
            <Link to={"/"}>
              <Stack sx={{ width: "10rem", margin: "0rem 0rem 2rem 0rem" }}>
                <img src="/logo.png" alt="error" />
              </Stack>
            </Link>
            <List
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1.6rem",
                flexDirection: {
                  xs: "column",
                  sm: "row",
                },
              }}
            >
              {data.map((ele, i) => (
                <ListItem
                  key={i}
                  sx={{
                    p: "0rem",
                    width: "auto",
                    fontSize: ".9rem",
                    cursor: "pointer",
                  }}
                >
                  {ele}
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item="true" size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography sx={{ fontWeight: "700", color: "white" }}>
              Follow Us
            </Typography>
            <List sx={{ display: "flex", gap: "0" }}>
              {socialIcons.map((icon, i) => (
                <ListItem key={i} sx={{ p: "0", pr: "1rem", width: "auto" }}>
                  {icon}
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
        <Typography
          sx={{ mb: "1rem", borderTop: "1px solid white" }}
        ></Typography>
        <Typography sx={{ mb: "2rem", textAlign: "center" }}>
          2024 © - all rights reserved Logistics
        </Typography>
      </Container>
    </Stack>
  );
}

export default Footer;
