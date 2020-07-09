import NameSpace from '../name-space.js';

const NAME_SPACE = NameSpace.GAME;

export const getStep = (state) => state[NAME_SPACE].step;
export const getMistakes = (state) => state[NAME_SPACE].mistakes;
export const getMaxMistakes = (state) => state[NAME_SPACE].maxMistakes;
