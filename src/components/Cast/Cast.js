import styles from './Cast.module.css';
import { useState, useEffect } from 'react';
import { fetchMovieCast, IMAGE_URL } from '../../services/photo-api';


export default function MovieCastView({ id }) {
  const [cast, setCast] = useState([]);
// console.log(cast);
  useEffect(() => {
    
    fetchMovieCast(id).then(find => setCast(find.cast));
  }, [id]);

  return (
    <ul className={styles.list}>
      {cast.map(item => (
        <li key={item.id} className={styles.item}>
          <img
          className={styles.image}
            src={IMAGE_URL + item.profile_path}
            alt={item.name}
            width="100"
            height="150"
          />
          <p className={styles.name}>{item.name}</p>
        </li>
      ))}
    </ul>
  );
}