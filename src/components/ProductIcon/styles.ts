import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  flex: 1;
  background-color: white;
  padding: ${({ theme }) => theme.display.padding_app}px;
`;

export const Image = styled.Image.attrs({

})`
  /* width: 100px; */
  height: ${RFValue(150)}px;
`;

export const Footer = styled.View`
  align-items: center;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 2
})`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.family.title};
  font-size: ${({ theme }) => theme.fonts.size.small}px;
  padding: 5px 0;
`;

export const Value = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.family.text};
  font-size: ${({ theme }) => theme.fonts.size.small}px;
`;