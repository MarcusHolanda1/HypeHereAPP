import React from 'react';
import * as S from './styles';
import {Dimensions, Animated} from 'react-native';

const SearchBar = ({onChange}) => {
  const animation = new Animated.Value(36);
  const {width} = Dimensions.get('window');

  const onSearch = () => {
    Animated.spring(animation, {
      toValue: width * 0.5,
      useNativeDriver: false,
    }).start();
  };

  return (
    <S.Container style={{width: animation}}>
      <S.Input placeholder="Pesquisar" fontSize={13} onChangeText={onChange} />
      <S.BoxButtonSearch onPress={onSearch}>
        <S.SearchIcon />
      </S.BoxButtonSearch>
    </S.Container>
  );
};
export default SearchBar;
