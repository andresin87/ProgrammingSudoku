/**
 * Created by alucas on 12/1/17.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import mui from 'material-ui'
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import * as actions from './actions';
import MainBoard from './MainBoard';

import { Link } from 'react-router';

class Sudoku extends Component {

  static propTypes = {
    location: React.PropTypes.object.isRequired,
    uuid: React.PropTypes.string,
  };

  static contextTypes = {
    history: PropTypes.object.isRequired
  };

  getStyles() {
    return {
      root: {
        paddingTop: 64
      },
      raisedButtons: {
        padding: '0 20px',
        margin: '10px'
      }
    }
  }


  componentDidMount() {
  }

  constructor(props) {
    super(props);

    this.state = {
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
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
    if (this.props.uuid) {
      return (
        <div style={styles.root}>
          <h2>Sudoku</h2>
          <MainBoard
            height={this.state.windowHeight}
            width={this.state.windowWidth}
          />
        </div>
      );
    } else {
      return (
        <div style={styles.root}>
          <h2>Sudoku</h2>
          <div>
            <RaisedButton
              onClick={() => {
                this.props.dispatch(actions.start());
                // this.setState({uuid: id});
              }}
              style={styles.raisedButtons}>NEW GAME
            </RaisedButton>
            <TextField
              hintText="game uuid"
              onChange={(v) => {
                console.log(this.loadtTextfield.getValue());
              }}
              id="loadTextfield"
              ref={(c) => { this.loadtTextfield = c; }}
            />
            <RaisedButton
              onClick={() => {
                console.log(this.loadtTextfield.getValue());
                this.props.dispatch(actions.load(this.loadtTextfield.getValue()));
                // this.setState({uuid: id});
              }}
              style={styles.raisedButtons}
            >
              LOAD GAME
            </RaisedButton>
          </div>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    uuid: state.sudoku.uuid,
    stack: state.sudoku.stack
  };
}

export default connect(
  mapStateToProps
)(Sudoku);