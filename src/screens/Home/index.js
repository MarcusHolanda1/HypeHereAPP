import React, {useState, useEffect} from 'react';
import api from '../../services/client';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import * as S from './styles';
import Logo from '../../assets/icons/logo/HYPEHERE.svg';
import {Page, SearchBar, BrandButton, IconGlobal} from '../../design';
import {Text} from '../../design';

const DATA = [
  {
    id: '1',
    title: 'First Item',
    iconBrand: require('../../assets/icons/brands/jordan.png'),
  },
  {
    id: '2',
    title: 'Second Item',
    iconBrand: require('../../assets/icons/brands/adidas.png'),
  },
  {
    id: '3',
    title: 'Third Item',
    iconBrand: require('../../assets/icons/brands/puma.png'),
  },
  {
    id: '4',
    title: 'Third Item',
    iconBrand: require('../../assets/icons/brands/gucci.png'),
  },
  {
    id: '5',
    title: 'Third Item',
    iconBrand: require('../../assets/icons/brands/balenciaga.png'),
  },
  {
    id: '6',
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
  <TouchableOpacity style={styles.verticalButton}>
    <S.ContentTextGenders>
      <Text type="p">Masculino</Text>
    </S.ContentTextGenders>
  </TouchableOpacity>
);

const Home = () => {
  const [selectedId, setSelectedId] = useState(null);

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

  return (
    <>
      <Page>
        <S.ContentHeader>
          <Logo width={150} height={35} />
          <SearchBar />
        </S.ContentHeader>
        <FlatList
          ItemSeparatorComponent={() => <View style={{width: 0}} />}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={DATA}
          renderItem={renderButtonBrand}
          keyExtractor={item => item.id}
          extraData={selectedId}
        />
        <S.ContentGenders>
          <TouchableOpacity style={styles.verticalButton}>
            <S.ContentTextGenders>
              <Text type="p">Masculino</Text>
            </S.ContentTextGenders>
          </TouchableOpacity>
        </S.ContentGenders>
      </Page>
    </>
  );
};

const styles = StyleSheet.create({
  brandButton: {
    marginLeft: 10,
    marginTop: 12,
    marginBottom: 24,
    width: 99,
    height: 64,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  verticalButton: {
    width: 69,
    height: 132,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#75F7FF',
    borderBottomLeftRadius: 16,
    borderTopLeftRadius: 16,
  },
});

export default Home;
