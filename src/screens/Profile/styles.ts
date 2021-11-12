import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  
`;

export const User = styled.View`
  background-color: white;
  width: 100%;
  align-items: center;
  padding: ${({ theme }) => theme.display.padding_app}px 0;
`;

export const Avatar = styled.Image`
  height: 128px;
  width: 128px;
`;

export const Name = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.family.title};
  font-size: ${({ theme }) => theme.fonts.size.largue}px;
  padding-top: 5px;
`;