import { Container, Stack, Typography } from "@mui/material";
import { transportServicesData } from "./transportServicesData";
import { Box, Grid } from "@mui/system";

function TransportServices() {
    return (
        <Stack sx={{ py: "3rem", fontFamily: "sans-serif" }}>
            <Container>
                <Typography color="#0d3f5f" fontWeight={"bold"} fontSize={"1.8rem"} textAlign={"center"}>Our Transport Service Solutions:</Typography>
                <Grid container spacing={4} sx={{ py: "4rem" }}>
                    {
                        transportServicesData.map((data, i) => (
                            <Grid
                                item="true"
                                size={{ xs: 12, sm: 6, md: 4 }}
                                key={i}
                                sx={{ border: "1px solid #e9e9e9", p: "1rem" }}
                            >
                                <Box
                                    sx={{
                                        width: "100%",
                                        height: "200px",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <img
                                        src={data.image}
                                        alt={data.heading}
                                        style={{
                                            maxWidth: "100%",
                                            height: "200px",
                                            objectFit: "cover",
                                            width:"100%"
                                        }}
                                    />
                                </Box>
                                <Typography fontWeight={"bold"} fontSize={"1.2rem"} textAlign={"center"} m={"1rem 0"}>{data.heading}</Typography>
                                <Typography sx={{ fontWeight: "700", color: "#0d3f5f", fontSize: "1rem" }} >{data.Slogan}</Typography>
                                <Typography fontSize=".9rem" lineHeight="1.6rem" mt=".7rem" color="#666666" fontFamily="sans-serif">{data.Description}</Typography>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </Stack>
    )
}

export default TransportServices;