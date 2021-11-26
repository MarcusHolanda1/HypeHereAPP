import styled from 'styled-components/native';
import Theme from '../../design/theme';
import PrimaryButton from '../../design/components/Buttons/PrimaryButton';

export const ContentHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: ${Theme.spacing.n16};
  padding-top: ${Theme.spacing.n16};
  padding-right: ${Theme.spacing.n16};
`;

export const ContainerBrands = styled.SafeAreaView``;

export const ContainerUtil = styled.View``;

export const ContentGenders = styled.View`
  align-self: flex-end;
  position: absolute;
`;

export const ContentTextGenders = styled.SafeAreaView`
  transform: rotate(-90deg);
`;
