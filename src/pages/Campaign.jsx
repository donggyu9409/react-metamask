import React from "react";
import CardItem from "../components/campaign/CardItem";
import Header from "../components/common/Header";
import styles from "./styles/campaign.module.css";
import ThumbImg1 from "../assets/campaign1.png";
import ThumbImg2 from "../assets/campaign2.jpeg";
import ThumbImg3 from "../assets/campaign3.jpeg";

function Campaign() {
  return (
    <div className={styles.rootContainer}>
      <Header />
      <div className={styles.innerContainer}>
        <div className={styles.contentArea}>
          <div className={styles.contentTitle}>
            <span>캠페인 목록</span>
          </div>
          <div className={styles.cardContainer}>
            <CardItem
              thumbImg={ThumbImg1}
              title="캠페인 제목 1"
              url="/content1"
            />
            <CardItem
              thumbImg={ThumbImg2}
              title="캠페인 제목 2"
              url="/content2"
            />
            <CardItem
              thumbImg={ThumbImg3}
              title="캠페인 제목 3"
              url="/content3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Campaign;
