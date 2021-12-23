import { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import MovieCard from '../MovieCard/MovieCard';
import { fetchMovieSearch } from '../../services/photo-api';
import {useLocation} from "react-router-dom";


const SearchForm = () => {
  const [movies, setMovies] = useState(null);
  const [query, setQuery] = useState('');
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("query");

    if (!query) {
      return;
    }

    fetchMovieSearch(query).then(item => {
      if (!item.results.length) {
       alert('НИЧЕ НЕ НАЙДЕНО, ЧЕЛ АДЕКВАТНОЕ НАЙДИ ЧТО-ТО')
        return;
      }
      setMovies(item.results);
    });
  }, [location.search]);

  const onClick = item => {
    setQuery(item);
  };

  return (
    <>
      <SearchBar onClick={onClick} />
      {movies && <MovieCard movies={movies} />}
    </>
  );
};

export default SearchForm;