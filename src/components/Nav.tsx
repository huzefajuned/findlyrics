import React from "react";
import styles from "../components/Nav.module.css";
import { useNavigate } from "react-router-dom";

type Input = {
  title: string
  setTitle: (arg0: string) => void
  onSearch: () => void
}


const search_icon =
  "https://icons.iconarchive.com/icons/graphicloads/100-flat/256/zoom-search-2-icon.png";

const Nav: React.FC<Input> = (props) => {
  console.log(props)
  const navigate = useNavigate();
  return (
    <div className={styles.main}>
      <div className={styles.logo}>
        <h1 onClick={() => navigate("/")}>Find Lyrics.</h1>
      </div>

      <div className={styles.search}>
        <input
          className={styles.search}
          type="text"
          placeholder="Seach Lyrics"
          onChange={(e) => props.setTitle(e.target.value)}
        />
        <img onClick={() => props.onSearch()} src={search_icon} alt="searchIcon" />
      </div>

    </div>
  );
};

export default Nav;
