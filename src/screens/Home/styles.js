import styled from 'styled-components/native';
import Theme from '../../design/theme';

export const ContentHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: ${Theme.spacing.n16};
  padding-top: ${Theme.spacing.n16};
  padding-right: ${Theme.spacing.n16};
`;

export const ContainerBrands = styled.SafeAreaView`
  flex-direction: row;
`;

export const ContainerUtil = styled.View``;

export const ContentGenders = styled.View`
  align-self: flex-end;
  position: absolute;
`;

export const ContentTextGenders = styled.SafeAreaView`
  transform: rotate(-90deg);
`;

export const ContentThumbs = styled.View`
  margin-top: ${Theme.spacing.n24};
  margin-bottom: ${Theme.spacing.n24};
`;

export const ContentButtonBuy = styled.View`
  align-self: flex-end;
`;

export const ContentShoeAndFavorite = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ContentFavorite = styled.View`
  top: 5px;
`;
