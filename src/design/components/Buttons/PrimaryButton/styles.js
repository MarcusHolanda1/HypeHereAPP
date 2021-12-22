import styled from 'styled-components/native';
import Theme from '../../../theme';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const WrapButton = styled.TouchableOpacity`
  width: ${props => props.width};
  height: ${props => props.heigth};
  background-color: ${props => props.background};
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 16px;
`;
export const TextButton = styled.Text`
  color: ${props => props.color};
  font-size: ${Theme.spacing.n16};
  font-weight: bold;
`;

export const CartIcon = styled(Icon).attrs({
  name: 'shopping-cart',
})`
  color: ${Theme.colors.black};
  font-size: 24px;
  margin-right: 10px;
`;
