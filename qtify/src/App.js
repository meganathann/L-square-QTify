import React from "react";
import { NavBar } from "./components/Navbar/NavBar";

const App = () => {
  return (
    <div className="app">
      {/* Only the NavBar component */}
      <NavBar />

      {/* No other app content */}
    </div>
  );
};

export default App;
