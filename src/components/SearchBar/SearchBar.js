import styles from './SearchBar.module.css';
import {useState} from 'react';
import { useHistory, useLocation} from 'react-router-dom';

const SearchBar = ({onClick}) => {
    const [searchQuery, setSearchQuery] = useState('');
    const history = useHistory();
    const location = useLocation();


    const handleInput = event => {
        setSearchQuery(event.target.value)
    }

    const handleClick = event => {
        event.preventDefault();

        if (searchQuery === '') {
            alert('oooopss, no result')
            return;
        }
        history.push({
          ...location,
          search: `query=${searchQuery}`
        })
        onClick(searchQuery);


    }


    return (
        <header className={styles.Searchbar}>
          <form onSubmit={handleClick} className={styles.SearchForm}>
            <button type="submit" className={styles.SearchFormButton}>
              {/* <ImSearch /> */}
            </button>
            <input
              className={styles.SearchFormInput}
              type="text"
              autoComplete="off"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleInput}
            ></input>
          </form>
        </header>
      );
}


export default SearchBar;