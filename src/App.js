import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from './container/home/Home';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Register } from './container/form/Register';
import { Login } from './container/form/Login';
import MovieDetail from './components/MovieDetail/MovieDetail';
import MoviesRented from './components/MoviesRented/MoviesRented.js';

function App() {
  return (
      <div className="app">
          <BrowserRouter>
            <Header></Header>
          <Switch>

            <Route path="/" exact>
              <Home></Home>
            </Route>

            <Route path="/register">
              <Register></Register>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/movieDetail">
              <MovieDetail></MovieDetail>
            </Route>

            <Route path="/moviesRented">
              <MoviesRented></MoviesRented>
            </Route>

          </Switch>
            <Footer></Footer>
          </BrowserRouter>
      </div>
  );
}

export default App;
