import React from "react";
import styles from "../styles/Article.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

function Article() {
  return (
    <>
      <div className={styles.articleContainer}>
        <div className={styles.articleHeader}>
          <h3>Un titre</h3>
          <FontAwesomeIcon icon={faBookmark} />
        </div>
        <h4 style={{ textAlign: "right" }}>Un auteur</h4>
        <div className={styles.divider}></div>
        <img src="/example.png" alt="Une image" width={400} height={224} />
        <p>description de la photo</p>
      </div>
    </>
  );
}

export default Article;
