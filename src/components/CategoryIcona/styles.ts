import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  /* justify-content: center; */
  
/* flex: 1; */

  height: ${RFValue(100)}px;
  width: ${RFValue(80)}px;
  margin-right: ${({ theme }) => theme.display.padding_app}px;
  /* padding: 5px 0; */
  /* margin: 0 ${({ theme }) => theme.display.padding_app}px; */
`;

export const Button = styled(RectButton)`
  align-items: center;
  justify-content: center;
`;

export const Circle = styled.View`
  width: ${RFValue(80)}px;
  height: ${RFValue(80)}px;
  border-radius: ${RFValue(40)}px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 2
})`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.family.subtitle};
  font-size: ${({ theme }) => theme.fonts.size.small}px;
  text-align: center;
`;

