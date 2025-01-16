import { Stack } from "@mui/system"
import Banner from "../components/Banner"
import PricingCards from "../components/pricingCard/PricingCards.jsx";
import ClientMarquee from "../components/clientMarquee/ClientMarquee.jsx";
import GetAQuote from "../components/GetAQuote";

function Pricing() {
    return (
        <Stack>
            <Banner heading="Pricing" pageLink="/pricing"/>
            <PricingCards />
            <ClientMarquee />
            <GetAQuote />
        </Stack>
    )
}

export default Pricing;