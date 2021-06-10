export const checkIfItemInCart = (item, array, sum) => {
  if (array.find((object) => object.id === item.id)) {
    const toUpdate = array.find((object) => object.id === item.id);
    if (sum === 'add') toUpdate.quantity = toUpdate.quantity + item.quantity;
    else {
      console.log('hi');
      toUpdate.quantity = toUpdate.quantity - item.quantity;
      if (toUpdate.quantity === 0) array = deleteItemLookup(item, array);
    }
    return array;
  }
  return array.concat(item);
};

export const deleteItemLookup = (item, array) => {
  const deleted = array.filter((object) => object.id !== item.id);
  return deleted;
};

export const removeQuantityFromBasket = (item, array) => {
  const toUpdate = array.find((object) => object.id === item.id);
  return toUpdate.quantity;
};

export const customQuantityUpdate = (item, array, newQuantity) => {
  const toUpdate = array.find((object) => object.id === item.id);
  const oldQuantity = toUpdate.quantity;
  if (newQuantity > oldQuantity) {
    toUpdate.quantity = newQuantity;
    return { array, type: 'add', newQuantity, oldQuantity };
  } else if (newQuantity < oldQuantity) {
    toUpdate.quantity = newQuantity;
    return { array, type: 'subtract', newQuantity, oldQuantity };
  } else {
    toUpdate.quantity = newQuantity;
    return { array, type: '', newQuantity, oldQuantity };
  }
};
