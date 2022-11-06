import React, { useRef } from "react";
import Header from "../components/common/Header";
import styles from "./styles/content.module.css";
import styled from "styled-components";
import ContentImg from "../assets/content3.jpeg";
import { sendTransaction } from "../lib/contract";
import { useWeb3React } from "@web3-react/core";

const ImageContainer = styled.div`
  width: 100%;
  height: 60%;
  background-image: url(${(props) => props.imgSrc});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

function Content3() {
  const valueRef = useRef(0);
  const contractAddress = "0x20cB0bfe3F3b5f326636a619c225A4F8c192538C";
  const { account, active } = useWeb3React();
  return (
    <>
      <Header />
      <div className={styles.rootContainer}>
        <div className={styles.innerContainer}>
          <div className={styles.contentArea}>
            <ImageContainer imgSrc={ContentImg} />
            <div className={styles.textContainer}>
              <span>캠페인 내용 3입니다.</span>
            </div>
          </div>
          <div className={styles.donateArea}>
            <input
              type="text"
              placeholder="금액입력"
              className={styles.inputArea}
              ref={valueRef}
            />
            <button
              type="button"
              className={styles.donateBtn}
              onClick={() => {
                sendTransaction(
                  account,
                  contractAddress,
                  parseFloat(valueRef.current.value)
                );
              }}
            >
              {active ? "기부하기" : "메타마스크 로그인 필요"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content3;
