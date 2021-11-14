import styled from 'styled-components/native';

import Theme from '../../design/theme';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const BackgroundImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

export const ContentLogo = styled.View`
  /* flex: 1; */
  justify-content: center;
  align-items: center;
  top: 120px;
`;

export const ImageLogo = styled.Image``;

export const ContentButton = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: ${Theme.spacing.n32};
  bottom: -385px;
`;

export const ContentInput = styled.View`
  align-items: center;
  justify-content: center;
  top: 170px;
`;

export const ContentInputName = styled.View`
  margin-bottom: ${Theme.spacing.n24};
`;

export const ContentInputPassword = styled.View``;
