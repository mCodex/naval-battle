import styled, { css } from 'styled-components';

interface SquareProps {
  isAShipPosition: boolean;
  isEmpty: boolean;
}

export const MainContainer = styled.main`
  display: flex;
`;

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

  ${(props) =>
    props.isEmpty &&
    css`
      background-color: blue;
    `};
`;

export const UserMovesContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 10px;
  padding: 20px;
  border-radius: 50%;
  background-color: olive;
  text-align: center;

  p {
    font-weight: 300;
  }
`;
