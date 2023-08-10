import React, { Component } from 'react';
import { Feedback } from './Feedback/Feedback';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  getFeedback = type => {
    this.setState(prevState => {
      return {
        [type]: prevState[type] + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <Feedback onIncrement={this.getFeedback} />
      </div>
    );
  }
}
