/**
 * Created by alucas on 14/1/17.
 */
import React, { Component, PropTypes } from 'react';
import ActivityBoard from './ActivityBoard';
import SudokuBoard from './SudokuBoard';

export default class MainBoard extends Component {

  static propTypes = {
    height: React.PropTypes.number,
    width: React.PropTypes.number,
  };

  getStyles() {
    return {
      root: {
        height: (this.props.height- 20 - 64 - 64 - 28),
        border: '1px solid rgb(200,200,200)'
      }
    }
  }

  componentDidMount() {
  }

  constructor(props) {
    super(props);
  }

  render() {
    let styles = this.getStyles();

    return (
      <div style={styles.root}>
        <ActivityBoard
          height={(this.props.height- 20 - 64 - 64 - 28) - 40}
        />
        <SudokuBoard
          height={(this.props.height- 20 - 64 - 64 - 28) - 40}
          width={this.props.width - 210 - 40  - 2 - 202 - 100 + (40 - 2)}
        />
      </div>
    );
  }
}