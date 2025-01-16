import { CircularProgress, Box } from "@mui/material";

function Loader() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                backgroundColor: "#f9f9f9"
            }}
        >
            <CircularProgress size={60} thickness={6} sx={{ color: "#0d3f5f" }} />
        </Box>
    );
}

export default Loader