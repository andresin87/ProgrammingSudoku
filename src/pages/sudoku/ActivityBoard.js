/**
 * Created by alucas on 14/1/17.
 */
/**
 * Created by alucas on 14/1/17.
 */
import React, { Component, PropTypes } from 'react';

export default class ActivityBoard extends Component {

  static propTypes = {
    height: React.PropTypes.number,
    width: React.PropTypes.number,
  };

  getStyles() {
    return {
      root: {
        height: this.props.height,
        margin: 20,
        border: '1px solid rgb(200,200,200)',
        width: 200,
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

      </div>
    );
  }
}