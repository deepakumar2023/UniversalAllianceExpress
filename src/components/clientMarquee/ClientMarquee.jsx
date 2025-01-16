import { Stack } from "@mui/system";
import { clientMarqueeData } from "./clientMarqueeData";
import Marquee from "react-fast-marquee";
import { Typography } from "@mui/material";

function ClientMarquee() {

    let settings = {
        direction: "left",
        speed: 50,
        pauseOnHover: true
    };

    return (
        <Stack sx={{ mb: "4rem", bgcolor: "#f2f2f2", py: "3rem" }}>
            <Typography variant='h5' fontSize={"1.6rem"} textAlign={"center"} fontWeight={"700"} color='#4d4e53' mb={"3rem"}>Our Clients</Typography>
            <Marquee {...settings}>
                {clientMarqueeData.map((client, i) => (
                    <img key={i} alt="error" src={client.image} style={{ width: "8rem", marginRight: "5rem" }} />
                ))}
            </Marquee>
        </Stack>
    );
};

export default ClientMarquee;