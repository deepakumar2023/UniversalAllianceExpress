import { Container, Stack, Typography } from "@mui/material";
import { WhyChooseUsData } from "./whyChooseUsData";
import { Grid } from "@mui/system";

function WhyChooseUs() {
  return (
    <Stack sx={{ py: "5rem" }}>
      <Container>
        <Typography
          variant="h3"
          mb={".7rem"}
          sx={{
            fontSize: { xs: "24px", sm: "26px" },
            fontWeight: "700",
            color: "#4d4e53",
          }}
        >
          Why Choose Universal Arabian Express?
        </Typography>
        <Typography
          sx={{ fontSize: { xs: "14px", sm: "16px" }, color: "#4d4e53" }}
        >
          At Universal Arabian Express, we are committed to providing
          world-class logistics and transportation solutions tailored to meet
          the diverse needs of businesses across industries. Here's why you
          should choose us as your trusted logistics partner:
        </Typography>
        <Grid container spacing={4} sx={{ py: "4rem" }}>
          {WhyChooseUsData.map((data, i) => (
            <Grid
              item="true"
              size={{ xs: 12, sm: 6, md: 4 }}
              key={i}
              sx={{
                border: "3px dashed #b9e3f5",
                borderRadius: "1rem",
                p: "1rem",
              }}
            >
              <Typography color="#0d3f5f" fontSize="3rem" textAlign={"center"}>
                {data.icon}
              </Typography>
              <Typography
                sx={{
                  fontWeight: "700",
                  color: "#0d3f5f",
                  textAlign: "center",
                   fontSize:{xs:"18px",sm:"20px"}
                }}
               
              >
                {data.heading}
              </Typography>
              <Typography
                fontSize=".9rem"
                lineHeight="1.6rem"
                mt=".7rem"
                color="#666666"

                sx={{fontSize:{xs:"14px",sm:"15px"}}}
              >
                {data.content}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Stack>
  );
}

export default WhyChooseUs;
