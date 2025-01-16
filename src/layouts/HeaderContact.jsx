import { Container, Stack, Typography } from "@mui/material";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";

const contactData = [
  {
    type: "phone",
    icon: <PhoneRoundedIcon sx={{ fontSize: "1rem" }} />,
    link: "tel:+1234567890",
  },
  {
    type: "whatsapp",
    icon: <WhatsAppIcon sx={{ fontSize: "1rem" }} />,
    link: "https://wa.me/1234567890?text=Hello%20there!",
  },
  {
    type: "facebook",
    icon: <FacebookOutlinedIcon sx={{ fontSize: "1rem" }} />,
    link: "https://www.facebook.com/yourprofile",
  },
  {
    type: "instagram",
    icon: <InstagramIcon sx={{ fontSize: "1rem" }} />,
    link: "https://www.instagram.com/yourprofile", 
  },
  {
    type: "linkedin",
    icon: <LinkedInIcon sx={{ fontSize: "1rem" }} />,
    link: "https://www.linkedin.com/in/yourprofile",
  },
  {
    type: "x",
    icon: <XIcon sx={{ fontSize: "1rem" }} />,
    link: "https://www.x.com/yourprofile", 
  },
  {
    type: "youtube",
    icon: <YouTubeIcon sx={{ fontSize: "1rem" }} />,
    link: "https://www.youtube.com/c/yourchannel", 
  },
];

function HeaderContact() {
  return (
    <Stack
      sx={{
        bgcolor: "#101c4b",
        py: ".7rem",
        position: "sticky",
        top: "0",
        boxShadow: "none",
        display: { xs: "none", sm: "flex" },
      }}
    >
      <Container>
        <Stack
          sx={{
            flexDirection: "row",
            justifyContent: "flex-end",
            gap: ".5rem",
          }}
        >
          {contactData.map((contact, i) => (
            <Stack
              sx={{ alignItems: "center", flexDirection: "row", gap: ".3rem" }}
              key={i}
            >
              <Stack
                color={"white"}
                borderRadius={"50%"}
                border={"1px solid white"}
                p={".3rem"}
              >
                <a
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{color:'white'}}
                >
                  {contact.icon}
                </a>
              </Stack>
              <Typography sx={{ display: i !== 0 && "none", color: "white" }}>
                +971 4 521 6555
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Container>
    </Stack>
  );
}

export default HeaderContact;
