import React, {useEffect, useState} from 'react';
import * as S from './styles';
import {Page, Text, SearchBar, BrandButton} from '../../design';
import Logo from '../../assets/images/logo/HYPEHERE.svg';
import {ScrollView, FlatList, SafeAreaView} from 'react-native';

export default function Home() {
  return (
    <Page>
      <S.ContentHeader>
        <Logo width={150} height={35} />
        <SearchBar />
      </S.ContentHeader>
      <S.ContainerBrands>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <BrandButton background="#75F7FF" width="100px" heigth="64px" />
          <BrandButton background="#75F7FF" width="100px" heigth="64px" />
          <BrandButton background="#75F7FF" width="100px" heigth="64px" />
          <BrandButton background="#75F7FF" width="100px" heigth="64px" />
          <BrandButton background="#75F7FF" width="100px" heigth="64px" />
          <BrandButton background="#75F7FF" width="100px" heigth="64px" />
          <BrandButton background="#75F7FF" width="100px" heigth="64px" />
          <BrandButton background="#75F7FF" width="100px" heigth="64px" />
          <BrandButton background="#75F7FF" width="100px" heigth="64px" />
        </ScrollView>
      </S.ContainerBrands>
    </Page>
  );
}
