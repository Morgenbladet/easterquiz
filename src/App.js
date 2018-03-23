import React, { Component } from 'react';
import Question from './Question.js';
import './App.css';
import items from './questions.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.updateScore = this.updateScore.bind(this);

    this.state  = { score: 0, completed: 0, questions: items.map((q, i) =>
      <Question key={i} updateScore={this.updateScore} q={q} n={i+1} />) }
  }

  updateScore(index, score) {
    this.setState((prevState, props) => ({
      score: prevState.score + score,
      completed: prevState.completed + 1
    }));
  }

  render() {
    return (
      <div className="App">
        <h2>Påskequizen</h2>
        <div className="status">
          <strong>{ this.state.score }</strong> poeng
          ({ this.state.completed } fullført).
        </div>
        { this.state.questions }
      </div>
    );
  }
}

export default App;
