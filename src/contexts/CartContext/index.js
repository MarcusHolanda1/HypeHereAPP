import React, {createContext, useState, useCallback} from 'react';

export const ContextCart = createContext();

export const CartContext = ({children}) => {
  const [cartSneakers, setCartSneakers] = useState([]);

  const addCartSneaker = useCallback(
    item => {
      setCartSneakers([...cartSneakers, item]);
    },
    [cartSneakers],
  );

  return (
    <ContextCart.Provider value={{cartSneakers, addCartSneaker}}>
      {children}
    </ContextCart.Provider>
  );
};
