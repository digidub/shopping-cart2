import { Fragment, useReducer } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from './components/Cart';
import { CartContext } from './components/CartContext';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ProductPage from './components/ProductPage';
import Products from './components/Products';
import GlobalStyle from './components/GlobalStyles';
import ScrollToTop from './components/ScrollToTop';
import { reducer } from './components/reducer';

function App() {
  const [state, dispatch] = useReducer(reducer, {
    items: [],
    costCount: 0,
    itemCount: 0,
  });

  return (
    <Fragment>
      <GlobalStyle />
      <BrowserRouter>
        <ScrollToTop />
        <CartContext.Provider value={{ state, dispatch }}>
          <Navbar />
          <Switch>
            <Route exact path='/shopping-cart2/'>
              <Home />
            </Route>
            <Route exact path='/products'>
              <Products />
            </Route>
            <Route exact path='/cart'>
              <Cart />
            </Route>
            <Route path='/products/:id'>
              <ProductPage />
            </Route>
          </Switch>
        </CartContext.Provider>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
