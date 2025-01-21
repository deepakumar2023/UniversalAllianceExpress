import { Container, Typography } from "@mui/material";
import { Grid, Stack } from "@mui/system";
import { whoWeAreData } from "./whoWeAreData";

function WhoWeAre() {
    return (
        <Stack py={"5rem"}>
            <Container>
                <Grid container spacing={4} height={"100%"}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <img
                            src="/aboutUs.jpg"
                            alt="error"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                        />
                    </Grid>
                    <Grid container spacing={2} size={{ xs: 12, md: 6 }}>
                        <Typography variant='h2'  sx={{fontSize:{xs:"22px",sm:"26px"},fontWeight:"700",color:'#4d4e53'}}>Who we are</Typography>
                        {
                            whoWeAreData.map((data, i) => (
                                <Grid item key={i}>
                                    <Typography sx={{fontSize:{xs:"14px",sm:"15px"}}} >{data}</Typography>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Grid>
            </Container>
        </Stack>
    )
}

export default WhoWeAre;