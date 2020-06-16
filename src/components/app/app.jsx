import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from "react-router-dom";

import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import QuestionArtistScreen from '../question-artist/question-artist.jsx';
import QuestionGenreScreen from '../question-genre/question-genre.jsx';


class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {errorsCount, question} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <WelcomeScreen
              errorsCount = {errorsCount}
              onWelcomeButtonClick = {() => {}}
            />
          </Route>
          <Route exact path="/dev-artist">
            <QuestionArtistScreen
              question = {question[1]}
            />
          </Route>
          <Route exact path="/dev-genre">
            <QuestionGenreScreen
              question = {question[0]}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
  question: PropTypes.array.isRequired,
};

export default App;
