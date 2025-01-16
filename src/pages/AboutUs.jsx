import Banner from "../components/Banner"
import { Stack } from "@mui/material";
import WhoWeAre from "../components/whoWeAre/WhoWeAre.jsx";
import WhyChooseUs from "../components/whyChooseUs/WhyChooseUs.jsx";
import ClientMarquee from "../components/clientMarquee/ClientMarquee.jsx";
import Features from "../components/features/Features.jsx";
import GetAQuote from "../components/GetAQuote.jsx"

function AboutUs() {
    return (
        <Stack>
            <Banner heading={"About Us"} pageLink={"/about"} />
            <WhoWeAre />
            <Features />
            <WhyChooseUs />
            <ClientMarquee />
            <GetAQuote />
        </Stack>
    )
}

export default AboutUs;