import styled from 'styled-components/native';
import Theme from '../../design/theme';

export const ContentCard = styled.View``;

export const ContentHandles = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${Theme.spacing.n12};
  margin-bottom: ${Theme.spacing.n40};
`;

export const ContentName = styled.View``;

export const ContentPrice = styled.View`
  align-self: flex-end;
`;

export const ContentImage = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentStars = styled.View`
  flex-direction: row;
  margin-top: ${Theme.spacing.n40};
`;

export const ContentSize = styled.View`
  margin-top: ${Theme.spacing.n24};
`;

export const ContentSizeTouch = styled.SafeAreaView``;

export const ContentButtonBuy = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-bottom: 14px;
`;
