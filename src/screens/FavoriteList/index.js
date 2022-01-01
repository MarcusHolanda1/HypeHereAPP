import React, {useContext} from 'react';
import {Image, TouchableOpacity, ScrollView} from 'react-native';
import {
  FavoriteListStructure,
  IconGlobal,
  Text,
  CardSneakers,
} from '../../design';
import * as S from './styles';
import Logo from '../../assets/icons/logo/HYPEHERE.svg';
import IMAGES from '../../assets';
import {FavoritesContext} from '../../contexts/FavoriteContext';

const FavoriteLIst = ({route, navigation}) => {
  const {onFavorite, onRemoveFavorite, ifExists, favoriteList} =
    useContext(FavoritesContext);

  return (
    <FavoriteListStructure>
      <Logo width={150} height={35} />
      <S.ContentTitle>
        <Text type="h1">Meus favoritos</Text>
      </S.ContentTitle>
      <ScrollView showsVerticalScrollIndicator={false}>
        <S.ContentCards>
          {favoriteList.map(favorite => {
            let shoeString = favorite.shoe;
            let showStringSplit = shoeString.split(' ', 1);
            let shoeStringSpace = showStringSplit.join(' ');

            return (
              <TouchableOpacity
                key={favorite.id}
                onPress={() =>
                  navigation.navigate('ViewSneaker', {
                    shoe: favorite.shoe,
                    image: favorite.media.thumbUrl,
                    price: favorite.retailPrice,
                    sneakerNav: favorite,
                  })
                }>
                <CardSneakers width="185px">
                  <S.ContentHandles>
                    <Text type="h2">{shoeStringSpace}</Text>
                    <TouchableOpacity
                      onPress={() =>
                        ifExists(favorite)
                          ? onRemoveFavorite(favorite)
                          : onFavorite(favorite)
                      }>
                      <IconGlobal source={IMAGES.handle.favorite} />
                    </TouchableOpacity>
                  </S.ContentHandles>
                  <Image
                    source={{
                      uri: favorite.media.thumbUrl,
                    }}
                    style={{width: 120, height: 100}}
                    resizeMode="contain"
                  />
                </CardSneakers>
              </TouchableOpacity>
            );
          })}
        </S.ContentCards>
      </ScrollView>
    </FavoriteListStructure>
  );
};
export default FavoriteLIst;
