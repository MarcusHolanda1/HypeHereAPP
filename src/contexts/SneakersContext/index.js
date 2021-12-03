import React, {useState, createContext, useEffect, useCallback} from 'react';
import request from '../../services';

export const ContextSneakers = createContext();

export const SneakersContext = ({children}) => {
  const [sneakers, setSneakers] = useState([]);

  const getAPI = useCallback(async () => {
    request.get().then(({data}) => {
      setSneakers(data.results);
    });
  }, []);

  useEffect(() => {
    getAPI();
  }, [getAPI]);

  return (
    <ContextSneakers.Provider
      value={{
        sneakers,
        setSneakers,
      }}>
      {children}
    </ContextSneakers.Provider>
  );
};
