import styled from 'styled-components/native';
import Theme from '../../theme';

export const Card = styled.View`
  background-color: ${Theme.colors.white};
  border-radius: 24px;
  width: ${props => props.width};
  margin-bottom: ${Theme.spacing.n16};
`;
