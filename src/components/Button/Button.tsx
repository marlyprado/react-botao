import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { ButtonContainer } from './styles';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  background?: string;
  color?: string;
  loading?: boolean;
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
}

const Button: FC<IProps> = ({
  children,
  background = '#098',
  color = '#654',
  loading,
  iconStart, iconEnd, ...rest
}) => (
  <ButtonContainer
    background={background}
    color={color}
    {... rest}
  >

    {loading ? 'carregando...' : (
      <>
        {iconStart && iconStart}
        {children}
        {iconEnd && iconEnd}
      </>
    )}
  </ButtonContainer>
);

export default Button;
