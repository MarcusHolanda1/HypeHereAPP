import styled from 'styled-components/native';
import Theme from '../../design/theme';

export const ContentTitle = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${Theme.spacing.n32};
  margin-bottom: ${Theme.spacing.n32};
`;

export const ContentCards = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ContentHandles = styled.View`
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: ${Theme.spacing.n16};
`;

export const ContentedCard = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;
