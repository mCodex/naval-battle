import React from 'react';

import { Container } from './styles';

const RulesContainer: React.FC = () => {
  return (
    <Container>
      <div>
        <h3>How it works</h3>
        <ul>
          <li>The board has 5 ships randomly placed:</li>
          <ul>
            <li>1x - Size: 5 cells</li>
          </ul>
          <ul>
            <li>1x - Size: 4 cells</li>
          </ul>
          <ul>
            <li>1x - Size: 3 cells</li>
          </ul>
          <ul>
            <li>1x - Size: 2 cells</li>
          </ul>
          <ul>
            <li>1x - Size: 1 cell</li>
          </ul>
          <li>Select a cell on the right board</li>
          <li>If it is a ship the color will change to red. Otherwise, blue</li>
        </ul>
      </div>
    </Container>
  );
};

export default RulesContainer;
