import React from 'react';
import { ListRenderItem, StyleProp, ViewStyle } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';
import { TCategory } from '../../services/apiProps';
import { CategoryIcon } from '../CategoryIcon';

import {
  Container,
  Header,
  MoreButton,
  MoreTitle,
  Store,
  StoreButton,
  StoreList,
  StoreTitle,
  Title
} from './styles';

type RenderItemType = ListRenderItem<TCategory> | null | undefined

export function CategoryList({ data, title, onPress }: {
  data: TCategory[];
  title: string;
  onPress(category: TCategory): void;
}) {
  const theme = useTheme()

  const RenderItem: RenderItemType = ({ item }) => (
    <StoreButton onPress={() => onPress(item)}>
      <Store>
        <CategoryIcon size={80} category={item} />
        <StoreTitle>{item}</StoreTitle>
      </Store>
    </StoreButton>
  )

  const contentContainerStyle: StyleProp<ViewStyle> = {
    paddingLeft: theme.display.padding_app
  }

  return (
    <Container>
      <Header>
        <Title>{title}</Title>

        {/* <MoreButton>
          <MoreTitle>Ver mais</MoreTitle>
        </MoreButton> */}
      </Header>

      <StoreList
        data={data}
        contentContainerStyle={contentContainerStyle}
        keyExtractor={item => item}
        renderItem={RenderItem}
      />
    </Container>
  )
}