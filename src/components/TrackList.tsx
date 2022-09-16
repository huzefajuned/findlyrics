import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleTrack from "./SingleTrack";
import styles from "./TrackList.module.css";
import { useNavigate } from "react-router-dom";
const loading =
  "https://www.technig.com/wp-content/uploads/2017/03/how-to-create-css-preloader.gif";

// type tracksTypes = {
//     track: [];
// };
// type track_Types = {
//     album_name: string;
//     artist_name: string;
//     track_name: string;
// };

type TrackDetail = {
  album_id: Number;
  album_name: string;
  artist_id: Number;
  artist_name: string;
  commontrack_id: Number;
  explicit: Number;
  has_lyrics: Number;
  has_richsync: Number;
  has_subtitles: Number;
  instrumental: Number;
  num_favourite: Number;
  primary_genres: any[];
  restricted: Number;
  track_edit_url: string;
  track_id: Number;
  track_name: string;
  track_name_translation_list: any[];
  track_rating: Number;
  track_share_url: string;
  updated_time: Date;
};

type Track = {
  track: TrackDetail;
};

type TrackList = Track[];

type TrackListProps = {
  tracks: TrackList;
};

const TrackList = (props: TrackListProps) => {
  const navigate = useNavigate();
  let track_Data = props.tracks;
  console.log("track_Data", track_Data);

  const navToViewPage = (selectProd: any) => {
    navigate(`/lyrics/track/${selectProd.track.track_id}`, {
      state: selectProd,
    });
  };
  return (
    <div className={styles.container}>
      {track_Data?.length === 0 || undefined ? (
        <>
          <div className={styles.inner}>
            <button onClick={() => window.location.reload()}>
              Click here to reload ?
            </button>{" "}
            <br />
            <img src={loading} alt="loading_img" />
          </div>
        </>
      ) : (
        <>
          <div className={styles.trackCard}>
            <span id={styles.cardHeading}>TOP 20 TRACKS...</span>

            {track_Data?.map((elem: any) => {
              return (
                <>
                  <div
                    id={elem.track.album_name}
                    className={styles.trackCardInner}
                  >
                    <div className={styles.card} id={elem.track.album_name}>
                      <h3>
                        <span id={styles.titleKey}> Name : </span>
                        <span id={styles.titleValue}>
                          {elem.track.artist_name}
                        </span>
                      </h3>
                      <h3>
                        <span id={styles.titleKey}> Album :</span>
                        <span id={styles.titleValue}>
                          {elem.track.album_name}{" "}
                        </span>
                      </h3>
                      <h3>
                        <span id={styles.titleKey}>TracK : </span>
                        <span id={styles.titleValue}>
                          {elem.track.track_name}{" "}
                        </span>
                      </h3>
                    </div>
                    <div className={styles.viewBtn}>
                      <button onClick={() => navToViewPage(elem)}>
                        View lyrics
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default TrackList;
