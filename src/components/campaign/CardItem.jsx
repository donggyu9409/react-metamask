import React from "react";
import styles from "./campaign.module.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ThumbContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-image: url(${(props) => props.imgSrc});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

function CardItem({ thumbImg, title, url }) {
  console.log(thumbImg);
  return (
    <Link to={url} className={styles.cardContainer}>
      <ThumbContainer imgSrc={thumbImg} />
      <div className={styles.cardTitle}>
        <span>{title}</span>
      </div>
    </Link>
  );
}
export default CardItem;
