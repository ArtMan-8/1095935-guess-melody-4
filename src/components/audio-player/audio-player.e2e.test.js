import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AudioPlayer from './audio-player.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`AudioPlayer`, () => {
  it(`Click by Play button calls callback`, () => {
    const handlePlayButtonClick = jest.fn();
    const wrapper = shallow(
        <AudioPlayer
          isLoading={false}
          isPlaying={false}
          onPlayButtonClick={handlePlayButtonClick}>
          <audio />
        </AudioPlayer>);

    wrapper.find(`.track__button`).simulate(`click`);
    expect(handlePlayButtonClick).toHaveBeenCalledTimes(1);
  });
});
