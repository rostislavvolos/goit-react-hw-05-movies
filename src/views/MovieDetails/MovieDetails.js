import styles from './MovieDetails.module.css';
import {useState, useEffect} from 'react';
import {useParams, 
  useLocation, 
  useHistory, 
  NavLink,
 Route} from 'react-router-dom';
import * as moviesApi from '../../services/photo-api';
import {IMAGE_URL} from '../../services/photo-api';
import Loader from '../../components/Loader/Loader';
import MovieCastView from '../../components/Cast/Cast';
import Reviews from '../../components/Reviews/Reviews';



export default function MovieDetails () {
    const location = useLocation();
    const history = useHistory();
    // console.log(location);
    const {moveId} = useParams();
    const [movie, setMovie] = useState(null)
    const [error, setError] = useState(null)

   useEffect(() => {
    moviesApi.fetchMovieById(moveId).then(setMovie).catch(setError);
   }, [moveId])


   const onGoBack = () => {
       history.push(location?.state?.from ?? '/')
   }

   if(error) {
       return (
           <>
           <button type='button' onClick={onGoBack} className={styles.buttonBg}>Go Back</button>
           <h2 className={styles.error}>Простите но бекендщик умер</h2>
           </>
       )
   }

   if(!movie) {
       return (
        <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
       )
   }

    return (



         <>
         <div className={styles.buttonDiv}>
            <button type='button' onClick={onGoBack} className={styles.buttonBg}>Go Back</button>
            </div>
            <img
                className={styles.image}
                src={IMAGE_URL + movie.poster_path}
                alt={movie.title || movie.name}
                widht="300"
                height="450"
              />

         <div className={styles.box}>
                <h2 className={styles.title}>{movie.title || movie.name}</h2>
                <p className={styles.rating}>
                  User Score:
                  <span className={`${styles.descr} ${styles.score}`}> {movie.vote_average} </span>
                </p>
                <p className={styles.subtitle}>
                  Overview:
                  <span className={styles.descr}>{movie.overview}</span>
                </p>
                <p className={styles.subtitle}>
                  Genres:
                  <span className={styles.genres}>
                    {movie.genres.map(genre => genre.name).join(' / ')}
                  </span>
                </p>
              </div>
              <div className={styles.castDiv}>
            <NavLink to={`/movies/${movie.id}/cast`} className={`${styles.linkinpark} ${styles.Cast}`} activeClassName={styles.activeClass}>Cast</NavLink>
            <NavLink to={`/movies/${movie.id}/reviews`} className={`${styles.linkinpark} ${styles.Reviews}`} activeClassName={styles.activeClass}>Reviews</NavLink>
            </div>

            <Route path='/movies/:moveId/cast'>
            <MovieCastView id={movie.id} />
            </Route>

            <Route path='/movies/:moveId/reviews'>
            <Reviews id={movie.id} />
            </Route>
        </> 
        
    )
}