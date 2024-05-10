import React from "react";
import Header from "../components/Homepage/Header";
import "../styles/Homepage/Home.css";
import Center from "../components/Homepage/center/Center";
import Bottom from "../components/Homepage/Bottom";
import Footer from "../components/Homepage/Footer";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Center />
      <Bottom />
      <Footer />
    </div>
  );
};

export default Home;
