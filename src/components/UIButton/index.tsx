import React from 'react';


import {
  ButtonTitle,
  Icon,
  Container,
  IconWrapper
} from './styles';
import { ColorType, IconNameType } from '../../global/interfaces';
import { RectButtonProps } from 'react-native-gesture-handler';

interface Props extends RectButtonProps {
  icon?: IconNameType;
  color?: string;
  type?: ColorType;
  title: string;
}

export function UIButton({ icon, color, type = 'success', title, ...rest }: Props) {
  return (
    <Container data={{ color, type, icon }} {...rest}>
      {!!icon && (
        <IconWrapper>
          <Icon name={icon} />
        </IconWrapper>
      )}
      <ButtonTitle>{title}</ButtonTitle>
    </Container>
  );
}
