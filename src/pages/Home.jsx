import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import SportsCardSelector from "../components/SportsCardSelector";
import Register from "../components/Register";

const Home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <SportsCardSelector />
      <Register />
    </>
  );
};

export default Home;
