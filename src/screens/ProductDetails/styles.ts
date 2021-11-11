import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.ScrollView``;

export const ProductImage = styled.View`
  width: 100%;
  background-color: white;
  padding: ${({ theme }) => theme.display.padding_app}px;
`;

export const Image = styled.Image.attrs({

})`
  width: 100%;
  height: 200px;
`;

export const Section = styled.View`
  padding: 0 ${({ theme }) => theme.display.padding_app}px;
  background-color: white;
  margin-bottom: ${({ theme }) => theme.display.padding_app / 2}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.subtitle};
  font-family: ${({ theme }) => theme.fonts.family.subtitle};
  font-size: ${({ theme }) => theme.fonts.size.medium}px;
`;

export const Rating = styled.View`
  flex-direction: row;
  padding: 5px 0;
  align-items: center;
  justify-content: space-between;
`;

export const Stars = styled.View`
  flex-direction: row;
`;

export const RatingTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text_details};
  font-family: ${({ theme }) => theme.fonts.family.subtitle};
  font-size: ${({ theme }) => theme.fonts.size.small}px;
  padding-left: 12px;
`;

export const FavoriteButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  
`;

export const Price = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.family.title};
  font-size: ${({ theme }) => theme.fonts.size.largue}px;
  padding: 14px 0;
`;

export const ButtonWrapper = styled.View`
  padding: 14px 0;
`;

export const FooterTitle = styled.Text`
  color: ${({ theme }) => theme.colors.subtitle};
  font-family: ${({ theme }) => theme.fonts.family.subtitle};
  font-size: ${({ theme }) => theme.fonts.size.medium}px;

  padding: ${({ theme }) => theme.display.padding_app}px 0;
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.family.text};
  font-size: ${({ theme }) => theme.fonts.size.small}px;
  line-height: ${({ theme }) => theme.fonts.size.small * 1.7}px;
  padding-bottom: ${({ theme }) => theme.display.padding_app}px;
`;