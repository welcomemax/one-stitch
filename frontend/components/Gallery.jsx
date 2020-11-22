import React, { forwardRef } from 'react';
import styled from 'styled-components/macro';

const Container = styled.div``;

export const Gallery = forwardRef(
  (
    { photos, backgroundColor, backgroundImage, ...forwardingProps },
    forwardingRef
  ) => {
    return (
      <Container ref={forwardingRef} {...forwardingProps}>
        {photos.map(({ url }) => (
          <img src={url} />
        ))}
      </Container>
    );
  }
);

Gallery.displayName = 'forwardRef(Gallery)';
