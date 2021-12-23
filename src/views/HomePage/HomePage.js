import { useState, useEffect } from "react";
import { fetchJustMovies } from '../../services/photo-api';
import MovieCard from '../MovieCard/MovieCard';
import styles from './HomePage.module.css';


export default function HomePage() {
    const [movies, setMovies] = useState([])

  useEffect(() => {
    fetchJustMovies().then(request => setMovies(request.results));
  }, []);

  return (
    <>
      <h1 className={styles.title}> FILMS </h1>
      <MovieCard movies={movies} />
    </>
  );
}