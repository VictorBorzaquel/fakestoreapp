import React from 'react';
import { ListRenderItem, StyleProp, ViewStyle } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';
import { IProduct, TCategory } from '../../services/apiProps';
import { CategoryIcon } from '../CategoryIcon';
import { ProductIcon } from '../ProductIcon';

import {
  Container,
  Header,
  MoreButton,
  MoreTitle,
  Products,
  Store,
  StoreButton,
  StoreTitle,
  Title
} from './styles';

type RenderItemType = ListRenderItem<TCategory> | null | undefined

export function ProductList({ data, title, onPress }: {
  data: IProduct[];
  title: string;
  onPress(category: IProduct): void;
}) {
  const theme = useTheme()

  return (
    <Container>
      <Header>
        <Title>{title}</Title>

        {/* <MoreButton>
          <MoreTitle>Ver mais</MoreTitle>
        </MoreButton> */}
      </Header>

      <Products
        keyExtractor={item => String(item.id)}
        data={data}
        renderItem={({ item }) => (
          <ProductIcon data={item} onPress={() => onPress(item)} />
        )}
      />
    </Container>
  )
}