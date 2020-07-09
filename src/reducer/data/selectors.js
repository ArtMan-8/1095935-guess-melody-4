import {createSelector} from 'reselect';
import NameSpace from '../name-space.js';

const randomFilter = () => Math.random() > 0.5;

export const getQuestions = (state) => state[NameSpace.DATA].questions;

export const getArtistQuestions = createSelector(
    getQuestions,
    randomFilter,
    (resultOne, resultTwo) => {
      return resultOne.filter((it) => resultTwo && it.type === `artist`);
    }
);

export const getGenreQuestions = createSelector(
    getQuestions,
    (questions) => {
      return questions.filter((it) => it.type === `genre`);
    }
);
