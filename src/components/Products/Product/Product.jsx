import { Card, Grid, Typography } from "@material-ui/core";
import React from "react";

const Product = ({ product }) => {
  return (
    <Grid container item spacing={2}>
      <Card>
        <Typography>{product.name}</Typography>
      </Card>
    </Grid>
  );
};

export default Product;
