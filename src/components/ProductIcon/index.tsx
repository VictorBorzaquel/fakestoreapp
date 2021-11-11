import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { RootHomeNavigationProps } from '../../routes/Home.routes';
import { imageURL } from '../../services/api';
import { IProduct } from '../../services/apiProps';
import { toCurrency } from '../../utils/translate';

import {
  Container, 
  Footer, 
  Image, 
  Title, 
  Value
} from './styles';

export function ProductIcon({ data, onPress }: { 
  data: IProduct;
  onPress(): void;
}) {

  return (
    <Container onPress={onPress}>
      <Image source={{ uri: imageURL(data.image) }}  resizeMode='contain'/>
      
      <Footer>
        <Title>{data.title}</Title>
        <Value>{toCurrency(data.price)}</Value>
      </Footer>
    </Container>
  );
}
