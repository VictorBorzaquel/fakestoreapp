import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View<{size: number, color: string}>`
  height: ${({size}) => RFValue(size)}px;
  width: ${({size}) => RFValue(size)}px;
  border-radius: ${({size}) => RFValue(size) / 2}px;
  background-color: ${({ color}) => color};

  justify-content: center;
  align-items: center;
`;