import React from 'react';
import renderer from 'react-test-renderer';
import AuthScreen from './auth-screen.jsx';

const noop = () => {};

describe(`AuthScreen`, () => {
  it(`Render`, () => {
    const tree = renderer.create(
        <AuthScreen
          onReplayButtonClick={noop}
          onSubmit={noop}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
