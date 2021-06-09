import { Fragment, useContext, useReducer } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from './components/Cart';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';

function App() {
  const dataContext = useContext();
  const [data, dispatch] = useReducer({
    loading: true,
    error: false,
    data: [],
  });

  return (
    <Fragment>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/products'>
            <Products />
          </Route>
          <Route exact path='/cart'>
            <Cart />
          </Route>
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
