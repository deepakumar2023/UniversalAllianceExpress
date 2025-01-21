import { Box, Container, Stack, Typography } from "@mui/material"
import { Grid } from "@mui/system";
import { verticalsData } from "./VerticalsData";

function OurVerticals() {
    return (
        <Stack sx={{ py: "5rem", bgcolor: "#f2f2f2", color: "#666666" }}>
            <Container>
                <Grid container spacing={10}>
                    {
                        verticalsData.map((data, i) => (
                            <Grid
                                item="true"
                                size={{ xs: 12, md: 6 }}
                                key={i}
                                sx={{ display: "flex", gap: "1rem",}}
                            >
                                <Box>
                                    <Typography sx={{ fontWeight: "700", fontSize: "1.5rem", mb: ".7rem", color: "#EAAA00",display:'flex',gap:"10px" ,alignItems:'center'}} >
                                         <Typography component={'span'}  sx={{
                                        bgcolor: "white",
                                        height: "40px",
                                        color:'#1976d2',
                                        width: { xs: "40px", sm: "40px" },
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        borderRadius: ".5rem",
                                        
                                    }} >{data.icon}</Typography> <Typography variant="h2" sx={{ fontWeight: "700",fontSize:{xs:"18px",sm:"20px"}}}> {data.heading} </Typography> </Typography>
                                    <Typography fontSize="1rem" lineHeight="1.3rem" textAlign={"justify"} sx={{fontSize:{xs:"14px",sm:"16px"}}}>{data.content}</Typography>
                                </Box>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </Stack>
    )
}

export default OurVerticals;