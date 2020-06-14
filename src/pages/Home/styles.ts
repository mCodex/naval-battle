import styled, { css } from 'styled-components';

interface SquareProps {
  isAShipPosition: () => boolean;
}

export const MainContainer = styled.main`
  display: flex;
`;

export const LeftContainer = styled.div``;

export const Board = styled.table``;

export const Square = styled.div<SquareProps>`
  border: 1px solid #00000060;
  width: 50px;
  height: 50px;
  background-color: #fff;

  ${(props) =>
    props.isAShipPosition &&
    css`
      background-color: red;
    `};
`;
