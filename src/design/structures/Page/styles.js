import styled from 'styled-components/native';
import Theme from '../../theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${Theme.colors.primary};
`;

export const SafeContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${Theme.colors.primary};
`;

export const Content = styled.View`
  padding: ${Theme.spacing.n16};
`;

export const ScrollContent = styled.ScrollView`
  padding: ${Theme.spacing.n16};
`;

export const KeyboardContainer = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${Theme.colors.primary};
`;
