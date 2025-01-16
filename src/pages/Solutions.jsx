import { Stack } from "@mui/material"
import Banner from "../components/Banner"
import TransportServices from "../components/transportServices/TransportServices"
import OurVerticals from "../components/ourVerticals/OurVerticals"
import FreightSolutions from "../components/freightSolutions/FreightSolutions"
import ClientMarquee from "../components/clientMarquee/ClientMarquee"
import GetAQuote from "../components/GetAQuote"

function Solutions() {
  return (
    <Stack>
      <Banner heading={"Solutions"} pageLink="/solutions" />
      <TransportServices />
      <OurVerticals />
      <FreightSolutions />
      <ClientMarquee />
      <GetAQuote />
    </Stack>
  )
}
 
export default Solutions