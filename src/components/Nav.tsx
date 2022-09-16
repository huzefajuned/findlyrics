import React, { useState } from "react";
import styles from "../components/Nav.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

type Input = {
  title: string
  setTitle: string
  onSearch: any[]
}


const cors_Url = "http://localhost:4000/proxy";
const base_Url = "https://api.musixmatch.com/ws/1.1";
const API_KEY = "cd6617a8f2c2e638dda29bd28be62cbe";
const search_icon =
  "https://icons.iconarchive.com/icons/graphicloads/100-flat/256/zoom-search-2-icon.png";

const Nav: React.FC<Input> = (props) => {
  console.log(props)

  // //storing search input.
  // const [title, setTitle] = useState("");
  // // storing API response.
  // const [searched, setSearched] = useState("");
  // console.log(searched);
  // //API call after clicking search icon
  // const onSearch = () => {
  //   axios
  //     .post(`${cors_Url}`, {
  //       redirect_url: `${base_Url}/track.search?q_track=${title}&page_size=10&page=1&s_track_rating=desc&apikey=${API_KEY}
  //     `,
  //     })
  //     .then((res) => {
  //       setSearched(res.data.message.body.track_list);
  //     })
  //     .catch((err) => console.log(err));
  // };

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
