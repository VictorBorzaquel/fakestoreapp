import React from 'react';
import { IconNameType } from '../../global/interfaces';
import { TCategory } from '../../services/apiProps';
import { Ionicons } from '@expo/vector-icons';

import {
  Button,
  Circle,
  Container,
  Title
} from './styles';
import { RectButtonProps } from 'react-native-gesture-handler';

interface IStyleIcon {
  iconName: IconNameType;
  title: string;
  backgroundColor: string;
}

interface Props extends RectButtonProps {
  category: TCategory
}

export function CategoryIcon({ category, ...rest }: Props) {
  const { iconName, title, backgroundColor }: IStyleIcon = (() => {
    switch (category) {
      case 'electronics': return {
        iconName: 'tv',
        title: 'Electronics',
        backgroundColor: '#c4c4c4'
      }
      case 'jewelery': return {
        iconName: 'medal',
        title: 'Jewelery',
        backgroundColor: '#d6e775'
      }
      case "men's clothing": return {
        iconName: 'man',
        title: 'Man',
        backgroundColor: '#7cd8db'
      }
      case "women's clothing": return {
        iconName: 'woman',
        title: 'Woman',
        backgroundColor: '#e890eb'
      }
      default: return {
        iconName: 'alert-circle',
        title: 'Padrão',
        backgroundColor: '#c4c4c4'
      }
    }
  })()

  return (
    <Container>
      <Button {...rest}>
        <Circle style={{ backgroundColor }}>
        <Ionicons
          name={iconName}
          color='#2e2e2e'
          size={40}
        />
      </Circle>

      <Title>{category}</Title>
      </Button>
      
    </Container>
  );
}
