import Hero from "./components/Hero/Hero";
import { NavBar } from "./components/Navbar/Navbar";
import { fetchTopAlbums, fetchNewAlbums, fetchSongs } from "./api/api";
import React, { useEffect, useState } from "react";
import Section from "./components/Section/Section";
import styles from "./App.module.css";
import FaqAccordion from "./components/Accordion/CustomAccordion";
// import SongPlayer from "./components/SongPlayer/SongPlayer";

function App() {
  const [topAlbumData, setTopAlbumData] = useState([]);
  const [newAlbumData, setNewAlbumData] = useState([]);
  const [songsData, setSongsData] = useState([]);
  const [filteredDataValues, setFilteredDataValues] = useState([]);
  /* By default at zero index for all songs  */
  const [value, setValue] = useState(0);
  const [allAlbumData, setAllAlbumData] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const generateTopAlbumData = async () => {
    try {
      const data = await fetchTopAlbums();
      setTopAlbumData(data);
    } catch (error) {
      console.log(error);
    }
  };
  const generateNewAlbumData = async () => {
    try {
      const newAlbum = await fetchNewAlbums();
      setNewAlbumData(newAlbum);
    } catch (error) {
      throw new Error(error);
    }
  };
  const generateAllSongsData = async () => {
    try {
      const song = await fetchSongs();
      setSongsData(song);
      setFilteredDataValues(song);
    } catch (error) {
      console.log(error);
    }
  };

  const generateSongsData = async (value) => {
    let key;
    if (value === 0) {
      filteredData(songsData);
      return;
    } else if (value === 1) {
      key = "rock";
    } else if (value === 2) {
      key = "pop";
    } else if (value === 3) {
      key = "jazz";
    } else if (value === 4) {
      key = "blues";
    }
    const res = songsData.filter((item) => item.genre.key === key);
    filteredData(res);
  };

  const filteredData = (val) => {
    setFilteredDataValues(val);
  };

  useEffect(() => {
    generateTopAlbumData();
    generateNewAlbumData();
    generateAllSongsData();
  }, []);
  useEffect(() => {
    generateSongsData(value);
  }, [value]);

  return (
    <>
      <NavBar albumData={[...topAlbumData, ...newAlbumData]} />
      <Hero />
      <div className={styles.sectionWrapper}>
        <Section
          data={topAlbumData}
          type="album"
          title="Top Album"
          filteredDataValues={topAlbumData}
        />
        <Section
          data={newAlbumData}
          type="album"
          title="New Albums"
          filteredDataValues={newAlbumData}
        />
        <Section
          data={songsData}
          type="song"
          title="Songs"
          filteredDataValues={filteredDataValues}
          value={value}
          handleChange={handleChange}
        />
      </div>
      <FaqAccordion />
      {/* <SongPlayer /> */}
    </>
  );
}

export default App;
