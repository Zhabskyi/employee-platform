import { Grid, Typography } from "@mui/material";
import React from "react";

const Welcome: React.FC = () => {
  return (
    <Grid item>
      <Typography variant="h2" color="primary">
        Welcome
      </Typography>
      <Typography variant="h6" color="primary">
        First Name Last Name
      </Typography>
    </Grid>
  );
};

export default Welcome;
