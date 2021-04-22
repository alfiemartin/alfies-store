import React from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <img
          src="/storeLogo.png"
          alt="Alfie's Store"
          className={classes.logo}
          width={100}
        />
        <Typography variant="h6" className={classes.title}>
          Alfie
        </Typography>
        <IconButton>
          <ShoppingCart />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
