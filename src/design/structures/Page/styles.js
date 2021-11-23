import styled from 'styled-components/native';
import Theme from '../../theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${Theme.colors.background};
`;

export const SafeContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${Theme.colors.background};
`;

export const Content = styled.View`
  padding-top: ${Theme.spacing.n16};
`;

export const ScrollContent = styled.ScrollView`
  padding-top: ${Theme.spacing.n16};
`;

export const KeyboardContainer = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${Theme.colors.background};
`;
