// import logo from './logo.svg';
import "./styles/reset.css";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import { Switch, Route } from "react-router-dom";
import HomePage from "./views/HomePage/HomePage";
import NotFound from "./views/NotFound/NotFound";
import {lazy, Suspense} from 'react';
import Loader from "react-loader-spinner";
// import SearchForm from '' ;
// import TrendToday from ''
// import MovieDetails from "";


const SearchForm = lazy(() => import("./views/SearchForm/SearchForm"))
const TrendToday = lazy(()=> import("./views/TrendToday/TrendToday"))
const MovieDetails = lazy(() => import("./views/MovieDetails/MovieDetails"))




function App() {
  return (
    <div className="App">
      
      <Navigation />
      <Suspense fallback={<Loader
        type="TailSpin"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />}>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/trend-today" exact>
            <TrendToday />
          </Route>
        <Route path="/movies" exact>
            <SearchForm />
          </Route>
          <Route path="/movies/:moveId">
            <MovieDetails/>
          </Route>


      <Route>
        <NotFound />
      </Route>
      </Switch>
      </Suspense>
    </div>
  );
}

export default App;
