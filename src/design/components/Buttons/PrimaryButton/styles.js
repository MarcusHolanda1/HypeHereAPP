import styled from 'styled-components/native';

export const WrapButton = styled.TouchableOpacity`
  margin-top: 10;
  width: ${props => props.width};
  height: 70px;
  background-color: ${props => props.background};
  justify-content: center;
  align-items: center;
  border-radius: 30px;
`;
export const TextButton = styled.Text`
  color: ${props => props.color};
  font-size: 18;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
`;
