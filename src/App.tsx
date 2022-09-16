import React, { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import axios from "axios";
import TrackList from "./components/TrackList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ViewLyrics from "./components/ViewLyrics";
const cors_Url = "http://localhost:4000/proxy";
const base_Url = "https://api.musixmatch.com/ws/1.1";
const API_KEY = "cd6617a8f2c2e638dda29bd28be62cbe";

function App() {
  //storing search input.
  const [title, setTitle] = useState("");
  // console.log(title);
  // storing API response.
  // const [searched, setSearched] = useState("");
  // console.log("from search api", searched);
  //API call after clicking search icon
  const onSearch = () => {
    axios
      .post(`${cors_Url}`, {
        redirect_url: `${base_Url}/track.search?q_track=${title}&page_size=10&page=1&s_track_rating=desc&apikey=${API_KEY}
      `,
      })
      .then((res) => {
        console.log(res);
        setTracks(res.data.message.body.track_list);
      })
      .catch((err) => console.log(err));
  };

  const [tracks, setTracks] = useState([]);
  console.log("from track api", tracks)
  useEffect(() => {
    getlyrics();
  }, []);
  function getlyrics() {
    axios
      .post(`${cors_Url}`, {
        redirect_url: `${base_Url}/chart.tracks.get?chart_name=top&page=1&page_size=20&country=us&f_has_lyrics=1&apikey=${API_KEY}`,
      })
      .then((res) => {
        setTracks(res.data.message.body.track_list);
        // setTrack({track_list: res.data.message.body.track_list});
      })
      .catch((err) => console.log(err));
  }
  return (
    <>
      <Router>
        <Nav title={title} setTitle={setTitle} onSearch={onSearch} />

        <Routes>
          <Route path="*" element={<TrackList tracks={tracks} />} />
          <Route
            path="/lyrics/track/:id"
            element={<ViewLyrics Lyrics={[]} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
