import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import mui from 'material-ui'
import * as homeActions from '../../actions/homeActions';

import { Link } from 'react-router';

class Information extends Component {

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
  }


  render() {
    let styles = this.getStyles();

    return (
      <div style={styles.root}>
        <h2>Information</h2>
        <div id="contact">
          <div
            style={{
              width: '20%',
              textAlign: 'right',
              float: 'left',
              padding: '0 0px'
            }}
          >
            Name:
          </div>
          <div
            style={{
              width: '80%',
              float: 'left'
            }}
          >
            <strong>Andrés Lucas Enciso</strong>
          </div>
          <div
            style={{
              width: '20%',
              textAlign: 'right',
              float: 'left',
              padding: '0 0px'
            }}
          >
            Phone:
          </div>
          <div
            style={{
              width: '80%',
              float: 'left'
            }}
          >
            <strong>+34 644.44.87.61</strong>
          </div>
          <div
            style={{
              width: '20%',
              textAlign: 'right',
              float: 'left',
              padding: '0 0px'
            }}
          >
            Address:
          </div>
          <div
            style={{
              width: '80%',
              float: 'left'
            }}
          >
            <strong>C/ Numancia 61<br/>6º 1ª</strong>
          </div>
          <div
            style={{
              width: '20%',
              textAlign: 'right',
              float: 'left',
              padding: '0 0px'
            }}
          >
            Web:
          </div>
          <div
            style={{
              width: '80%',
              float: 'left'
            }}
          >
            <strong><a href="http://www.andreslucas.me" target="_blank">www.andreslucas.me</a></strong>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(
  mapStateToProps
)(Information);