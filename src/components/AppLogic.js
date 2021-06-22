export const checkIfItemInCart = (item, array, sum) => {
  const index = array.findIndex((object) => object.id === item.id);
  if (index !== -1) {
    const newArray = array.map((item, i) =>
      i === index
        ? {
            ...item,
            quantity: item.quantity + (sum === 'add' ? item.quantity : -1),
          }
        : item
    );
    if (!newArray[index].quantity) {
      return deleteItemLookup(item, newArray);
    }
    return newArray;
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
  const index = array.findIndex((object) => object.id === item.id);
  const oldQuantity = array[index].quantity;
  return {
    array: array.map((item, i) =>
      i === index
        ? {
            ...item,
            quantity: newQuantity,
          }
        : item
    ),
    type: newQuantity >= oldQuantity ? 'add' : 'subtract',
    newQuantity,
    oldQuantity,
  };
};

export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'GBP',
});
