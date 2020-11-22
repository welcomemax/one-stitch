import React, { forwardRef } from 'react';
import styled from 'styled-components/macro';

const Container = styled.section`
  padding: 40px 0;
`;

const Inner = styled.div`
  margin: 0 auto;
  max-width: var(--width);
`;

export const Section = forwardRef(
  (
    { children, backgroundColor, backgroundImage, ...forwardingProps },
    forwardingRef
  ) => {
    return (
      <Container
        style={{ backgroundColor, backgroundImage }}
        ref={forwardingRef}
        {...forwardingProps}
      >
        <Inner>{children}</Inner>
      </Container>
    );
  }
);

Section.displayName = 'forwardRef(Section)';
