import React from 'react';
import styled from 'styled-components/macro';
import { Link } from './Link';
import { mixins } from '../utils';

const List = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const Item = styled(Link)`
  padding: 8px 16px;
  background: #fff;
  border-radius: 4px;
  ${mixins.shadow};

  :not(:last-child) {
    margin-right: 16px;
  }
`;

export const CategoriesList = ({ categories }) => {
  return (
    <List>
      {categories.map(({ id, slug, name }) => (
        <Item href={`/categories/${slug}`} key={id}>
          {name}
        </Item>
      ))}
    </List>
  );
};
