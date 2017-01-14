/**
 * Created by alucas on 14/1/17.
 */
import React, { Component, PropTypes } from 'react';

import SVG from './svg/SVG';

export default class SudokuBoard extends Component {

  static propTypes = {
    height: React.PropTypes.number,
    width: React.PropTypes.number,
  };

  getStyles() {
    return {
      root: {
        height: this.props.height,
        margin: '20px 0',
        border: '1px solid rgb(200,200,200)',
        width: this.props.width,
        float: 'right'
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
        <SVG
          height={this.props.height}
          width={this.props.width}
        />
      </div>
    );
  }
}