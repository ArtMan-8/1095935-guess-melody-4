import React from "react";
import renderer from "react-test-renderer";
import GameOverScreen from "./game-over-screen.jsx";

describe(`GameOverScreen`, () => {
  it(`Render`, () => {
    const tree = renderer.create(
        <GameOverScreen
          onReplayButtonClick={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
