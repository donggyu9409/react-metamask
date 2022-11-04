import React from "react";
import styles from "./header.module.css";
import Button from "@mui/material/Button";

function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.title}>유기견 NFT 기부</div>
        <button type="button" className={styles.menu}>
          캠페인
        </button>
        <Button href="#" variant="outlined" className={styles.loginBtn}>
          로그인
        </Button>
      </div>
    </div>
  );
}
export default Header;
