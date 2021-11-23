import React from 'react';
import {Image} from 'react-native';

const IconGlobal = ({source, children}) => {
  return <Image source={source}>{children}</Image>;
};

export default IconGlobal;
