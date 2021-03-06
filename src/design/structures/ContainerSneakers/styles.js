import styled from 'styled-components/native';
import Theme from '../../theme';

export const Container = styled.SafeAreaView`
  background-color: ${Theme.colors.background};
  width: 300px;
  flex: 1;
  padding-right: ${Theme.spacing.n16};
`;

export const SafeContainer = styled.ScrollView``;
