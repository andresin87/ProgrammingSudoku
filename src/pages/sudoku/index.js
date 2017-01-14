/**
 * Created by alucas on 12/1/17.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import mui from 'material-ui'
import * as homeActions from '../../actions/homeActions';
import MainBoard from './MainBoard'

import { Link } from 'react-router';

class Sudoku extends Component {

  static propTypes = {
    location: React.PropTypes.object.isRequired,
  };

  static contextTypes = {
    history: PropTypes.object.isRequired
  };

  getStyles() {
    return {
      root: {
        paddingTop: 64
      }
    }
  }


  componentDidMount() {
  }

  constructor(props) {
    super(props);

    this.state = {
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth
    };
  }

  handleResize(e) {
    this.setState({
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth
    });
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this));
  }


  render() {
    let styles = this.getStyles();

    return (
      <div style={styles.root}>
        <h2>Sudoku</h2>
        <MainBoard
          height={this.state.windowHeight}
          width={this.state.windowWidth}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(
  mapStateToProps
)(Sudoku);