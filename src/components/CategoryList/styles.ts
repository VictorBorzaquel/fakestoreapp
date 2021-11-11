import { FlatList } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { TCategory } from "../../services/apiProps";

export const Container = styled.View`
  width: 100%;
`;

export const Header = styled.View`
  width: 100%;
  padding: 10px ${({theme})=> theme.display.padding_app}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.family.title};
  font-size: ${({ theme }) => theme.fonts.size.medium}px;
`;

export const MoreButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.4
})``;

export const MoreTitle = styled.Text`
  color: ${({ theme }) => theme.colors.attention_dark};
  font-family: ${({ theme }) => theme.fonts.family.title};
  font-size: ${({ theme }) => theme.fonts.size.small}px;
`;

export const StoreList = styled(FlatList as new () => FlatList<TCategory>).attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  nestedScrollEnabled:true
})`
`;

export const StoreButton = styled(RectButton).attrs({
  activeOpacity: 0.7
})`
  margin-right: ${({ theme }) => theme.display.padding_app}px;
`;

export const Store = styled.View`
  width: ${RFValue(80)}px;
  align-items: center;
`;

export const StoreTitle = styled.Text.attrs({
  numberOfLines: 2
})`
  color: ${({ theme }) => theme.colors.subtitle};
  font-family: ${({ theme }) => theme.fonts.family.subtitle};
  font-size: ${({ theme }) => theme.fonts.size.small}px;
  text-align: center;
  padding-top: 5px;
`;