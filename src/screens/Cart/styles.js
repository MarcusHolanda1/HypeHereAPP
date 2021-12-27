import styled from 'styled-components/native';
import Theme from '../../design/theme';

export const ContainerCards = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ContentTitle = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: ${Theme.spacing.n32};
  margin-bottom: ${Theme.spacing.n32};
`;

export const ContentTrash = styled.View`
  align-self: flex-end;
`;

export const ContentCard = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;

export const ContentImage = styled.View`
  align-self: flex-start;
  justify-content: center;
  align-items: center;
  top: 30px;
  margin-left: ${Theme.spacing.n16};
`;

export const ContentShoe = styled.View`
  flex: 1;
  margin-top: ${Theme.spacing.n16};
`;

export const ContentAddAndRemoveButton = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: ${Theme.spacing.n16};
  margin-top: ${Theme.spacing.n24};
`;
