import styles from './TrendToday.module.css';
import { useState, useEffect } from "react";
import { fetchTrendMovies } from '../../services/photo-api';
import TrendTodayCard from '../TrendTodayCard/TrendTodayCard';


export default function TrendToday() {
    const [movies, setMovies] = useState([])

  useEffect(() => {
    fetchTrendMovies().then(item => setMovies(item.results));
  }, []);

  return (
    <>
      <h1 className={styles.title}> Trending today </h1>
      <TrendTodayCard movies={movies} />
    </>
  );
}

