import styled from 'styled-components/native';

import Theme from '../../theme';

export const H1 = styled.Text`
  color: ${Theme.colors.black};
  font-family: ${Theme.font.h1.fontFamily};
  font-style: ${Theme.font.h1.fontStyle};
  font-weight: ${Theme.font.h1.fontWeight};
  font-size: ${Theme.font.h1.fontSize};
`;

export const H2 = styled.Text`
  color: ${Theme.colors.black};
  font-family: ${Theme.font.h2.fontFamily};
  font-style: ${Theme.font.h2.fontStyle};
  font-weight: ${Theme.font.h2.fontWeight};
  font-size: ${Theme.font.h2.fontSize};
`;

export const P = styled.Text`
  color: ${Theme.colors.black};
  font-family: ${Theme.font.p.fontFamily};
  font-style: ${Theme.font.p.fontStyle};
  font-weight: ${Theme.font.p.fontWeight};
  font-size: ${Theme.font.p.fontSize};
`;
