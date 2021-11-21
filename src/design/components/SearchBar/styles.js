import styled from 'styled-components/native';
import {TextInput, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Theme from '../../theme';

export const Container = styled(Animated.View)`
  width: 36px;
  height: 36px;
  background: ${Theme.colors.white};
  border-radius: 30px;
`;

export const Input = styled(TextInput)`
  flex: 1;
  margin-right: ${Theme.spacing.n40};
  margin-left: ${Theme.spacing.n12};
`;

export const BoxButtonSearch = styled.TouchableOpacity`
  width: 36px;
  height: 36px;
  background: ${Theme.colors.primary};
  position: absolute;
  right: 0px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;

export const SearchIcon = styled(Icon).attrs({
  name: 'search',
})`
  color: ${Theme.colors.black};
  font-size: 18px;
`;
