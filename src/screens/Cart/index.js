import React from 'react';
import * as S from './styles';
import {CardCart, FavoriteListStructure, Text} from '../../design';
import Logo from '../../assets/icons/logo/HYPEHERE.svg';

const Cart = ({route, navigation}) => {
  console.log(route.params);
  return (
    <FavoriteListStructure>
      <Logo width={150} height={35} />
      <S.ContentTitle>
        <Text type="h1">Meu carrinho</Text>
      </S.ContentTitle>

      <S.ContentCards>
        <CardCart width="370px"></CardCart>
      </S.ContentCards>
    </FavoriteListStructure>
  );
};
export default Cart;
