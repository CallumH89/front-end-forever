import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: ${props => (props.inverted ? props.theme.btnColorPrimary : props.theme.btnColorSecondary)};
  border: 2px solid ${props => props.theme.btnColorPrimary};
  border-radius: 4px;
  color: ${props => (props.inverted ? props.theme.btnColorSecondary : props.theme.btnColorPrimary)};
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  margin: 0.5rem;
  padding: 0.5rem;
  width: 200px;
  :hover {
    background: ${props => (props.inverted ? props.theme.btnColorSecondary : props.theme.btnColorPrimary)};
    color: ${props => (props.inverted ? props.theme.btnColorPrimary : props.theme.btnColorSecondary)};
  }
`;

Button.defaultProps = {
  theme: {
    btnColorPrimary: '#000',
    btnColorSecondary: '#fff'
  }
};

export default class Buttons extends React.Component {
  render() {
    return <Button inverted={this.props.inverted}>Default</Button>;
  }
}
