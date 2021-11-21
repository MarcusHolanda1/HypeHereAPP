import React from 'react';
import * as S from './styles';
import {Page, Text, SearchBar} from '../../design';
import Logo from '../../assets/images/logo/HYPEHERE.svg';

export default function Home() {
  return (
    <Page>
      <S.ContentHeader>
        <Logo width={150} height={35} />
        <SearchBar />
      </S.ContentHeader>
    </Page>
  );
}
