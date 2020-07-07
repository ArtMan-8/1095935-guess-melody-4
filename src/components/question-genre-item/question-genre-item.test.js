import React from 'react';
import renderer from 'react-test-renderer';
import QuestionGenreItem from './question-genre-item.jsx';

const answer = {
  src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
  genre: `rock`,
};

describe(`QuestionGenreItem`, () => {
  it(`Render`, () => {
    const tree = renderer.create((
      <QuestionGenreItem
        answer={answer}
        id={0}
        onChange={() => {}}
        renderPlayer={() => {}}
        userAnswer={false}
      />
    )).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
