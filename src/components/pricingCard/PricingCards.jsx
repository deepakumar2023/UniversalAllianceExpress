import { Grid } from "@mui/system";
import { Typography, Stack, Container, Button, Divider } from "@mui/material";
import { pricingData } from "./PricingData";
import { Icon } from "@iconify/react";
// charm:tick

function PricingCards() {
  return (
    <Stack sx={{ py: "5rem", fontFamily: "sans-serif" }}>
      <Container>
        <Typography
          variant="h5"
          fontSize={"1.6rem"}
          fontWeight={"700"}
          color="#4d4e53"
          mb={".7rem"}
        >
          Why Choose Universal Arabian Express?
        </Typography>
        <Typography color="#4d4e53">
          At Universal Arabian Express, we are committed to providing
          world-class logistics and transportation solutions tailored to meet
          the diverse needs of businesses across industries. Here's why you
          should choose us as your trusted logistics partner:
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 0 }}
          sx={{ py: "4rem", display: "flex", justifyContent: "center" }}
        >
          {pricingData.map((data, i) => (
            <Grid
              item="true"
              size={{ xs: 12, sm: 5, md: 4 }}
              key={i}
              sx={{
                width: "350px",
                border: { xs: i === 1 && "3px dashed #b9e3f5", md: "none" },
                bgcolor: i !== 1 && "#f3fbfe",
                borderRadius: "2rem",
                p: "3rem",
                display: "flex",
                flexDirection: "column",
                gap: ".7rem",
                position: "relative",
                zIndex: i === 1 ? 1 : 0,
                boxShadow: {
                  md:
                    i === 1 &&
                    "8px 8px 20px rgba(0, 0, 0, 0.2), -8px 8px 20px rgba(0, 0, 0, 0.1)",
                },
              }}
            >
              <Typography color="#0d3f5f" fontWeight="700" fontSize={"1.5rem"}>
                {data.type}
              </Typography>
              <Typography
                fontSize=".9rem"
                lineHeight="1.6rem"
                mt=".7rem"
                color="#666666"
              >
                {data.content}
              </Typography>
              <Typography color="#0d3f5f" fontWeight="700" fontSize="1.2rem">
                {data.amount}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  textTransform: "capitalize",
                  borderRadius: "5rem",
                  boxShadow: "none",
                  bgcolor: "#0d3f5f",
                  // px: "2rem",
                  py: ".5rem",
                  width: "8.5rem",
                }}
              >
                Let's Start
              </Button>
              <Stack>
                <Typography mb={".5rem"}>Features:</Typography>
                {data.features.map((features) => (
                  <Stack
                    sx={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: ".9rem",
                    }}
                  >
                    <Icon icon={"radix-icons:dot-filled"} />
                    <Typography>{features}</Typography>
                  </Stack>
                ))}
              </Stack>
              <Divider sx={{ border: "1px solid #e2e1e1" }} />
              <Stack>
                <Typography mb={".5rem"}>key Features:</Typography>
                {data.keyFeatures.map((keyFeatures) => (
                  <Stack
                    sx={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: ".9rem",
                    }}
                  >
                    <Icon icon={"charm:tick"} />
                    <Typography>{keyFeatures}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Stack>
  );
}

export default PricingCards;
