import React, { Component } from 'react';

class Question extends Component {

  constructor(props) {
    super(props);

    this.state = { userAnswer: '', submitted: false };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.assignScore = this.assignScore.bind(this);
    this.assignScore = this.assignScore.bind(this);
  }

  handleChange(event) {
    this.setState({ userAnswer: event.target.value });
  }

  handleSubmit(event) {
    this.setState({ submitted: true });
    event.preventDefault();
  }

  assignScore(score, event) {
    this.setState({ score: score });
    this.props.proceed(score);
    event.preventDefault();
  }

  render() {
    let q = this.props.q;
    if (this.state.submitted === true) {
      return(
        <div className="Question">
          <p>Du svarte: <code>{ this.state.userAnswer }</code></p>
          <p>Riktig svar var: <code>{ q.answer }</code></p>
          <p>Vil du si du svarte riktig?</p>

          <button onClick={(e) => this.assignScore(1.0, e) }>Ja!</button>
          <button onClick={(e) => this.assignScore(0.5, e) }>Nja, halvt poeng</button>
          <button onClick={(e) => this.assignScore(0, e) }>Nei</button>
        </div>
      );
    } else {
      return(
        <div className="Question">
          <p className="question">{ q.question }</p>

          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.userAnswer} onChange={this.handleChange} />
            <input type="submit" value="Sjekk svaret!" />
          </form>
        </div>
      );
    }
  }
}

export default Question;
