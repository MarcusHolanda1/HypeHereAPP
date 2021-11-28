import styled from 'styled-components/native';
import Theme from '../../theme';

export const Card = styled.View`
  background-color: ${Theme.colors.white};
  border-radius: 24px;
  width: 297px;
  height: 370px;
  position: relative;
  margin-bottom: ${Theme.spacing.n24};
  padding: ${Theme.spacing.n32};
`;
