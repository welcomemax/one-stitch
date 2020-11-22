import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  width: ${({ _size }) => _size}px;
  height: ${({ _size }) => _size}px;
  border-color: ${({ _color }) => _color};
  border-top-color: transparent;
  display: block;
  border-style: solid;
  border-radius: 50%;
  border-width: 2px;
  animation: ${spin} 1s infinite linear;
`;

const Text = styled.div`
  margin-top: 20px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export function Loader({
  size = 40,
  color = '#111',
  children,
  ...forwardingProps
}) {
  return (
    <Container {...forwardingProps}>
      <Spinner _size={size} _color={color} />
      {children && <Text>{children}</Text>}
    </Container>
  );
}
