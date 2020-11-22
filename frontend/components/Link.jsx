import React from 'react';
import Router from 'next/router';
import styled from 'styled-components/macro';

const A = styled.a`
  cursor: pointer;
`;

export const Link = ({ href, ...forwardingProps }) => (
  <A onClick={() => Router.push(href)} {...forwardingProps} />
);
