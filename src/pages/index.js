import React from "react";
import FooterPage from "../components/Footer/FooterPage";
import "../style/index.css";

const Home = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}
      >
        <h1>Home</h1>
      </div>
      <FooterPage />
    </>
  );
};

export default Home;
