import React from "react";
import Header from "../components/common/Header";
import styles from "./styles/content.module.css";
import styled from "styled-components";
import ContentImg from "../assets/content2.jpeg";

const ImageContainer = styled.div`
  width: 100%;
  height: 60%;
  background-image: url(${(props) => props.imgSrc});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

function Content2() {
  return (
    <>
      <Header />
      <div className={styles.rootContainer}>
        <div className={styles.innerContainer}>
          <div className={styles.contentArea}>
            <ImageContainer imgSrc={ContentImg} />
            <div className={styles.textContainer}>
              <span>캠페인 내용 2입니다.</span>
            </div>
          </div>
          <div className={styles.donateArea}>
            <input
              type="text"
              placeholder="금액입력"
              className={styles.inputArea}
            />
            <button type="button" className={styles.donateBtn}>
              기부하기
            </button>
            <div className={styles.totalAmount}>
              <span>
                <b>현재까지 모금된 이더: </b>
              </span>
              <span>0 ETH</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content2;
