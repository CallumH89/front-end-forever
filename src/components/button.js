import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

const Button = styled.button`
  background: #fff;
  border: 2px solid ${props => props.theme.btnColorPrimary};
  border-radius: 4px;
  color: ${props => props.theme.btnColorPrimary};
  display: inline-block;
  font-size: 1rem;
  margin: 0.5rem;
  padding: 0.5rem;
  width: 200px;
  :hover {
    background: ${props => props.theme.btnColorPrimary};
    color: ${props => props.theme.btnColorSecondary};
  }
`;

Button.defaultProps = {
  theme: {
    btnColorPrimary: '#000',
    btnColorSecondary: '#fff'
  }
};

const theme = {
  btnColorPrimary: '#e4002b',
  btnColorSecondary: '#fff'
};

const InvertedButton = styled(Button)`
  background: ${props => props.theme.btnColorPrimary};
  color: ${props => props.theme.btnColorSecondary};
  :hover {
    background: ${props => props.theme.btnColorSecondary};
    color: ${props => props.theme.btnColorPrimary};
  }
`;

export default class Buttons extends React.Component {
  render() {
    return (
      <>
        <Button>Default</Button>
        <ThemeProvider theme={theme}>
          <Button>Button</Button>
          <InvertedButton>Inverted</InvertedButton>
        </ThemeProvider>
      </>
    );
  }
}
