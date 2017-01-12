/**
 * Created by alucas on 12/1/17.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import mui from 'material-ui'
import * as homeActions from '../../actions/homeActions';
import PdfViewer from './PdfViewer';

import { Link } from 'react-router';

class Documentation extends Component {

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
    let styles = this.getStyles()

    return (
      <div style={styles.root}>
        <h2>Documentation</h2>
        <PdfViewer
          file={'https://cdn.rawgit.com/andresin87/ProgrammingSudoku/94b7a191/docs/Programming%20Sudoku%20(2006)%20%20Wei-Meng%20Lee.pdf'}
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
)(Documentation);