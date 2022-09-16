import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./ViewLyrics.module.css";
const loading =
  "https://www.technig.com/wp-content/uploads/2017/03/how-to-create-css-preloader.gif";

const cors_Url = "http://localhost:4000/proxy";
const base_Url = "https://api.musixmatch.com/ws/1.1";
const API_KEY = "cd6617a8f2c2e638dda29bd28be62cbe";

type LyricDetails = {
  explicit: Number;
  lyrics_body: string;
  lyrics_copyright: string;
  lyrics_id: Number;
  pixel_tracking_url: string;
  script_tracking_url: string;
  updated_time: Date;
};

type Lyric = {
  lyrics: LyricDetails;
};
type LyricList = Lyric[];

type LyricsListProps = {
  Lyrics: LyricList;
};

const ViewLyrics = (props: LyricsListProps) => {
  // console.log(props)
  const navigate = useNavigate();
  //inLocation Data of current    TrackList is Available.
  const location = useLocation();
  // console.log("location is", location);

  const [lyrics, setLyrics] = useState([]);
  console.log(lyrics);
  // console.log(lyrics);

  useEffect(() => {
    getlyrics();
  }, []);
  const getlyrics = () => {
    axios
      .post(`${cors_Url}`, {
        redirect_url: `${base_Url}/track.lyrics.get?track_id=${location.state.track.track_id}&apikey=${API_KEY}`,
      })
      .then((res) => {
        console.log(res);
        setLyrics(res.data.message.body.lyrics);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      {lyrics.length === 0 ? (
        <>
          <img src={loading} alt="loading_img" />{" "}
        </>
      ) : (
        <>
          <div className={styles.container}>
            <div className={styles.top}>
              <h2>
                I'm good, yeah, I'm feelin' alright Baby, I'ma have the best
                fuckin' night of my life And wherever it takes me, I'm down for
                the ride Baby, don't you know I'm good? Yeah, I'm feelin'
                alright 'Cause I'm good, yeah, I'm feelin' alright Baby, I'ma
                have the best fuckin' night of my life And wherever it takes me,
                I'm down for the ride Baby, don't you know I'm good? Yeah, I'm
                feelin' alright Don't you know I'm good? Yeah, I'm feelin'
                alright You know I'm down for whatever tonight ... ******* This
                Lyrics is NOT for Commercial use ******* (1409622776969)
              </h2>
            </div>
            <div className={styles.bottom}>
              <div className={styles.bottomLeft}>
                <h1>Explicit Words: No</h1>
                <h4>Updated Time </h4>
                <h2>Album ID: 53367578</h2>
                <h4>Released Date: Invalid date</h4>
                <h3>Song Genre: Country</h3>
              </div>
              <div className={styles.bottomRight}>
                <h5>{location.state.track.artist_name}</h5>
                <h5>{location.state.track.album_name}</h5>
                <h5>{location.state.track.track_name}</h5>
              </div>
            </div>
          </div>
          <div className={styles.backBtn}>
            <button onClick={() => navigate("/")}>Back To main Page!</button>
          </div>
        </>
      )}
    </div>
  );
};

export default ViewLyrics;
