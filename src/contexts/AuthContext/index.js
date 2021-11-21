import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import {GoogleSignin, User} from '@react-native-google-signin/google-signin';
import axios, {AxiosResponse} from 'axios';
import React, {useContext, createContext, useState, useCallback} from 'react';
import {Platform} from 'react-native';
// import {API_URL} from '@env';

export const AuthContext = createContext();

GoogleSignin.configure({
  webClientId:
    Platform.OS === 'android'
      ? '849851871054-q0mpld4t0iautle7em43ii0psi0s782j.apps.googleusercontent.com'
      : '',
});

const AuthProvider = ({children}) => {
  const [dataUser, setDataUser] = useState(null);

  const signinUser = useCallback(async data => {
    if (data) {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/auth`,
        data.user,
      );
      if (response?.data) {
        setDataUser(response.data);
      }
      AsyncStorage.setItem('@auth_user', JSON.stringify(data));
    }
  }, []);

  const signOut = useCallback(async () => {
    setDataUser(null);
    auth().signOut();
    await AsyncStorage.removeItem('@auth_user');
  }, []);

  return (
    <AuthContext.Provider
      value={{
        dataUser,
        signinUser,
        signOut,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export {AuthProvider, useAuth};
