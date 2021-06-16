import { Fragment, useReducer } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { checkIfItemInCart, customQuantityUpdate, deleteItemLookup, removeQuantityFromBasket } from './components/AppLogic';
import Cart from './components/Cart';
import { CartContext } from './components/CartContext';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ProductPage from './components/ProductPage';
import Products from './components/Products';
import GlobalStyle from './components/GlobalStyles';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      const cartItemsIncrement = checkIfItemInCart(action.item, state.items, 'add');
      return {
        ...state,
        items: cartItemsIncrement,
        itemCount: state.itemCount + action.quantity,
        costCount: state.costCount + action.cost * action.quantity,
      };
    case 'decrement':
      const cartItemsDecrement = checkIfItemInCart(action.item, state.items, 'subtract');
      return {
        ...state,
        items: cartItemsDecrement,
        itemCount: state.itemCount - action.quantity,
        costCount: state.costCount - action.cost * action.quantity,
      };
    case 'delete':
      const newCart = deleteItemLookup(action.item, state.items);
      const itemsToBeSubtracted = removeQuantityFromBasket(action.item, state.items);
      return {
        ...state,
        items: newCart,
        itemCount: state.itemCount - itemsToBeSubtracted,
        costCount: state.costCount - action.cost * itemsToBeSubtracted,
      };
    case 'custom':
      const customCart = customQuantityUpdate(action.item, state.items, action.quantity);
      switch (customCart.type) {
        case 'add':
          return {
            ...state,
            items: customCart.array,
            itemCount: state.itemCount + (customCart.newQuantity - customCart.oldQuantity),
            costCount: state.costCount + (customCart.newQuantity - customCart.oldQuantity) * action.cost,
          };
        case 'subtract':
          return {
            ...state,
            items: customCart.array,
            itemCount: state.itemCount - (customCart.oldQuantity - customCart.newQuantity),
            costCount: state.costCount - (customCart.oldQuantity - customCart.newQuantity) * action.cost,
          };
        default:
          throw new Error('woops');
      }
    default:
      throw new Error('woops');
  }
};

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
        <CartContext.Provider value={{ state, dispatch }}>
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
        </CartContext.Provider>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
