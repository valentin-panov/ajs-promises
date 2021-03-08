import GameSavingLoader from './GameSavingLoader';
import GameSaving from './GameSaving';

const gameSavingLoader = new GameSavingLoader();
export default gameSavingLoader
  .load()
  .then((saving) => new GameSaving(saving))
  .catch((error) => {
    throw new Error(error.message);
  });
