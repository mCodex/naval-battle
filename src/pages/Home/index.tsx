import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { uuid } from 'uuidv4';

import ships from '../../utils/ships';

import generateRandomNumber from '../../utils/generateRandomNumber';

import { LeftContainer, MainContainer, Board, Square } from './styles';
import checkPossiblePosition from '../../utils/checkPossiblePosition';

const Home: React.FC = () => {
  const board = new Array(10).fill('');

  const shipsPositions = useMemo(() => {
    const positions = ships.map((size) => {
      const startPos = generateRandomNumber();
      const data = checkPossiblePosition(size, startPos);
      return data;
    });
    return positions.flat();
  }, []);

  const checkIfSquareIsAShipPosition = useCallback(
    (row, col) => {
      const position = Number(`${row}${col}`);
      console.log(position);
      return shipsPositions.includes(position);
    },
    [shipsPositions],
  );

  return (
    <MainContainer>
      <LeftContainer>
        <span>Hello</span>
      </LeftContainer>
      <Board>
        <tbody>
          {board.map((_, i) => (
            <tr key={uuid()}>
              {board.map((_, j) => (
                <td key={uuid()}>
                  <Square
                    isAShipPosition={() => checkIfSquareIsAShipPosition(i, j)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Board>
    </MainContainer>
  );
};

export default Home;
