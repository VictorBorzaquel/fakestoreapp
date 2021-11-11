import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Container = styled(RectButton)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: ${({ theme }) => theme.display.padding_app}px;
  background-color: white;

  z-index: 99;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.family.title};
  font-size: ${({ theme }) => theme.fonts.size.medium}px;
  padding-left: ${({ theme }) => theme.display.padding_app}px;
`;