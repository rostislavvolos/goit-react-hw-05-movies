import { Link, useLocation } from 'react-router-dom';
import { IMAGE_URL } from '../../services/photo-api';
import styles from './MovieCard.module.css';

const MovieCard = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={styles.list}>
      {movies.map(item => (
        <li key={item.id} className={styles.item}>
          <div className={styles.divImage}>
          <Link
            to={{
              pathname: `/movies/${item.id}`,
              state: { from: location },
            }}
            className={styles.title}
          >
            <img
              className={styles.image}
              src={IMAGE_URL + item.poster_path}
              alt='shit'
            />
            <p className={styles.subtitle}>{item.title || item.name}</p>
          </Link>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MovieCard;