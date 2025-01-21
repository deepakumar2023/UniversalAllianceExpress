import { Grid, Stack } from "@mui/system";
import React from "react";
import Banner from "../components/service/ServiceBanner";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { service } from "../components/service/serviceData";
import { Services } from "../components/service/serviceData";

function Service() {
  return (
    <Stack component={"div"}>
      <Banner heading={"Service"} pageLink={"/service"} />
      <Grid container spacing={2}  sx={{  margin: "10px 20px"}} >
        <Typography variant="h2" sx={{fontSize:{xs:"18px",sm:"26px",fontWeight:"700",marginTop:'20px'}}}>Express Courier Export - Courier to Saudi</Typography>
        <Grid item xs={12}>
          {service.map((item) => (
            <Stack key={item.id}>
              <Typography  variant="h3" sx={{fontSize:{xs:"16px",sm:"18px"},fontWeight:"600"}} >{item.title}</Typography> <br />
              <Typography sx={{fontSize:{xs:"14px",sm:"16px"}}}   >{item.description}</Typography> <br />
              <Typography variant="h3" sx={{fontSize:{xs:"16px",sm:"18px"},fontWeight:"600"}}>{item.subheading}</Typography>
              <br />
              <Typography  sx={{fontSize:{xs:"14px",sm:"16px"}}} >{item.subdecription}</Typography>
            </Stack>
          ))}
        </Grid>

        <Grid container item  xs={12}>
          {Services.map((data) => (
            <Grid item xs={12} size={{ xs: 12, sm: 4, md: 4 }}>
              <Card
                sx={{
                  // width: "360px",
                  maxHeight: "450px",
                  height:"450px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  marginBottom:"10px",
                }}
              >
                <CardMedia
                  component="img"
                  image={data.image}
                  alt={data.title}
                />
                <CardContent>
                  <Typography variant="h3" sx={{fontSize:{xs:"16px",sm:"18px"},fontWeight:'600'}}>{data.title}</Typography>
                  <Typography sx={{fontSize:{xs:"14px",sm:"14px"}}}>{data.description}</Typography>
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
