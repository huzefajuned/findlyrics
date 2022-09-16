import React from 'react'
import styles from '../components/SingleTrack.module.css'

type singleTrack = {
    artist_name: string,
    track_name: string,
    album_name: string
}
type singTrack = singleTrack[]

const SingleTrack = (props: singTrack) => {
    // console.log("props fro el", props, typeof (props)
    
    // typeof(props)
    return (

        <div className={styles.main}>
            {/* {
                props.map(()=>{

                })
            } */}
            {/* <div className={styles.trackCard}>
                <h2>Name: {props.track.artist_name}</h2>
                <h2>Track:{props.track.track_name}</h2>
                <h2>Album: {props.track.album_name}</h2>
            </div> */}
        </div>
    )
}

export default SingleTrack