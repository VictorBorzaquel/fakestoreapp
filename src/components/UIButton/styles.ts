import styled, { css } from "styled-components/native";
import { Ionicons } from '@expo/vector-icons';
import { RectButton } from "react-native-gesture-handler";
import { ColorType } from "../../global/interfaces";

interface IContainer {
  data: {
    color: string | undefined;
    type: ColorType;
    icon: string | undefined;
  }
}

export const Container = styled(RectButton) <IContainer>`
  flex-direction: row;
  width: 100%;
  height: ${({ theme }) => theme.display.button_height}px;
  border-radius: ${({ theme }) => theme.display.border_radius}px;

  align-items: center;
  justify-content: ${({ data }) => !data.icon ? 'center' : 'flex-start'};
  
  background-color: ${({ theme, data }) => !!data.color
    ? data.color
    : theme.colors[`${data.type}_dark`]
  };
`;

export const IconWrapper = styled.View`
  height: ${({ theme }) => theme.display.button_height}px;
  width: ${({ theme }) => theme.display.button_height}px;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(Ionicons).attrs({
  color: 'white',
  size: 24
})``;

export const ButtonTitle = styled.Text.attrs({
  adjustsFontSizeToFit: true,
})`
  color: white;
  font-family: ${({ theme }) => theme.fonts.family.title};
  font-size: ${({ theme }) => theme.fonts.size.medium}px;
`;