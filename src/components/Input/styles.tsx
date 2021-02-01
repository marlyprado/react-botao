import styled from 'styled-components';

interface IInputContainerProps {
  background: string;
  color: string;
}

export const InputContainer = styled.input<IInputContainerProps>`
  color: purple;
  background: pink;
`;

export const LabelContainer = styled.div`
  font-weight: bold;
`;
