import React from "react";
import Header from "../components/common/Header";
import styles from "./styles/home.module.css";

function Home() {
  return (
    <div className={styles.rootContainer}>
      <Header />
      <div className={styles.innerContainer}>
        <div className={styles.bannerArea}></div>
      </div>
    </div>
  );
}

export default Home;
