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
import saco from '../../assets/icons/logo/logo.png';
import {
  Page,
  SearchBar,
  IconGlobal,
  CardSneakers,
  ContainerSneakers,
} from '../../design';
import {Text} from '../../design';
import {ContextSneakers} from '../../contexts/SneakersContext';

const DATA = [
  {
    id: 'wd',
    title: 'First Item',
    iconBrand: require('../../assets/icons/brands/jordan.png'),
  },
  {
    id: 'wr',
    title: 'Second Item',
    iconBrand: require('../../assets/icons/brands/adidas.png'),
  },
  {
    id: 'wg',
    title: 'Third Item',
    iconBrand: require('../../assets/icons/brands/puma.png'),
  },
  {
    id: 'wv',
    title: 'Third Item',
    iconBrand: require('../../assets/icons/brands/gucci.png'),
  },
  {
    id: 'wn',
    title: 'Third Item',
    iconBrand: require('../../assets/icons/brands/balenciaga.png'),
  },
  {
    id: 'wm',
    title: 'Third Item',
    iconBrand: require('../../assets/icons/brands/nike.png'),
  },
];

const ButtonBrand = ({onPress, backgroundColor, source}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.brandButton, backgroundColor]}>
    <IconGlobal source={source} />
  </TouchableOpacity>
);

const ButtonVertical = ({onPress, backgroundColor, source}) => (
  <TouchableOpacity
    style={[styles.verticalButton, backgroundColor]}
    TouchableOpacity
    onPress={onPress}>
    <S.ContentTextGenders>
      <Text type="p">Masculino</Text>
    </S.ContentTextGenders>
  </TouchableOpacity>
);

const Home = () => {
  const [selectedId, setSelectedId] = useState(null);
  const {sneakers, setSneakers} = useContext(ContextSneakers);

  const renderButtonBrand = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#75F7FF' : '#FAFAFA';
    return (
      <>
        <ButtonBrand
          item={item}
          source={item.iconBrand}
          onPress={() => setSelectedId(item.id)}
          backgroundColor={{backgroundColor}}
        />
      </>
    );
  };

  const renderButtonVertical = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#75F7FF' : '#FAFAFA';
    return (
      <>
        <ButtonVertical
          item={item}
          source={item.iconBrand}
          onPress={() => setSelectedId(item.id)}
          backgroundColor={{backgroundColor}}
        />
      </>
    );
  };

  const renderContainerSneakers = () => {
    return (
      <ContainerSneakers>
        {sneakers.map(sneaker => {
          console.log(sneaker.media.thumbUrl);
          if (sneaker.media.thumbUrl != null) {
            return (
              <CardSneakers key={sneaker.id}>
                <Text type="h2">{sneaker.name}</Text>
                <S.ContentThumbs>
                  <Image
                    source={{
                      uri: sneaker.media.thumbUrl,
                    }}
                    style={{width: 253, height: 157}}
                    resizeMode="contain"
                  />
                </S.ContentThumbs>
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
            extraData={selectedId}
          />
        </S.ContainerBrands>
        <S.ContainerUtil>
          <S.ContentGenders>
            <FlatList
              ItemSeparatorComponent={() => <View style={{width: 0}} />}
              showsHorizontalScrollIndicator={false}
              vertical
              data={DATA}
              renderItem={renderButtonVertical}
              keyExtractor={item => item.id}
              extraData={selectedId}
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
    width: 69,
    height: 110,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#75F7FF',
    borderBottomLeftRadius: 16,
    borderTopLeftRadius: 16,
  },
});

export default Home;
