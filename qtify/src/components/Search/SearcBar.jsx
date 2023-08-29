// import React, { useState } from "react";
import { ReactComponent as SearchIcon } from "../../assets/searchIcon.svg";
import styles from "./SearchBar.module.css"; // Import the CSS module

const SearchBar = ({ placeholder, albumData }) => {
  //   const [searchValue, setSearchValue] = useState("");

  //   const handleSearchChange = (event) => {
  //     setSearchValue(event.target.value);
  //     // You can implement search logic here based on the input value
  //   };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement submit logic here if needed
  };

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <input
        className={styles.search}
        placeholder={placeholder}
        // onChange={handleSearch}
      />
      <button className={styles.searchButton} type="submit">
        <SearchIcon />
      </button>
    </form>
  );
};

export default SearchBar;
