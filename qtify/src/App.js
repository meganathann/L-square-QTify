import React from "react";
import { NavBar } from "./components/Navbar/NavBar";
import HeroSection from "./components/Hero/Hero";
import Card from "./components/Card/Card";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <HeroSection />
      <Card
        likes={100}
        title="New Bollywood"
        image="https://via.placeholder.com/159x170"
      />
      {/* Other app content */}
    </div>
  );
};

export default App;
