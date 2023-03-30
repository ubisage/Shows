import React, { useState, useEffect } from "react";
import {  Link } from "react-router-dom";
import styles from "./Movies.module.css"
const Movies = () => {
  const [shows, setShows] = useState([]);
  
 
 useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => response.json())
      .then((data) => {
        setShows(data);
      });
    }, []);
    
    return (
      <div className={styles.movies_container} >
     
      <h1 className={styles.header}>List of Shows</h1>
      
      <div className={styles.movies}>
        
        {shows.map((show) => (
          <div className={styles.movie} key={show.show.id}>
              <h3 className={styles.movie_name}>{show.show.name}</h3>
              {show.show.image && <img src={show.show.image.medium} alt={show.show.name} />}
              {show.show.rating && <span className={styles.rating}>Rating: {show.show.rating.average ? show.show.rating.average : 'TBD'}</span>}
            <Link to={`/${show.show.id}`}><button className="button">View More</button></Link>
              
            
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Movies;
