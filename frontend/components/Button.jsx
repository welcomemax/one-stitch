import styled from 'styled-components/macro';
import { mixins } from '../utils';

export const Button = styled.button`
  font-size: 15px;
  font-weight: bold;
  padding: 10px 16px;
  border: none;
  outline: none;
  cursor: pointer;
  background: none;
  border-radius: 4px;
  width: 100%;
  ${mixins.shadow};
`;
