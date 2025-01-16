import { Container, Stack, Typography } from "@mui/material";
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';


const contactData = [<PhoneRoundedIcon sx={{ fontSize: "1rem" }} />, <WhatsAppIcon sx={{ fontSize: "1rem" }} />, <FacebookOutlinedIcon sx={{ fontSize: "1rem" }} />, <InstagramIcon sx={{ fontSize: "1rem" }} />, <LinkedInIcon sx={{ fontSize: "1rem" }} />, <XIcon sx={{ fontSize: "1rem" }} />, <YouTubeIcon sx={{ fontSize: "1rem" }} />]

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
                <Stack sx={{ flexDirection: "row", justifyContent: "flex-end", gap: ".5rem" }}>
                    {
                        contactData.map((data, i) => (
                            <Stack sx={{ alignItems: "center", flexDirection: "row", gap: ".3rem" }} key={i} >
                                <Stack
                                    color={"white"}
                                    borderRadius={"50%"}
                                    border={"1px solid white"}
                                    p={".3rem"}
                                >{data}</Stack>
                                <Typography sx={{ display: i !== 0 && "none", color: "white" }}>+971 4 521 6555</Typography>
                            </Stack>
                        ))
                    }
                </Stack>
            </Container>
        </Stack>
    )
}

export default HeaderContact;