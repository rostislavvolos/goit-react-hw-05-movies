import styles from './Reviews.module.css';


import { useState, useEffect } from 'react';
// import { useLocation } from 'react-router';

import { fetchMovieReviews } from '../../services/photo-api';

export default function Reviews({ id }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(id).then(setReviews);
  }, [id]);
// console.log(reviews);
  return (
    <div>
      {reviews.results?.length > 0 ? (
        <ul className={styles.list}>
          {reviews.results.map(({ id, author, content }) => {
            return (
              <li key={id} className={styles.item}>
                <p className={styles.authorName}>Author: {author}</p>
                <p className="name"> {content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className={styles.error}>We don`t have any reviews for this movie :(</p>
      )}
    </div>
  );
}


