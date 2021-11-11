import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { GoBackHeader } from '../../components/GoBackHeader';
import { RootHomeNavigationProps, RootHomeRouteProps } from '../../routes/Home.routes';
import { imageURL } from '../../services/api';
import StarRating from 'react-native-star-rating';
import { Ionicons } from '@expo/vector-icons';

import {
  ButtonWrapper,
  Container,
  Content,
  Section,
  FavoriteButton,
  Image,
  Price,
  ProductImage,
  Rating,
  RatingTitle,
  Stars,
  Title,
  FooterTitle,
  Description
} from './styles';
import { useTheme } from 'styled-components';
import { UIButton } from '../../components/UIButton';
import { currency } from '../../global/language/currency';
import { toCurrency } from '../../utils/translate';

export function ProductDetails() {
  const { params } = useRoute<RootHomeRouteProps<'ProductDetails'>>()
  const navigation = useNavigation<RootHomeNavigationProps<'ProductDetails'>>()
  const theme = useTheme()

  // ! Colocar para alterar no usuario
  const [favorite, setFavorite] = useState(false)
  function toggleFavorite() {
    setFavorite(!favorite)
  }

  return (
    <Container>
      <GoBackHeader title={params.title} navigation={navigation} />

      <Content>
        <ProductImage>
          <Image source={{ uri: imageURL(params.image) }} resizeMode='contain' />
        </ProductImage>
        <Section>
          <Title>{params.title}</Title>

          <Rating>
            <Stars>
              <StarRating
                disabled
                maxStars={5}
                starSize={theme.fonts.size.medium}
                rating={params.rating.rate}
                fullStarColor={theme.colors.star}
                emptyStarColor={theme.colors.text_details}
              />
              <RatingTitle>{`${params.rating.rate} (${params.rating.count})`}</RatingTitle>
            </Stars>

            <FavoriteButton onPress={toggleFavorite}>
              <Ionicons
                name={favorite ? 'heart-circle-outline' : 'heart-circle'}
                color={favorite ? theme.colors.attention : theme.colors.text_details}
                size={50}
              />
            </FavoriteButton>
          </Rating>

          <Price>{toCurrency(params.price)}</Price>

          <ButtonWrapper>
            <UIButton
            icon="cart" 
            title="Add to cart"
          />
          </ButtonWrapper>
          
        </Section>

        <Section>
          <FooterTitle>Description</FooterTitle>

          <Description>{params.description}</Description>
        </Section>
      </Content>
    </Container>
  );
}
