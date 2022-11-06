import React from "react";
import styles from "./header.module.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../../lib/connectors";

function Header() {
  const { chainedId, account, active, activate, deactivate } = useWeb3React();

  const connectWallet = async () => {
    try {
      await activate(injected, (error) => {
        // 크롬 익스텐션 없을 경우 오류 핸들링
      });
    } catch (err) {}
  };
  return (
    <div className={styles.headerContainer}>
      <div className={styles.innerContainer}>
        <Link to="/" className={styles.title}>
          유기견 NFT 기부
        </Link>
        <Link to="/campaign" className={styles.menu}>
          캠페인
        </Link>
        {active ? (
          <Button variant="outlined" className={styles.loginBtn}>
            마이페이지
          </Button>
        ) : (
          <Button
            variant="outlined"
            className={styles.loginBtn}
            onClick={connectWallet}
          >
            로그인
          </Button>
        )}
      </div>
    </div>
  );
}
export default Header;
