import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AudioPlayer from './audio-player.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

const mock = {
  song: {
    src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`
  }
};

describe(`AudioPlayer`, () => {
  const {song} = mock;
  const handlePlayButtonClick = jest.fn();
  const playButton = `.track__button`;
  const playButtonOff = `.track__button--pause`;
  const playButtonOn = `.track__button--play`;

  it(`is play`, () => {
    const screen = mount(
        <AudioPlayer
          src = {song.src}
          isPlaying = {true}
          onPlayButtonClick = {handlePlayButtonClick}
        />
    );

    const button = screen.find(playButton);
    button.prop(handlePlayButtonClick());
    expect(handlePlayButtonClick).toHaveBeenCalled();
    expect(button.is(playButtonOff)).toEqual(true);
  });

  it(`is pause`, () => {
    const screen = mount(
        <AudioPlayer
          src = {song.src}
          isPlaying = {false}
          onPlayButtonClick = {handlePlayButtonClick}
        />
    );

    const button = screen.find(playButton);
    button.prop(handlePlayButtonClick());
    expect(handlePlayButtonClick).toHaveBeenCalled();
    expect(button.is(playButtonOn)).toEqual(true);
  });
});
