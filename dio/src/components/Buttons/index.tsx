import React from 'react';
import { ButtonContainer } from './styles';
import { IButtons } from './types';

const Button = ({title, variant="primary",onClick}: IButtons) => {
  return (
    <ButtonContainer variant={variant} onClick={onClick}>
        {title}
    </ButtonContainer>
  )
}

export { Button }
