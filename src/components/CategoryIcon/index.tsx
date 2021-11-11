import React from 'react';
import { IconNameType } from '../../global/interfaces';
import { Ionicons } from '@expo/vector-icons';
import { Container } from './styles';

interface IStyleIcon {
  iconName: IconNameType;
  title: string;
  backgroundColor: string;
}

export function CategoryIcon({ size = 40, category }: {
  size?: number;
  category: string;
}) {
  const prop: IStyleIcon | undefined = (() => {
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
      default: return undefined;
    }
  })()

  if (!prop) return null;
  return (
    <Container color={prop.backgroundColor} size={size}>
      <Ionicons
        name={prop.iconName}
        color='#2e2e2e'
        size={size / 1.7}
      />
    </Container>
  );
}
