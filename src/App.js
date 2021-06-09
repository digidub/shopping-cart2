import { createContext, Fragment, useContext, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from './components/Cart';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ProductPage from './components/ProductPage';
import Products from './components/Products';

export const StoreDataContext = createContext();

function App() {
  const [storeData, setStoreData] = useState({
    loading: true,
    error: false,
    data: [],
  });

  return (
    <Fragment>
      <BrowserRouter>
        <StoreDataContext.Provider value={{ storeData, setStoreData }}>
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
            <Route path='/products/:id'>
              <ProductPage />
            </Route>
          </Switch>
        </StoreDataContext.Provider>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
