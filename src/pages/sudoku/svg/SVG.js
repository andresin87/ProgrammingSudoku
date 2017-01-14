/**
 * Created by alucas on 14/1/17.
 */
import React, { Component, PropTypes } from 'react';

export default class SudokuBoard extends Component {

  static propTypes = {
    height: React.PropTypes.number,
    width: React.PropTypes.number,
  };

  getStyles() {
    return {
      root: {
        height: this.props.height,
        width: this.props.width,
      },
      rect: {
        height: this.props.height,
        width: this.props.width,
        fill: 'rgb(33,33,33)'
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
      <svg style={styles.root}>
        <rect
          style={styles.rect}
        />
      </svg>
    );
  }
}