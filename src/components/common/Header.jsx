import React from "react";
import styles from "./header.module.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.innerContainer}>
        <Link to="/" className={styles.title}>
          유기견 NFT 기부
        </Link>
        <Link to="/campaign" className={styles.menu}>
          캠페인
        </Link>
        <Button href="#" variant="outlined" className={styles.loginBtn}>
          로그인
        </Button>
      </div>
    </div>
  );
}
export default Header;
