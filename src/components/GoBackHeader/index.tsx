import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import {
  Container,
  Title
} from './styles';
import { useTheme } from 'styled-components';

export function GoBackHeader({ navigation, title }: {
  navigation: any;
  title: string;
}) {
  const theme = useTheme()

  return (
    <Container onPress={navigation.goBack}>
      <Ionicons
        name="chevron-back"
        color={theme.colors.title}
        size={24}
      />

      <Title>{title}</Title>
    </Container>
  );
}
