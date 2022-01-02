import React, {useContext} from 'react';
import {Image, ScrollView, StyleSheet} from 'react-native';
import * as S from './styles';
import {
  CardCart,
  FavoriteListStructure,
  Text,
  TrashButton,
  AddAndRemoveButton,
  PrimaryButton,
} from '../../design';
import Logo from '../../assets/icons/logo/HYPEHERE.svg';
import {ContextCart} from '../../contexts/CartContext';
import IMAGES from '../../assets';

const Cart = ({route, navigation}) => {
  const {
    cartSneakers,
    addCartSneaker,
    removeSneakerCart,
    trashSneakerCart,
    subTotalSneakers,
    totalSneakers,
    freight,
  } = useContext(ContextCart);

  return (
    <>
      <FavoriteListStructure>
        <Logo width={150} height={35} />
        <S.ContentTitle>
          <Text type="h1">Meu carrinho</Text>
        </S.ContentTitle>

        <ScrollView showsVerticalScrollIndicator={false}>
          <S.ContainerCards>
            {cartSneakers.map((cartSneaker, index) => {
              return (
                <CardCart width="370px" key={index}>
                  <S.ContentCard>
                    <S.ContentImage>
                      <S.ContentTextShoe>
                        <Text type="h3">{cartSneaker.shoe}</Text>
                      </S.ContentTextShoe>
                      <Image
                        source={{uri: cartSneaker.image}}
                        style={{width: 130, height: 100}}
                        resizeMode="contain"
                      />
                    </S.ContentImage>
                    <S.ContentShoe>
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
                      <S.ContentPriceCard>
                        <Text type="span">
                          Preço: R$: {cartSneaker.price}, 00
                        </Text>
                      </S.ContentPriceCard>
                    </S.ContentShoe>
                    <S.ContentTrash>
                      <TrashButton
                        onPress={() => trashSneakerCart(cartSneaker)}
                      />
                    </S.ContentTrash>
                  </S.ContentCard>
                </CardCart>
              );
            })}
          </S.ContainerCards>
          <S.ContainerFinishBuyData>
            <S.ContentFinishBuyDataSubTotal>
              <Text type="h3">Sub Total</Text>
              <Text type="h2">R$ {subTotalSneakers}, 00</Text>
            </S.ContentFinishBuyDataSubTotal>
            <S.ContentFinishBuyDataFreight>
              <Text type="h3">Frete</Text>
              <Text type="h3">R$ {freight}, 00</Text>
            </S.ContentFinishBuyDataFreight>
            <S.ContentFinishBuyDataTotal>
              <S.ContentTextFinishBuyDataTotal>
                <Text type="h3">Total</Text>
                <Text type="h2">R$ {totalSneakers}, 00</Text>
              </S.ContentTextFinishBuyDataTotal>
            </S.ContentFinishBuyDataTotal>
          </S.ContainerFinishBuyData>
        </ScrollView>
      </FavoriteListStructure>
      <S.ContainerButtonFinishBuy>
        <PrimaryButton
          background="#75F7FF"
          color="#000"
          text="Finalizar comprar"
          width="261px"
          heigth="56px"
        />
      </S.ContainerButtonFinishBuy>
    </>
  );
};
export default Cart;
