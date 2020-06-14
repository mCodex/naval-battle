export default (shipSize: number, startPos: number) => {
  /**
   * The range of each row is from 1 to 10
   */

  const relativeStartPos =
    startPos <= 10 ? startPos : Number(String(startPos).slice(1, 2));

  /**
   * Check every possibile position
   */
  const canGoLeft = relativeStartPos - shipSize >= 1;
  const canGoRight = relativeStartPos + shipSize <= 10;

  const canGoUp = startPos - shipSize * 10 >= 1;
  const canGoDown = startPos + shipSize * 10 <= 100;

  const availablePositions = [];

  if (canGoLeft) availablePositions.push('LEFT');
  if (canGoRight) availablePositions.push('RIGHT');
  if (canGoUp) availablePositions.push('UP');
  if (canGoDown) availablePositions.push('DOWN');

  // Select random position

  const selectedPosition =
    availablePositions[Math.floor(Math.random() * availablePositions.length)];

  switch (selectedPosition) {
    case 'LEFT':
      return new Array(shipSize).fill('').map((_, i) => startPos - i);
    case 'RIGHT':
      return new Array(shipSize).fill('').map((_, i) => startPos + i);
    case 'UP':
      return new Array(shipSize)
        .fill('')
        .map((_, i) => startPos - i * shipSize);
    case 'DOWN':
      return new Array(shipSize)
        .fill('')
        .map((_, i) => startPos + i * shipSize);
    default:
      break;
  }
};
