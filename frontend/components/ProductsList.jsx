import React from 'react';
import styled from 'styled-components/macro';
import { getUploadedMedia } from '../utils';
import { Link } from './Link';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 16px;
`;

const Card = styled(Link)`
  display: block;
  border-radius: 8px;
  background: #fafafa;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  transition: box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  :hover {
    box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
      0 5px 8px 0 rgba(0, 0, 0, 0.14), 0 1px 14px 0 rgba(0, 0, 0, 0.12);
  }
`;

const CardBody = styled.div`
  padding: 16px;
`;
const CardImage = styled.div`
  img {
    display: block;
    margin: 0 auto;
  }
`;

export const ProductsList = ({ products }) => {
  return (
    <Grid>
      {products.map(({ id, slug, title, description, image }) => (
        <Card key={id} href={`/products/${slug}`}>
          <CardImage>
            <img
              src={getUploadedMedia(image.formats.thumbnail.url)}
              alt={title}
            />
          </CardImage>
          <CardBody>
            <h4>{title} sticker</h4>
            <div className="mt-1 text-sm text-gray-700">{description}</div>
          </CardBody>
        </Card>
      ))}
    </Grid>
  );
};
