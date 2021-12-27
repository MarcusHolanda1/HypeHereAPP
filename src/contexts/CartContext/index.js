import React, {createContext, useState, useCallback} from 'react';

export const ContextCart = createContext();

export const CartContext = ({children}) => {
  const [cartSneakers, setCartSneakers] = useState([]);

  const addCartSneaker = useCallback(
    item => {
      const exist = cartSneakers.find(each => each.id === item.id);
      if (exist) {
        setCartSneakers(
          cartSneakers.map(each =>
            each.id === item.id ? {...exist, qty: exist.qty + 1} : each,
          ),
        );
      } else {
        setCartSneakers([...cartSneakers, {...item, qty: 1}]);
      }
    },
    [cartSneakers],
  );

  const removeSneakerCart = useCallback(
    item => {
      const exist = cartSneakers.find(each => each.id === item.id);
      if (exist.qty === 1) {
        setCartSneakers(cartSneakers.filter(each => each.id !== item.id));
      } else {
        setCartSneakers(
          cartSneakers.map(each =>
            each.id === item.id ? {...exist, qty: exist.qty - 1} : each,
          ),
        );
      }
    },
    [cartSneakers],
  );

  const trashSneakerCart = useCallback(
    item => {
      const index = cartSneakers.findIndex(each => each.id === item.id);
      cartSneakers.splice(index, 1);
      setCartSneakers([...cartSneakers]);
    },
    [cartSneakers],
  );

  return (
    <ContextCart.Provider
      value={{
        cartSneakers,
        addCartSneaker,
        removeSneakerCart,
        trashSneakerCart,
      }}>
      {children}
    </ContextCart.Provider>
  );
};
