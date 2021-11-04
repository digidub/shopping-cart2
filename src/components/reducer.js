import {
  checkIfItemInCart,
  customQuantityUpdate,
  deleteItemLookup,
  removeQuantityFromBasket,
} from './components/AppLogic';

export const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      const cartItemsIncrement = checkIfItemInCart(
        action.item,
        state.items,
        'add'
      );
      return {
        ...state,
        items: cartItemsIncrement,
        itemCount: state.itemCount + action.quantity,
        costCount: state.costCount + action.cost * action.quantity,
      };
    case 'decrement':
      const cartItemsDecrement = checkIfItemInCart(
        action.item,
        state.items,
        'subtract'
      );
      return {
        ...state,
        items: cartItemsDecrement,
        itemCount: state.itemCount - action.quantity,
        costCount: state.costCount - action.cost * action.quantity,
      };
    case 'delete':
      const newCart = deleteItemLookup(action.item, state.items);
      const itemsToBeSubtracted = removeQuantityFromBasket(
        action.item,
        state.items
      );
      return {
        ...state,
        items: newCart,
        itemCount: state.itemCount - itemsToBeSubtracted,
        costCount: state.costCount - action.cost * itemsToBeSubtracted,
      };
    case 'custom':
      const customCart = customQuantityUpdate(
        action.item,
        state.items,
        action.quantity
      );
      switch (customCart.type) {
        case 'add':
          return {
            ...state,
            items: customCart.array,
            itemCount:
              state.itemCount +
              (customCart.newQuantity - customCart.oldQuantity),
            costCount:
              state.costCount +
              (customCart.newQuantity - customCart.oldQuantity) * action.cost,
          };
        case 'subtract':
          return {
            ...state,
            items: customCart.array,
            itemCount:
              state.itemCount -
              (customCart.oldQuantity - customCart.newQuantity),
            costCount:
              state.costCount -
              (customCart.oldQuantity - customCart.newQuantity) * action.cost,
          };
        default:
          throw new Error('woops');
      }
    default:
      throw new Error('woops');
  }
};
