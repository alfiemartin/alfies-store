import React from "react";
import { Box, Container } from "@material-ui/core";
import { Cart, Navbar, Products } from "./components";

const App = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Products />
        <Cart />
      </Container>
    </>
  );
};

export default App;
