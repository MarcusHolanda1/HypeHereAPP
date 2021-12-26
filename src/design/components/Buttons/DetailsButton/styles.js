import styled from 'styled-components/native';

import Theme from '../../../theme';

export const WrapButton = styled.TouchableOpacity`
  width: 70px;
  height: 50px;
  background-color: ${Theme.colors.primary};
  justify-content: center;
  align-items: center;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  position: relative;
  right: -24px;
  top: 24px;
`;
