import { Box, Button, Container, Typography } from '@mui/material';
import { Grid, Stack } from '@mui/system';
import { featuresData } from './featuresData';
import { Link } from 'react-router-dom';

function Features() {
    return (
        <Stack sx={{ py: "3rem", fontFamily: "sans-serif", }}>
            <Container>
                <Typography variant='h5' fontSize={"2rem"} textAlign={"center"} fontWeight={"700"} color='#4d4e53' mb={".7rem"}>Explore Our Solutions</Typography>
                <Typography color='#4d4e53' textAlign={"center"}>We manage lead logistics for world renowned MNCs</Typography>
                <Grid container spacing={4} sx={{ py: "2.5rem" }}>
                    {
                        featuresData.map((ele, i) => (
                            <Grid
                                item="true"
                                size={{ xs: 12, sm: 6, md: 4 }}
                                key={i}
                                sx={{
                                    display: "flex",
                                    flexDirection: { xs: "column", sm: "row" },
                                    gap: { sm: "2rem" },
                                    alignItems: { xs: "center", sm: "flex-start" },
                                    // fontFamily: "sans-serif",
                                    p: { sm: "1rem" }
                                }}
                            >
                                <Typography color='#0d3f5f' fontSize="5rem">{ele.image}</Typography>
                                <Box textAlign={{ xs: "center", sm: "left" }}>
                                    <Typography sx={{ fontWeight: "700" }} fontSize="1.2rem">{ele.heading}</Typography>
                                    <Typography fontSize=".9rem" lineHeight="1.6rem" mt=".7rem" color="#666666" fontFamily="sans-serif">{ele.content}</Typography>
                                </Box>
                            </Grid>
                        ))
                    }
                </Grid>
                <Stack sx={{ alignItems: "center" }}>
                    <Link to={"/solutions"} aria-label='Read More'>
                        <Button
                            sx={{
                                textTransform: "capitalize",
                                bgcolor: "#0d3f5f"
                            }}
                            variant="contained"
                        >
                            Solutions
                        </Button>
                    </Link>
                </Stack>
            </Container>
        </Stack >
    )
}

export default Features;