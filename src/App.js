import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from './container/home/Home';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Register } from './container/form/Register';
import { Login } from './container/form/Login';
import MovieDetail from './components/MovieDetail/MovieDetail';
import MoviesRented from './components/MoviesRented/MoviesRented.js';
import { Entry } from './container/entry/Entry';
import Search from './components/Search/Search.js';

function App() {
  return (
      <div className="app">
          <BrowserRouter>

          <Switch>

            <Route path="/entry">
              <Entry></Entry>
            </Route>

            <Route path="/" exact>
            <Header></Header>
              <Home></Home>
            </Route>

            <Route path="/register">
              <Register></Register>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/movieDetail">
            <Header></Header>
              <MovieDetail></MovieDetail>
            </Route>

            <Route path="/moviesRented">
              <MoviesRented></MoviesRented>
            </Route>
            
            <Route path="/search">
              <Search></Search>
            </Route>

          </Switch>
            <Footer></Footer>
          </BrowserRouter>
      </div>
  );
}

export default App;
