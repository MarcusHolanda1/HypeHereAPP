import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';
import Authentication from '../../testGoogle/Authentication';
import Authenticated from '../../testGoogle/Authenticated';

export default function User() {
  const [authenticated, setAuthenticated] = useState(false);
  console.log('auth aqui', authenticated);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '125238915412-81rs3odhre0au7qsc0geoua8dc052h9i.apps.googleusercontent.com',
    });
  }, []);

  async function onGoogleButtonPress() {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  auth().onAuthStateChanged(user => {
    if (user) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  });

  if (authenticated) {
    return <Authenticated />;
  }

  return <Authentication onGoogleButtonPress={onGoogleButtonPress} />;
}
