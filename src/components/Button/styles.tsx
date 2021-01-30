import styled from 'styled-components';

interface IButtonContainerProps {
  background: string;
  color: string;
}

export const ButtonContainer = styled.button<IButtonContainerProps>`
  color: purple;
  background: pink;
  outline: none;
  border: 0;
  padding: 10px;
  border-radius: 5px;
  transition: 0.2s;
  cursor: pointer;

  display: flex;
  justify-content: space-around;
  gap: 5px;

  background: ${(props) => props.background};
  color: ${(props) => props.color};

  &:hover {
    background: '#987'
  }

  &:disabled {
    background: '#F56'
    opacity: 0.4;
    cursor: default;
  }
`;
