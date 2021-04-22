import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import React from "react";
import { Product } from "../index";
import useStyles from "./styles";

const products = [
  { id: 0, title: "Shio", description: "shoes", price: "£100" },
  { id: 1, title: "ps5", description: "playstation 5", price: "£1000" },
];

const Products = () => {
  const classes = useStyles();
  return (
    <Grid container justify="center" spacing={1} className={classes.root}>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Card>
          <CardMedia image={"/satanm.PNG"} className={classes.media} />
          <CardContent>
            <Typography>Hello world</Typography>
          </CardContent>
          <CardActions>
            <IconButton>
              <AddShoppingCart />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Products;
