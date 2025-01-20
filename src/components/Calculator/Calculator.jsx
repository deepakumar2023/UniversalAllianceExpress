import { Box, Grid, Stack } from "@mui/system";
import React, { useState } from "react";
import Banner from "../Banner";
import { Button, TextField, Typography } from "@mui/material";

function Calculator() {
  const [distance, setDistance] = useState("");
  const [weight, setWeight] = useState("");
  const [price, setPrice] = useState(null);

  const [distanceError, setDistanceError] = useState("");
  const [weightError, setWeightError] = useState("");

  const calculatePrice = () => {
    let hasError = false;

    // Validate Distance
    if (!distance || isNaN(distance) || Number(distance) < 0) {
      setDistanceError("Please enter a valid distance");
      hasError = true;
    } else {
      setDistanceError(""); // Clear the error if valid
    }

    // Validate Weight
    if (!weight || isNaN(weight) || Number(weight) < 0) {
      setWeightError("Please enter a valid weight");
      hasError = true;
    } else {
      setWeightError(""); // Clear the error if valid
    }

    if (hasError) return;

    // Calculate price if no errors
    const distancePrice = Number(distance) * 10;
    const weightPrice = Number(weight) * 10;
    setPrice(distancePrice + weightPrice);
  }; 


  return (
    <Stack component={"div"}>
      <Banner heading={"Calculator"} pageLink={"/calculator"} />
      <Grid
      spacing={3}
        container
        sx={{
          padding: 2,
          maxWidth: "100%",
        }}
      >
        <Grid item  size={{xs:12,sm:3,md:4}}>
          <TextField
            label="Distance (km)"
            variant="outlined"
            type="number"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            fullWidth
            error={!!distanceError} // Show red outline if error exists
            helperText={distanceError} // Display the error message below the field
          />
        </Grid>

        <Grid item  size={{xs:12,sm:3,md:4}}>
          <TextField
            label="Weight (kg)"
            variant="outlined"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            fullWidth
            error={!!weightError} 
            helperText={weightError} 
          />
        </Grid>

        <Grid item size={{xs:12,sm:3,md:4}} sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <Button
            variant="contained"
            color="primary"
            onClick={calculatePrice}
            sx={{bgcolor: "#EAAA00"}}
            fullWidth
          >
            Calculate Price
          </Button>
        </Grid>

      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {price !== null && (
          <Typography variant="h6" color="success.main">
            Final Price: ₹{price}
          </Typography>
        )}
      </Box>
    </Stack>
  );
}

export default Calculator;
