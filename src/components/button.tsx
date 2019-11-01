import * as React from "react";
import styled from 'styled-components';

interface ButtonProps {
  inverted?: boolean,
  small?: boolean,
  large?: boolean,
  text?: string
}

const Button = styled("button")<ButtonProps>`
  background: ${props => (props.inverted ? props.theme.btnColorPrimary : props.theme.btnColorSecondary)};
  border: 2px solid ${props => props.theme.btnColorPrimary};
  border-radius: 4px;
  color: ${props => (props.inverted ? props.theme.btnColorSecondary : props.theme.btnColorPrimary)};
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  margin: 0.5rem;
  padding: ${props => (props.small ? props.theme.btnPaddingSmall : props.large ? props.theme.btnPaddingLarge : props.theme.btnPaddingRegular)} 0.5rem;  width: 200px;
  :hover {
    background: ${props => (props.inverted ? props.theme.btnColorSecondary : props.theme.btnColorPrimary)};
    color: ${props => (props.inverted ? props.theme.btnColorPrimary : props.theme.btnColorSecondary)};
  }
`;

Button.defaultProps = {
  theme: {
    btnColorPrimary: '#000',
    btnColorSecondary: '#fff',
    btnPaddingLarge: '1rem',
    btnPaddingRegular: '0.5rem',
    btnPaddingSmall: '0.2rem'
  }
};


const Buttons: React.FunctionComponent<ButtonProps> = props => {
  return (
    <Button inverted={props.inverted} small={props.small} large={props.large}>
      {props.text}
    </Button>
  );
} 

export default Buttons;