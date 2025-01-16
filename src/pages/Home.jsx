import { Stack } from '@mui/material'
import Features from '../components/features/Features.jsx';
import HomeBanner from '../components/HomeBanner.jsx';
import OurVerticals from '../components/ourVerticals/OurVerticals.jsx';
import WhyChooseUs from '../components/whyChooseUs/WhyChooseUs.jsx';
import GetAQuote from '../components/GetAQuote.jsx';
import ClientMarquee from '../components/clientMarquee/ClientMarquee.jsx';

function Home() {
    return (
        <Stack>
            <HomeBanner />
            <Features />
            <OurVerticals />
            <WhyChooseUs />
            <ClientMarquee />
            <GetAQuote />
        </Stack>
    )
}

export default Home;