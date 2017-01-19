/**
 * Created by alucas on 19/1/17.
 */
import React, { Component, PropTypes } from 'react';
// import { grey100 } from 'material-ui/src/styles/colors'

export default class Cell extends Component {
  static propTypes = {
    x: React.PropTypes.number,
    y: React.PropTypes.number,
    height: React.PropTypes.number,
    width: React.PropTypes.number,
    id: React.PropTypes.string,
    value: React.PropTypes.number,
    possible: React.PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9])
  };

  getStyles() {
    return {
      root: {
        fill: 'rgb(100,100,100)',
        stroke: 'transparent',
        strokeWidth: 5
      },
    }
  }

  componentDidMount() {
  }

  constructor(props) {
    super(props);
  }

  render() {
    let styles = this.getStyles();

    const value = () => {
      let r;
      if (this.props.value) {
        r = (
          <text
            x={this.props.x + this.props.width/2 - 15}
            y={this.props.y + this.props.height/2 + 15}
            fill="red"
            style={{
              fontFamily: '\'Helvetica\'',
              fontSize: '3em',
            }}
          >
            {value}
          </text>
        );
      } else {
        r = (
          <g
            id="unknown-group"
          >
            <text
              id="unk-1"
              x={this.props.x + this.props.width/2 - 15}
              y={this.props.y + this.props.height }
              fill="red"
              style={{
                fontFamily: '\'Helvetica\'',
                fontSize: '1em',
              }}
            >
              1
            </text>
          </g>
        );
      }
      return r;
    };

    return (
      <g
        id={`g-${this.props.id}`}
      >
        <rect
          id={`rect-${this.props.id}`}
          x={this.props.x}
          y={this.props.y}
          height={this.props.height}
          width={this.props.width}
          style={styles.root}
        />
        {value()}
      </g>
    );
  }
}