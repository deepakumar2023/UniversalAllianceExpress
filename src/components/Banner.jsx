import { Container, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Banner({ heading, pageLink }) {
    return (
        <Stack sx={{ position: "relative", borderBottom: ".2rem solid #1976d2" }}>
            <Stack
                sx={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top right, rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.56))",
                    opacity: 0.7,
                }}
            />
            <img
                src="/banner.jpg"
                alt="Banner"
                style={{
                    height: "15rem",
                    width: "100%",
                    objectFit: "cover",
                    filter: "brightness(50%)",
                }}
            />
            <Stack
                sx={{
                    position: "absolute",
                    inset: 0,
                    justifyContent: "center",
                }}
            >
                <Container>
                    <Typography
                        sx={{
                            fontWeight: "bold",
                            fontSize: "2.5rem",
                            color: "white",
                        }}
                    >
                        {heading}
                    </Typography>
                    <Typography sx={{
                        fontSize: "1.1rem",
                        color: "white",
                    }}><Link to="/" style={{ textDecoration: "none", color: "white" }}>Home</Link> / <Link to={pageLink} style={{ textDecoration: "none", color: "white" }}>{heading}</Link></Typography>
                </Container>
            </Stack>
        </Stack>
    );
}

export default Banner;