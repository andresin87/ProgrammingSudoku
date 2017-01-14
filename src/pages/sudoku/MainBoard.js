/**
 * Created by alucas on 14/1/17.
 */
import React, { Component, PropTypes } from 'react';

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

      </div>
    );
  }
}