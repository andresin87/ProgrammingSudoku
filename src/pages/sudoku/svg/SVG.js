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

    let RowGridLine = (i, n) => <line data-n={n} x1={0} y1={(this.props.height*i)/n} x2={this.props.width} y2={(this.props.height*i)/n} style={{strokeWidth:1, stroke:'red'}}/>;
    var Rows = [];
    let RowGridLines = (n = 9) => {
      for(let i = 0; i < n; i++) {
        Rows.push(RowGridLine(i, n));
      }
    };
    RowGridLines(9);

    let ColGridLine = (i, n) => <line data-n={n} y1={0} x1={(this.props.width*i)/n} y2={this.props.height} x2={(this.props.width*i)/n} style={{strokeWidth:1, stroke:'red'}}/>;
    var Cols = [];
    let ColGridLines = (n = 9) => {
      for(let i = 0; i < n; i++) {
        Cols.push(ColGridLine(i, n));
      }
    };
    ColGridLines(9);

    let SqrGridLine = (i, n) => (
      <rect
        x={(Math.trunc(i%Math.sqrt(n))) * this.props.width / Math.sqrt(n)}
        y={(Math.trunc(i/Math.sqrt(n))) * this.props.height / Math.sqrt(n)}
        width={this.props.width/Math.sqrt(n)}
        height={this.props.height/Math.sqrt(n)}
        style={{
          fill: 'none',
          stroke: 'red',
          strokeWidth: 2
        }}
        data-n={i}
      />
    );
    var Sqrs = [];
    let SqrGridLines = (n = 9) => {
      for(let i = 0; i < n; i++) {
        console.log(i, n);
        Sqrs.push(SqrGridLine(i, n));
      }
    };
    SqrGridLines(9);

    return (
      <svg style={styles.root}>
        <rect
          style={styles.rect}
        />
        <g id="rows">{Rows}</g>
        <g id="cols">{Cols}</g>
        <g id="sqrs">{Sqrs}</g>
      </svg>
    );
  }
}