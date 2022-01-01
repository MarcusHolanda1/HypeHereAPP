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

export const ContentTextShoe = styled.View`
  text-align: center;
  top: -15px;
`;

export const ContentPriceCard = styled.View`
  padding-left: ${Theme.spacing.n16};
  padding-top: ${Theme.spacing.n12};
`;

export const ContentAddAndRemoveButton = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: ${Theme.spacing.n16};
  margin-top: ${Theme.spacing.n24};
`;

export const ContainerButtonFinishBuy = styled.View`
  justify-content: center;
  align-items: center;
  padding-bottom: ${Theme.spacing.n8};
  padding-top: ${Theme.spacing.n8};
`;

export const ContainerFinishBuyData = styled.View`
  margin-top: ${Theme.spacing.n16};
  margin-bottom: ${Theme.spacing.n16};
  padding-left: ${Theme.spacing.n2};
  padding-right: ${Theme.spacing.n2};
  justify-content: space-between;
  flex-direction: column;
`;

export const ContentFinishBuyDataSubTotal = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;

export const ContentFinishBuyDataFreight = styled.View`
  justify-content: space-between;
  flex-direction: row;
  margin-top: ${Theme.spacing.n8};
`;

export const ContentTextFinishBuyDataTotal = styled.View`
  padding-top: ${Theme.spacing.n8};
  justify-content: space-between;
  flex-direction: row;
`;

export const ContentFinishBuyDataTotal = styled.View`
  margin-top: ${Theme.spacing.n16};
  border-top-width: 1px;
  border-color: #cdcdcd;
`;
