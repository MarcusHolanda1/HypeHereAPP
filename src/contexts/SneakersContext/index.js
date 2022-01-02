import React, {useState, createContext, useEffect, useCallback} from 'react';
import request from '../../services';

export const ContextSneakers = createContext();

export const SneakersContext = ({children}) => {
  const [sneakers, setSneakers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getAPI = useCallback(async () => {
    await request.get().then(({data}) => {
      setSneakers(data.results);
    });
    setIsLoading(true);
  }, []);

  useEffect(() => {
    getAPI();
  }, [getAPI]);

  return (
    <ContextSneakers.Provider
      value={{
        sneakers,
        setSneakers,
        isLoading,
      }}>
      {children}
    </ContextSneakers.Provider>
  );
};
