import { Button as B } from 'rebass';
import { Link as L } from 'react-router-dom';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Button = styled(B)`
  ${(props) =>
    props.primary
      ? css`
          background-color: indigo;
          font-size: 17px;
          padding: 5px 10px;
          margin: 5px;
        `
      : css`
          background-color: ${props.bgC};
          font-size: 17px;
          padding: 5px 10px;
          margin: 5px;
        `};
  color: #fff;
  cursor: pointer;
  @media (max-width: 600px) {
    font-size: 13px;
    padding: 2px;
  }
`;

export const Link = styled(L)`
  text-decoration: none;
  color: #fff;
  font-weight: normal;
  font-family: monospace;
  :hover {
    color: #000;
  }
`;

export const Table = styled.table`
  width: 100%;
  margin-top: 10px;
  td {
    padding-left: 10px;
  }
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody`
  > tr:nth-of-type(odd) {
    background-color: #f2f2f2;
  }
`;

export const Tr = styled.tr`
  font-size: 20px;
  color: #000;
  opacity: 0.8;
  @media (max-width: 900px) {
    font-size: 12px;
  }
`;

export const Th = styled.th`
  padding: 10px;
  font-size: 20px;
  color: #000;
  opacity: 0.85;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  @media (max-width: 900px) {
    font-size: 13px;
  }
`;
