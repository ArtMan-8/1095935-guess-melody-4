import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer.js';

import {GameType} from '../../const.js';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import GameScreen from '../game-screen/game-screen.jsx';
import GameWinScreen from '../game-win-screen/game-win-screen.jsx';
import GameOverScreen from '../game-over-screen/game-over-screen.jsx';

import withActivePlayer from '../../hocs/with-active-player/with-active-player.jsx';
import withUserAnswer from '../../hocs/with-user-answer/with-user-answer.js';
import QuestionArtistScreen from '../question-artist/question-artist-screen.jsx';
import QuestionGenreScreen from '../question-genre/question-genre-screen.jsx';

const QuestionArtistScreenWrapped = withActivePlayer(QuestionArtistScreen);
const QuestionGenreScreenWrapped = withActivePlayer(withUserAnswer(QuestionGenreScreen));

class App extends PureComponent {

  _renderGameScreen() {
    const {
      maxMistakes,
      mistakes,
      questions,
      step,
      onUserAnswer,
      onWelcomeButtonClick,
    } = this.props;

    const question = questions[step];

    if (step === -1) {
      return (
        <WelcomeScreen
          errorsCount={maxMistakes}
          onWelcomeButtonClick={onWelcomeButtonClick}
        />
      );
    }

    if (mistakes >= maxMistakes) {
      return (
        <GameOverScreen
          onReplayButtonClick={() => {}}
        />
      );
    }

    if (step >= questions.length) {
      return (
        <GameWinScreen
          questionsCount={questions.length}
          mistakesCount={mistakes}
          onReplayButtonClick={() => {}}
        />
      );
    }

    if (question) {
      switch (question.type) {
        case GameType.ARTIST:
          return (
            <GameScreen type={question.type}>
              <QuestionArtistScreenWrapped
                question={question}
                onAnswer={onUserAnswer}
              />
            </GameScreen>
          );
        case GameType.GENRE:
          return (
            <GameScreen type={question.type}>
              <QuestionGenreScreenWrapped
                question={question}
                onAnswer={onUserAnswer}
              />
            </GameScreen>
          );
      }
    }

    return null;
  }

  render() {
    const {questions} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderGameScreen()}
          </Route>
          <Route exact path="/dev-artist">
            <QuestionArtistScreenWrapped
              question={questions[1]}
              onAnswer={() => {}}
            />
          </Route>
          <Route exact path="/dev-genre">
            <QuestionGenreScreenWrapped
              question={questions[0]}
              onAnswer={() => {}}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  maxMistakes: PropTypes.number.isRequired,
  mistakes: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
  step: PropTypes.number.isRequired,
  onUserAnswer: PropTypes.func.isRequired,
  onWelcomeButtonClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  step: state.step,
  maxMistakes: state.maxMistakes,
  questions: state.questions,
  mistakes: state.mistakes,
});

const mapDispatchToProps = (dispatch) => ({
  onWelcomeButtonClick() {
    dispatch(ActionCreator.incrementStep());
  },
  onUserAnswer(question, answer) {
    dispatch(ActionCreator.incrementStep());
    dispatch(ActionCreator.incrementMistake(question, answer));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
