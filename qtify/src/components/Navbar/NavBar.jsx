import React from "react";
import { Button } from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/SearcBar";
import styles from "./Navbar.module.css";

export const NavBar = ({ albumData }) => {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <Search
        placeholder="Search a album of your choice"
        albumData={albumData}
      />
      <Button children={"Give Feedback"} />
    </nav>
  );
};
