import {Switch, Route} from 'react-router-dom';
import {lazy , Suspense } from 'react';
import Loader from "react-loader-spinner";




const SearchForm = lazy(() => import("./views/SearchForm/SearchForm"))
const TrendToday = lazy(()=> import("./views/TrendToday/TrendToday"))
const MovieDetails = lazy(() => import("./views/MovieDetails/MovieDetails"))
const HomePage = lazy(() => import("./views/HomePage/HomePage"))
const NotFound = lazy(() => import("./views/NotFound/NotFound"))

const Routes = () => {
    return (
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
    )
}



export default Routes;