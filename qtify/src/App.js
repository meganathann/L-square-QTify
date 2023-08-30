import React, { useEffect, useState } from "react";
import { NavBar } from "./components/Navbar/Navbar"; // Note the correct casing

import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import { fetchTopAlbums } from "./api/api";
import styles from "./App.module.css";

function App() {
  const [topAlbumData, setTopAlbumData] = useState([]);

  const generateTopAlbumData = async () => {
    try {
      const data = await fetchTopAlbums();
      setTopAlbumData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    generateTopAlbumData();
  }, []);

  return (
    <div className={styles.app}>
      <NavBar />
      <Hero />
      <div className={styles.sectionWrapper}>
        <Section data={topAlbumData} type="album" title="Top Album" />
      </div>
    </div>
  );
}

export default App;
