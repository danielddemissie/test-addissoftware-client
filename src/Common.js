import { Button as B } from "rebass";
import { Link as L } from "react-router-dom";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

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
`;

export const Link = styled(L)`
  text-decoration: none;
  color: #fff;
  margin-left: 40px;
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

export const Thead = styled.thead`
  > tr {
    font-size: 20px;
    > th {
      padding: 10px 20px;
    }
  }
`;

export const Tbody = styled.tbody`
  > tr:nth-of-type(odd) {
    background-color: #f2f2f2;
  }
`;
