import { Button, Container, Typography } from '@mui/material'
import { Link } from 'react-router-dom';

function GetAQuote() {
    return (
        <Container sx={{ mb: "4rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
            <Typography textAlign={"left"}  sx={{fontSize:{xs:"15px",sm:"17px"}}}>Choose Universal Alliance Express and experience the difference that expertise, technology, and personalized service can make in optimizing your logistics and supply chain management.</Typography>
         <Link  to={"/contact"}>  <Button variant='outlined'  sx={{background :"#EAAA00", color:"white"}}>Get A Quote</Button></Link> 
        </Container>
    )
}

export default GetAQuote;