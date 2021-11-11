import { FlatList } from "react-native";
import styled from "styled-components/native";
import { IProduct, TCategory } from "../../services/apiProps";

export const Container = styled.View`
  flex: 1;
  background-color: white;
`;

export const Content = styled.ScrollView`
  flex: 1;
`;

export const Categories = styled(FlatList as new () => FlatList<TCategory>)`

`;

export const Header = styled.View`
  background-color: white;
  padding: ${({ theme }) => theme.display.padding_app}px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.line};
`;

export const Logo = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.family.title};
  font-size: ${({ theme }) => theme.fonts.size.extra_largue}px;
`;


