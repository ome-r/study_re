import React, { Component } from 'react';

class Handler extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          text: "Hello, SESAC!",
        };
      }

      changeText = () => {
        this.setState({
          text: "GoodBye, SESAC!",
        });
      };

      render() {
        return (
          <div>
            <h1>{this.state.text}</h1>
            <button onClick={this.changeText}>버튼</button>
          </div>
        );
      }
}

export default Handler;