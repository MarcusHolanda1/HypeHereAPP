import React, {useCallback} from 'react';
import {View} from 'react-native';

import {H1, H2, P, H1PRICE, SPAN, H3} from './styles';

const Text = ({type, ...rest}) => {
  const render = useCallback(() => {
    switch (type) {
      case 'h1':
        return <H1>{rest.children}</H1>;
      case 'h1Price':
        return <H1PRICE>{rest.children}</H1PRICE>;
      case 'h2':
        return <H2>{rest.children}</H2>;
      case 'h3':
        return <H3>{rest.children}</H3>;
      case 'p':
        return <P>{rest.children}</P>;
      case 'span':
        return <SPAN>{rest.children}</SPAN>;
      default:
        return <View>{rest.children}</View>;
    }
  }, [rest.children, type]);
  return render();
};
export default Text;
