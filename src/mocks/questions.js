const AVATAR_URL = `https://api.adorable.io/avatars/128`;

export default [
  {
    type: `genre`,
    genre: `rock`,
    answers: [{
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `rock`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/d/d5/Chromatic_Fantasia_%28Bach_BWV_930%29.ogg`,
      genre: `blues`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/0/04/French-suite-5-courante-BWV_816.ogg`,
      genre: `jazz`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/46/Wo_soll_ich_fliehen_hin%2C_BWV_5.ogg`,
      genre: `rock`,
    }],
  }, {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `https://upload.wikimedia.org/wikipedia/commons/1/1d/Prelude_en_Fa_Majeur_BWV_927.ogg`,
    },
    answers: [{
      picture: `${AVATAR_URL}/A`,
      artist: `John Snow`,
    }, {
      picture: `${AVATAR_URL}/B`,
      artist: `Jack Daniels`,
    }, {
      picture: `${AVATAR_URL}/C`,
      artist: `Jim Beam`,
    }],
  }
];
