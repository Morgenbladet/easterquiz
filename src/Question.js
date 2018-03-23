import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

class Question extends Component {

  constructor(props) {
    super(props);

    this.state = { userAnswer: '', submitted: false, committed: false };

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
    this.setState({ score: score, committed: true });
    this.props.updateScore(this.props.key, score);
    event.preventDefault();
  }

  render() {
    let q = this.props.q;

    let color = 'Question ';
    switch(this.state.score) {
      case 1:
        color += 'correct';
        break;
      case 0.5:
        color += 'semicorrect';
        break;
      case 0:
        color += 'fail';
        break;
      default:
        color += 'nocolor';
        break;
    }

    const input = (
      <div key={1}>
        <p className="question">{ this.props.n }: { q.question }</p>

        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.userAnswer}
            onChange={this.handleChange} />
          <input type="submit" value="Svaret avgitt!" />
        </form>
      </div>
    );

    const correct = (
      <div key={2}>
        <p className="question">{ this.props.n }: { q.question }</p>

        <p>Du svarte: <code>{ this.state.userAnswer }</code></p>
        <p>Riktig svar var: <code>{ q.answer }</code></p>
        <p>Vil du si du svarte riktig?</p>

        <button onClick={(e) => this.assignScore(1.0, e) }>Ja!</button>
        <button onClick={(e) => this.assignScore(0.5, e) }>Nja, halvt poeng</button>
        <button onClick={(e) => this.assignScore(0, e) }>Nei</button>
      </div>
    );

    const result = (
      <p key={3}>
        { this.props.n }: <em>{ this.props.q.question }</em>
        <span> </span>
        Du svarte <code>{ this.state.userAnswer }</code>,
        riktig svar er <code>{ this.props.q.answer }</code>
      </p>
    );

    let show = null;
    if (this.state.committed) {
      show = result;
    } else if (this.state.submitted) {
      show = correct;
    } else {
      show = input;
    }

    return(
      <div className={color}>
        <CSSTransitionGroup
          transitionName="fade"
          transitionEnterTimeout={1000}>
          { show }
        </CSSTransitionGroup>
      </div>
    );
  }
}

  export default Question;
