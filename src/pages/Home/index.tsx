import React, { useMemo, useCallback, useState } from 'react';
import { uuid } from 'uuidv4';

import RulesContainer from '../../components/RulesContainer';
import Header from '../../components/Header';

import ships from '../../utils/ships';
import generateRandomNumber from '../../utils/generateRandomNumber';
import arrangeShipPositions from '../../utils/arrangeShipPositions';

import { MainContainer, Board, Square, UserMovesContainer } from './styles';

const Home: React.FC = () => {
  const board = new Array(10).fill('');
  const [clickedCells, setClickedCells] = useState<Array<number>>([]);
  const [userMoves, setUserMoves] = useState(30);

  const shipsPositions = useMemo(() => {
    const positions = ships.map((size) => {
      const startPos = generateRandomNumber();
      const data = arrangeShipPositions(size, startPos);
      return data;
    });
    return positions.flat();
  }, []);

  const checkIfSquareIsAShipPosition = useCallback(
    (row, col) => {
      const position = Number(`${row}${col}`);
      return (
        clickedCells.includes(position) && shipsPositions.includes(position)
      );
    },
    [clickedCells, shipsPositions],
  );

  const checkIfSquareIsEmpty = useCallback(
    (row, col) => {
      const position = Number(`${row}${col}`);
      return (
        clickedCells.includes(position) && !shipsPositions.includes(position)
      );
    },
    [shipsPositions, clickedCells],
  );

  const handleBoardCellOnClick = useCallback(
    (row, col) => {
      const cellNumber = Number(`${row}${col}`);

      if (userMoves === 0) {
        return;
      }

      if (clickedCells.includes(cellNumber)) {
        return;
      }

      setClickedCells([...clickedCells, cellNumber]);
      setUserMoves(userMoves - 1);
    },
    [userMoves, clickedCells],
  );

  return (
    <>
      <Header />
      <MainContainer>
        <RulesContainer />
        <Board>
          <tbody>
            {board.map((_, i) => (
              <tr key={uuid()}>
                {board.map((__, j) => (
                  <td key={uuid()}>
                    <button
                      type="button"
                      onClick={() => handleBoardCellOnClick(i, j)}
                    >
                      <Square
                        isAShipPosition={checkIfSquareIsAShipPosition(i, j)}
                        isEmpty={checkIfSquareIsEmpty(i, j)}
                      />
                    </button>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </Board>
      </MainContainer>
      <UserMovesContainer>
        <h3>{userMoves}</h3>
        <p>chances</p>
      </UserMovesContainer>
    </>
  );
};

export default Home;
