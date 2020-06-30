import React from 'react';
import renderer from 'react-test-renderer';
import Mistakes from './mistakes.jsx';

describe(`Mistakes`, () => {
  it(`Render with one zero count`, () => {
    const tree = renderer.create(
        <Mistakes
          count={0}
        />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render with one one count`, () => {
    const tree = renderer.create(
        <Mistakes
          count={1}
        />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
