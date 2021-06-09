import { Fragment, useContext, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from './components/Cart';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';

function App() {
  const DataContext = useContext();
  const [storeData, setStoreData] = useState({
    loading: true,
    error: false,
    data: [],
  });

  return (
    <Fragment>
      <BrowserRouter>
        <DataContext.Provider value={{ storeData, setStoreData }}>
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
        </DataContext.Provider>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
