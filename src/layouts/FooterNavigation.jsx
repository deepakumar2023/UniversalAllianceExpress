import { Typography, Container, List, ListItem, Stack } from "@mui/material";
import { layoutData } from "./layoutData";
import { Grid } from "@mui/system";

import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function FooterNavigation() {
  const socialIcons = [
    { link: "https://www.youtube.com", icon: <YouTubeIcon /> },
    { link: "https://www.facebook.com", icon: <FacebookIcon /> },
    { link: "https://www.linkedin.com", icon: <LinkedInIcon /> },
    { link: "https://www.instagram.com", icon: <InstagramIcon /> },
    {

      icon: <WhatsAppIcon />,
      link: "https://wa.me/+971556540154?text=Hello%20User!",
    },
  ];

  return (
    <Stack sx={{ borderTop: "1px solid #e0dede", bgcolor: "#101c4b" }}>
      <Container>
        <Grid container spacing={4} sx={{ py: "2.5rem" }}>
          {layoutData.map((section, i) =>
            Object.keys(section).map((title, index) => (
              <Grid
                item="true"
                size={{ xs: 12, sm: 6, md: 3 }}
                key={title}
                sx={{ fontFamily: "sans-serif" }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    mb: 2.7,
                    fontWeight: "700",
                    fontSize: "1rem",
                    color: "#ffff",
                  }}
                >
                  {title}
                </Typography>
                <List
                  disablePadding
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.3rem",
                  }}
                >
                  {section[title]?.map((item, idx) => (
                    <ListItem
                      key={item}
                      sx={{
                        p: 0,
                        color: "#ffff",
                        fontSize: ".9rem",
                        cursor: "pointer",
                      }}
                    >
                      {item}
                    </ListItem>
                  ))}
                </List>
              </Grid>
            ))
          )}

          <Grid item="true" size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography sx={{ fontWeight: "700", color: "white" }}>
              Follow Us
            </Typography>
            <List sx={{ display: "flex", gap: "0" }}>
              {socialIcons.map((social, i) => (
                <ListItem
                  key={i}
                  sx={{ p: "0", pr: "1rem", width: "auto", color: "white" }}
                >
                  <a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  <p style={{color:'white'}}> {social.icon} </p>  
                  </a>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>

        <Typography
          sx={{ mb: "1rem", borderTop: "1px solid white" }}
        ></Typography>
        <Typography sx={{ mb: "2rem", textAlign: "center", color: "#ffff" }}>
          2024 © - all rights reserved Logistics
        </Typography>
      </Container>
    </Stack>
  );
}

export default FooterNavigation;
