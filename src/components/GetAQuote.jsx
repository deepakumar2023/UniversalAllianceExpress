import { Button, Container, Typography } from '@mui/material'

function GetAQuote() {
    return (
        <Container sx={{ mb: "4rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
            <Typography textAlign={"center"} fontSize={"1.2rem"}>Choose Universal Arabian Express and experience the difference that expertise, technology, and personalized service can make in optimizing your logistics and supply chain management.</Typography>
            <Button variant='outlined' color='#0d3f5f'>Get A Quote</Button>
        </Container>
    )
}

export default GetAQuote;