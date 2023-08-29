import React from "react";
import styles from "./Hero.module.css";
import headphone from "../../assets/hero-headphones.png";

const HeroSection = () => {
  return (
    <div className={styles.hero}>
      <div>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
        <p>Discover and enjoy unlimited music and podcasts on Qtify.</p>
        {/* <div className={styles.buttons}>
          <button className={styles.signupButton}>Sign Up</button>
          <button className={styles.loginButton}>Log In</button>
        </div> */}
      </div>
      <div>
        <img src={headphone} alt="headphone" width={212} />
      </div>
    </div>
  );
};

export default HeroSection;
