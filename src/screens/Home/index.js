import React, {useState} from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import * as S from './styles';
import Logo from '../../assets/icons/logo/HYPEHERE.svg';
import {Page, SearchBar, BrandButton, IconGlobal} from '../../design';

const DATA = [
  {
    id: '1',
    title: 'First Item',
    iconBrand: require('../../assets/icons/brands/jordan.png'),
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    iconBrand: require('../../assets/icons/brands/adidas.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    iconBrand: require('../../assets/icons/brands/puma.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    iconBrand: require('../../assets/icons/brands/gucci.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    iconBrand: require('../../assets/icons/brands/balenciaga.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    iconBrand: require('../../assets/icons/brands/nike.png'),
  },
];

const Item = ({onPress, backgroundColor, source}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <IconGlobal source={source} />
  </TouchableOpacity>
);

const Home = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#75F7FF' : '#FAFAFA';
    console.log(item);
    return (
      <>
        <Item
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
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
        />
      </Page>
    </>
  );
};

const styles = StyleSheet.create({
  item: {
    marginLeft: 10,
    marginTop: 12,
    width: 99,
    height: 64,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
