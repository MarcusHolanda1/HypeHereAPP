import styled from 'styled-components/native';
import Theme from '../../theme';

export const Container = styled.View`
  background-color: ${Theme.colors.background};
  flex: 1;
  padding-top: ${Theme.spacing.n16};
  padding-left: ${Theme.spacing.n16};
  padding-right: ${Theme.spacing.n16};
`;
