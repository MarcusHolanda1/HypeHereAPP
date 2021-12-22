import React, {useState, useEffect, useCallback, useContext} from 'react';
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import * as S from './styles';
import Logo from '../../assets/icons/logo/HYPEHERE.svg';
import {
  Page,
  SearchBar,
  IconGlobal,
  CardSneakers,
  ContainerSneakers,
  PrimaryButton,
} from '../../design';
import {Text} from '../../design';
import {ContextSneakers} from '../../contexts/SneakersContext';
import {FavoritesContext} from '../../contexts/FavoriteContext';
import IMAGES from '../../assets';

const DATA = [
  {
    id: 'Jordan',
    iconBrand: require('../../assets/icons/brands/jordan.png'),
  },
  {
    id: 'adidas',
    iconBrand: require('../../assets/icons/brands/adidas.png'),
  },
  {
    id: 'puma',
    iconBrand: require('../../assets/icons/brands/puma.png'),
  },
  {
    id: 'gucci',
    iconBrand: require('../../assets/icons/brands/gucci.png'),
  },
  {
    id: 'balenciaga',
    iconBrand: require('../../assets/icons/brands/balenciaga.png'),
  },
  {
    id: 'Nike',
    iconBrand: require('../../assets/icons/brands/nike.png'),
  },
];

const genders = [
  {
    id: 'men',
    name: 'Masculino',
  },
  {
    id: 'women',
    name: 'Feminino',
  },
  {
    id: 'toddler',
    name: 'KIDS',
  },
];

const ButtonBrand = ({onPress, backgroundColor, source}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.brandButton, backgroundColor]}>
    <IconGlobal source={source} />
  </TouchableOpacity>
);

const ButtonVertical = ({onPress, backgroundColor, item}) => (
  <TouchableOpacity
    style={[styles.verticalButton, backgroundColor]}
    TouchableOpacity
    onPress={onPress}>
    <S.ContentTextGenders>
      <Text type="p">{item.name}</Text>
    </S.ContentTextGenders>
  </TouchableOpacity>
);

const Home = ({navigation}) => {
  const {sneakers, setSneakers} = useContext(ContextSneakers);
  const {onFavorite, onRemoveFavorite, ifExists, favoriteList} =
    useContext(FavoritesContext);
  const [selectedBrand, setSelectedBrand] = useState();
  const [filteredSneakers, setFilteredSneakers] = useState([]);
  const [selectedGender, setSelectedGender] = useState();

  const handleFilterByBrand = useCallback(() => {
    const filtered = sneakers.filter(e => e.brand === selectedBrand);
    if (filtered) setFilteredSneakers(filtered);
  }, [selectedBrand, sneakers]);

  const handleFilterByGender = useCallback(() => {
    const filtered = sneakers.filter(
      e => e.gender === selectedGender && e.brand === selectedBrand,
    );
    if (filtered) setFilteredSneakers(filtered);
  }, [selectedBrand, selectedGender, sneakers]);

  useEffect(() => {
    handleFilterByGender();
  }, [handleFilterByGender]);

  useEffect(() => {
    handleFilterByBrand();
  }, [handleFilterByBrand]);

  useEffect(() => {
    setFilteredSneakers(sneakers);
  }, [sneakers]);

  console.log(favoriteList);

  const renderButtonBrand = ({item}) => {
    const backgroundColor = item.id === selectedBrand ? '#75F7FF' : '#FAFAFA';
    return (
      <>
        <ButtonBrand
          item={item}
          source={item.iconBrand}
          onPress={() => setSelectedBrand(item.id)}
          backgroundColor={{backgroundColor}}
        />
      </>
    );
  };

  const renderButtonVertical = ({item}) => {
    const backgroundColor = item.id === selectedGender ? '#75F7FF' : '#FAFAFA';
    return (
      <>
        <ButtonVertical
          item={item}
          onPress={() => setSelectedGender(item.id)}
          backgroundColor={{backgroundColor}}
        />
      </>
    );
  };

  const renderContainerSneakers = () => {
    return (
      <ContainerSneakers>
        {filteredSneakers.map(sneaker => {
          let shoeString = sneaker.shoe;
          let showStringSplit = shoeString.split(' ', 3);
          let shoeStringSpace = showStringSplit.join(' ');

          if (sneaker.media.thumbUrl != null) {
            return (
              <CardSneakers key={sneaker.id}>
                <S.ContentShoeAndFavorite>
                  <Text type="h1">{shoeStringSpace}</Text>
                  <S.ContentFavorite>
                    <TouchableOpacity
                      onPress={() =>
                        ifExists(sneaker)
                          ? onRemoveFavorite(sneaker)
                          : onFavorite(sneaker)
                      }>
                      <IconGlobal
                        source={
                          ifExists(sneaker)
                            ? IMAGES.handle.favorite
                            : IMAGES.handle.setFavorite
                        }
                      />
                    </TouchableOpacity>
                  </S.ContentFavorite>
                </S.ContentShoeAndFavorite>
                <S.ContentThumbs>
                  <Image
                    source={{
                      uri: sneaker.media.thumbUrl,
                    }}
                    style={{width: 220, height: 140}}
                    resizeMode="contain"
                  />
                </S.ContentThumbs>
                <Text type="h2">R$ {sneaker.retailPrice},00</Text>
                <S.ContentButtonBuy>
                  <PrimaryButton
                    onPress={() =>
                      navigation.navigate('ViewSneaker', {
                        shoe: sneaker.shoe,
                        image: sneaker.media.imageUrl,
                        price: sneaker.retailPrice,
                      })
                    }
                    background="#75F7FF"
                    color="#000"
                    text="Comprar"
                    width="156px"
                    heigth="56px"
                  />
                </S.ContentButtonBuy>
              </CardSneakers>
            );
          }
        })}
      </ContainerSneakers>
    );
  };

  return (
    <>
      <Page>
        <S.ContentHeader>
          <Logo width={150} height={35} />
          <SearchBar />
        </S.ContentHeader>
        <S.ContainerBrands>
          <FlatList
            ItemSeparatorComponent={() => <View style={{width: 0}} />}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={DATA}
            renderItem={renderButtonBrand}
            keyExtractor={item => item.id}
            extraData={selectedBrand}
          />
        </S.ContainerBrands>
        <S.ContainerUtil>
          <S.ContentGenders>
            <FlatList
              ItemSeparatorComponent={() => <View style={{width: 0}} />}
              showsHorizontalScrollIndicator={false}
              vertical
              data={genders}
              renderItem={renderButtonVertical}
              keyExtractor={item => item.id}
              extraData={selectedGender}
            />
          </S.ContentGenders>
        </S.ContainerUtil>
        {renderContainerSneakers()}
      </Page>
    </>
  );
};

const styles = StyleSheet.create({
  brandButton: {
    marginRight: 10,
    marginTop: 12,
    marginBottom: 24,
    width: 99,
    height: 64,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  verticalButton: {
    marginBottom: 20,
    width: 74,
    height: 111,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#75F7FF',
    borderBottomLeftRadius: 16,
    borderTopLeftRadius: 16,
  },
});

export default Home;
