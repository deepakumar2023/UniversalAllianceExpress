import { Container, Stack, Typography } from "@mui/material";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import MarkEmailUnreadOutlinedIcon from "@mui/icons-material/MarkEmailUnreadOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";

const contactData = [
  {
    type: "phone",
    icon: <PhoneRoundedIcon sx={{ fontSize: "1rem" }} />,
    link: "tel:+971 2505173",
  },

  {
    link: "mailto:Info@universalallianceexpress.com",
    icon: <MarkEmailUnreadOutlinedIcon sx={{ fontSize: "1rem" }} />,
  },
  {
    type: "whatsapp",
    icon: <WhatsAppIcon sx={{ fontSize: "1rem" }} />,
    link: "https://wa.me/+971556540154?text=Hello%20User!",
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
                  style={{ color: "white" }}
                >
                  {contact.icon}
                </a>
              </Stack>
              <Typography sx={{ display: i !== 0 && "none", color: "white" }}>
              +971 2505173
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Container>
    </Stack>
  );
}

export default HeaderContact;
