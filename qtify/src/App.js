import React from "react";
import { NavBar } from "./components/Navbar/NavBar";
import HeroSection from "./components/Hero/Hero";

const App = () => {
  return (
    <div className="app">
      {/* Only the NavBar component */}
      <NavBar />
      <HeroSection />
      {/* No other app content */}
    </div>
  );
};

export default App;
