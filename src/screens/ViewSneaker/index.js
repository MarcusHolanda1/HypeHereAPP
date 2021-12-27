import React, {useState, useContext} from 'react';
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  View,
  Button,
} from 'react-native';
import * as S from './styles';
import {FavoritesContext} from '../../contexts/FavoriteContext';
import {ContextCart} from '../../contexts/CartContext';
import {CardSneakers, BackButton, PrimaryButton} from '../../design';
import {Page, Text, IconGlobal} from '../../design';
import IMAGES from '../../assets';
import Toast from 'react-native-toast-message';
import {useCallback} from 'react';

const dataSize = [
  {
    id: '1',
    size: '36',
  },
  {
    id: '2',
    size: '36',
  },
  {
    id: '3',
    size: '37',
  },
  {
    id: '4',
    size: '38',
  },
  {
    id: '5',
    size: '39',
  },
  {
    id: '6',
    size: '40',
  },
  {
    id: '7',
    size: '41',
  },
  {
    id: '8',
    size: '42',
  },
  {
    id: '9',
    size: '43',
  },
  {
    id: '10',
    size: '44',
  },
  {
    id: '11',
    size: '45',
  },
];

const SizeButton = ({onPress, backgroundColor, item}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.sizeButton, backgroundColor]}>
    <S.ContentSizeTouch>
      <Text type="p">{item.size}</Text>
    </S.ContentSizeTouch>
  </TouchableOpacity>
);

const ViewSneaker = ({route, navigation, navigation: {goBack}}) => {
  const {onFavorite, onRemoveFavorite, ifExists} = useContext(FavoritesContext);
  const {cartSneakers, addCartSneaker} = useContext(ContextCart);
  const [selectedSize, setSelectedSize] = useState();
  const [sneakerSelected, setSneakerSelected] = useState(route.params);

  const renderButtonSize = ({item}) => {
    const backgroundColor = item.id === selectedSize ? '#75F7FF' : '#FAFAFA';
    return (
      <>
        <SizeButton
          item={item}
          onPress={() => setSelectedSize(item.id)}
          backgroundColor={{backgroundColor}}
        />
      </>
    );
  };

  const showToast = useCallback(() => {
    Toast.show({
      type: 'success',
      text1: 'Sneaker adicionado ao carrinho',
    });
  }, []);

  const addToCart = useCallback(() => {
    addCartSneaker(sneakerSelected);
    showToast();
  }, [addCartSneaker, showToast, sneakerSelected]);

  return (
    <Page>
      <S.ContentCard>
        <CardSneakers width="376px">
          <S.ContentHandles>
            <BackButton onPress={() => goBack()} />
            <TouchableOpacity
              onPress={() =>
                ifExists(route.params?.sneakerNav)
                  ? onRemoveFavorite(route.params?.sneakerNav)
                  : onFavorite(route.params?.sneakerNav)
              }>
              <IconGlobal
                source={
                  ifExists(route.params?.sneakerNav)
                    ? IMAGES.handle.favorite
                    : IMAGES.handle.setFavorite
                }
              />
            </TouchableOpacity>
          </S.ContentHandles>

          <S.ContentImage>
            <Image
              source={{
                uri: route.params?.image,
              }}
              style={{width: 280, height: 190}}
              resizeMode="contain"
            />
          </S.ContentImage>
          <S.ContentStars>
            <IconGlobal source={IMAGES.stars.starFull} />
            <IconGlobal source={IMAGES.stars.starFull} />
            <IconGlobal source={IMAGES.stars.starFull} />
            <IconGlobal source={IMAGES.stars.starFull} />
            <IconGlobal source={IMAGES.stars.starHalf} />
          </S.ContentStars>
        </CardSneakers>
        <S.ContentName>
          <Text type="h1">{route.params?.shoe}</Text>
        </S.ContentName>
        <S.ContentPrice>
          <Text type="h1Price">R$ {route.params?.price},00</Text>
        </S.ContentPrice>
      </S.ContentCard>
      <S.ContentSize>
        <Text type="p">Selecionar o tamanho</Text>
        <FlatList
          ItemSeparatorComponent={() => <View style={{width: 0}} />}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={dataSize}
          renderItem={renderButtonSize}
          keyExtractor={item => item.id}
          extraData={selectedSize}
        />
      </S.ContentSize>
      <S.ContentButtonBuy>
        <PrimaryButton
          background="#75F7FF"
          color="#000"
          text="Adicionar ao carrinho"
          width="261px"
          heigth="56px"
          onPress={addToCart}
        />
      </S.ContentButtonBuy>
      <Toast onPress={() => navigation.navigate('CartTab')} />
    </Page>
  );
};
const styles = StyleSheet.create({
  sizeButton: {
    marginRight: 10,
    marginTop: 12,
    marginBottom: 24,
    width: 79,
    height: 44,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default ViewSneaker;
