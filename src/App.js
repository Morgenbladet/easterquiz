import React, { Component } from 'react';
import Question from './Question.js';
import './App.css';
import items from './questions.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.moveNext = this.moveNext.bind(this);

    this.state  = { current_question: 0, score: 0, questions: items.map((q, i) =>
      <Question key={i} proceed={this.moveNext} q={q} />) }
  }

  moveNext(score) {
    this.setState((prevState, props) => ({
      score: prevState.score + score,
      current_question: prevState.current_question + 1
    }));
  }

  render() {
    let curr = this.state.current_question;
    let curr_q = this.state.questions[curr];
    let num_q = this.state.questions.length;
    return (
      <div className="App">
        <h2>Påskequizen</h2>
        <p>Spørsmål { curr + 1 } av { num_q }. { this.state.score } poeng. </p>
        { this.state.questions[this.state.current_question] }
      </div>
    );
  }
}

export default App;
