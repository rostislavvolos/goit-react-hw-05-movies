import { Link, useLocation } from 'react-router-dom';
import { IMAGE_URL } from '../../services/photo-api';
import styles from './TrendTodayCard.module.css';

const TrendTodayCard = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={styles.list}>
      {movies.map(item => (
        <li key={item.id} className={styles.item}>
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
              alt= "sht"
            />
            <p className={styles.subtitle}>{item.title || item.name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TrendTodayCard;