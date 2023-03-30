import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Modal from "../Modal/Modal";
import styles from "./Summary.module.css";


const Summary = () => {

  const [open, setOpen] = React.useState(false);
  
  const [summary, setSummary] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  
  const { movieId } = useParams();
  
  useEffect(() => {
    setIsLoading(true);
    fetch(`https://api.tvmaze.com/shows/${movieId}`)
    // fetch(`https://api.tvmaze.com/lookup/shows?thetvdb=348200`)
    .then((response) => response.json())
    .then((data) => setSummary(data))
    .catch((error) => console.log(error));
    setIsLoading(false);
  }, [movieId]);
  
  const handleClose = () => {
    setOpen(false);
    console.log(false)
  };
    
  const handleOpen = () => {
    setOpen(true);
    console.log(true)
  };
  return (
    <>
      <Modal data={summary} hide={open} onClose={handleClose}></Modal>
    <div className={styles.movieInfo}>
      {/* {summary.name ? <h1 className={styles.name}>{summary.name}</h1> : isLoading ?  <h1>Loading...</h1> :<h1>Not Available</h1>} */}
      
      <div className={styles.imageAndTicket}>
        {summary.image ?  <img className={styles.image} src={summary.image.original} alt={summary.name}/> : isLoading ?  <div className={styles.not_available}>Loading ....</div> : <div className={styles.not_available}>Not Available</div>  
        }

        <div className={styles.movie_features_container}>

          <div className={styles.movie_details}>
        { summary.name ? <h1 className={styles.name}>Show Name: {summary.name}</h1> : isLoading ? <h1>Loading...</h1> : <h1>Not Available</h1>}
            {summary.rating && (
              <p className={styles.rating}>
                {" "}
                Rating: &#11088; {(summary.rating.average)? summary.rating.average : 0}
              </p>
            ) }
            {summary.runtime && (
              <p className={styles.runtime}>
                Runtime: {summary.runtime} minutes
              </p>
            )}
            {summary.summary && (
              <p className={styles.summary}>
                Summary : <br /> {summary.summary}
              </p>
            )}
          </div>
          {/* .......................  */}
          <button className="button" onClick={handleOpen}>
            Book A Ticket
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Summary;
