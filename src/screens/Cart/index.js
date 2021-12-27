import React, {useContext} from 'react';
import {Image} from 'react-native';
import * as S from './styles';
import {
  CardCart,
  FavoriteListStructure,
  Text,
  TrashButton,
  AddAndRemoveButton,
} from '../../design';
import Logo from '../../assets/icons/logo/HYPEHERE.svg';
import {ContextCart} from '../../contexts/CartContext';
import IMAGES from '../../assets';

const Cart = ({route, navigation}) => {
  const {cartSneakers, addCartSneaker, removeSneakerCart, trashSneakerCart} =
    useContext(ContextCart);
  console.log(cartSneakers);

  return (
    <FavoriteListStructure>
      <Logo width={150} height={35} />
      <S.ContentTitle>
        <Text type="h1">Meu carrinho</Text>
      </S.ContentTitle>

      <S.ContainerCards>
        {cartSneakers.map((cartSneaker, index) => {
          return (
            <CardCart width="370px" key={index}>
              <S.ContentCard>
                <S.ContentImage>
                  <Image
                    source={{uri: cartSneaker.image}}
                    style={{width: 130, height: 100}}
                    resizeMode="contain"
                  />
                </S.ContentImage>
                <S.ContentShoe>
                  <Text type="h3">{cartSneaker.shoe}</Text>
                  <S.ContentAddAndRemoveButton>
                    <AddAndRemoveButton
                      onPress={() => removeSneakerCart(cartSneaker)}
                      source={IMAGES.handle.remove}
                    />
                    <Text type="h3">{cartSneaker.qty}</Text>
                    <AddAndRemoveButton
                      onPress={() => addCartSneaker(cartSneaker)}
                      source={IMAGES.handle.add}
                    />
                  </S.ContentAddAndRemoveButton>
                </S.ContentShoe>
                <S.ContentTrash>
                  <TrashButton onPress={() => trashSneakerCart(cartSneaker)} />
                </S.ContentTrash>
              </S.ContentCard>
            </CardCart>
          );
        })}
      </S.ContainerCards>
    </FavoriteListStructure>
  );
};
export default Cart;
