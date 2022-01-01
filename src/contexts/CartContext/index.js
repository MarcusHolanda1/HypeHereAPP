import React, {createContext, useState, useCallback} from 'react';
import {useEffect} from 'react';

export const ContextCart = createContext();

export const CartContext = ({children}) => {
  const [cartSneakers, setCartSneakers] = useState([]);
  const [subTotalSneakers, setSubTotalSneakers] = useState(0);
  const [totalSneakers, setTotalSneakers] = useState(0);
  const [freight, setFreight] = useState(0);

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

  const calculateSubTotalSneakers = useCallback(() => {
    let subtotal = 0;
    cartSneakers.map(sneakerAdd => {
      subtotal += sneakerAdd.price * sneakerAdd.qty;
      return sneakerAdd;
    });
    setSubTotalSneakers(subtotal);
  }, [cartSneakers]);

  const calculateTotalSneakers = useCallback(() => {
    let totalValue = 0;
    for (const eachSneaker of cartSneakers) {
      totalValue += eachSneaker.price;
    }
    setTotalSneakers(totalValue);
    if (totalValue > 0) {
      setFreight(10);
    } else {
      setFreight(0);
    }
  }, [cartSneakers]);

  useEffect(() => {
    calculateTotalSneakers();
  }, [calculateTotalSneakers]);

  useEffect(() => {
    calculateSubTotalSneakers();
  }, [calculateSubTotalSneakers]);

  return (
    <ContextCart.Provider
      value={{
        cartSneakers,
        addCartSneaker,
        removeSneakerCart,
        trashSneakerCart,
        totalSneakers,
        subTotalSneakers,
        freight,
      }}>
      {children}
    </ContextCart.Provider>
  );
};
