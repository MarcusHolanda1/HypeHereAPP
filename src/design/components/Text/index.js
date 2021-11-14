import React, {useCallback} from 'react';
import {View} from 'react-native';

import {H1, H2, P} from './styles';

export function Text({type, ...rest}) {
  const render = useCallback(() => {
    switch (type) {
      case 'h1':
        return <H1>{rest.children}</H1>;
      case 'h2':
        return <H2>{rest.children}</H2>;
      case 'p':
        return <P>{rest.children}</P>;
      default:
        return <View>{rest.children}</View>;
    }
  }, [rest.children, type]);
  return render();
}
