import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from './container/home/Home';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Register } from './container/form/Register';

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

    </Switch>
      <Footer></Footer>
    </BrowserRouter>
</div>

  );
}

export default App;
