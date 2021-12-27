import styled from 'styled-components/native';

import Theme from '../../../theme';

export const WrapButton = styled.TouchableOpacity`
  background-color: ${Theme.colors.secondary};
  width: 66px;
  height: 153px;
  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;
  position: relative;
`;

export const ContentIcon = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
