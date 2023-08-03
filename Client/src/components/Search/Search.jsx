import React, { useState } from "react";
import styles from "./Search.module.css";

export default function Search({ onSearch }) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const handleClick = () => {
    onSearch(id);
    setId("");
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="search"
        onChange={handleChange}
        value={id}
        className={styles.searchInput}
        placeholder=' Enter a number...'
      />
      <button onClick={handleClick} className={styles.searchButton}>
        Search
      </button>
    </div>
  );
}
