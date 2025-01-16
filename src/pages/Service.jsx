import { Grid, Stack } from "@mui/system";
import React from "react";
import Banner from "../components/service/ServiceBanner";
import { Card, CardContent, CardMedia } from "@mui/material";
import { service } from "../components/service/serviceData";
import { Services } from "../components/service/serviceData";

function Service() {
  return (
    <Stack component={"div"}>
      <Banner heading={"Service"} pageLink={"/service"} />
      <Grid container spacing={2} margin={"5px 5rem"}>
        <h1>Express Courier Export - Courier to Saudi</h1>
        <Grid item xs={12}>
          {service.map((item) => (
            <div key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <h3>{item.subheading}</h3>
              <p>{item.subdecription}</p>
            </div>
          ))}
        </Grid>

        <Grid container item spacing={5} xs={12}>
          {Services.map((data) => (
            <Grid item xs={12} size={{ xs: 12, sm: 4, md: 4 }}>
              <Card
                sx={{
                  width: "360px",
                  height: "450px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  marginBottom:"20px"
                }}
              >
                <CardMedia
                  component="img"
                  image={data.image}
                  alt={data.title}
                />
                <CardContent>
                  <h3>{data.title}</h3>
                  <p>{data.description}</p>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Stack>
  );
}

export default Service;
