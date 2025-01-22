import { Button, Container, Typography } from '@mui/material'

function GetAQuote() {
    return (
        <Container sx={{ mb: "4rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
            <Typography textAlign={"left"}  sx={{fontSize:{xs:"15px",sm:"17px"}}}>Choose Universal Arabian Express and experience the difference that expertise, technology, and personalized service can make in optimizing your logistics and supply chain management.</Typography>
            <Button variant='outlined'  sx={{background :"#EAAA00", color:"white"}}>Get A Quote</Button>
        </Container>
    )
}

export default GetAQuote;