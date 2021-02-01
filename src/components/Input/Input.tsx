import React, { InputHTMLAttributes, FC, ReactNode } from 'react';
import { InputContainer, LabelContainer } from './styles';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  background?: string;
  color?: string;
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
  label: string;
  type?: string;
}

const Input: FC<IProps> = ({
  background = '#fff', color = '#678', label, ...rest
}) => (
  <label>
    <LabelContainer>{label}</LabelContainer>
    <InputContainer background={background} color={color} {... rest} />
  </label>
);

export default Input;
