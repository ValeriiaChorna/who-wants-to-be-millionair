export default function levelCreator(startStep = 500) {
  let levelList = [];
  levelList[0] = startStep;

  for (let i = 1; i <= 50; ) {
    if (levelList[i - 1] >= 50000) break;
    levelList[i] = 2 * levelList[i - 1];
    i++;
  }
  const currentLevel = levelList.length;
  levelList[currentLevel] = 125000;
  levelList[currentLevel + 1] = 250000;
  levelList[currentLevel + 2] = 500000;
  levelList[currentLevel + 3] = 1000000;

  return levelList;
}
