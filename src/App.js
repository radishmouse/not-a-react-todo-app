import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }
  render() {
    return (
      <div>
        <form onSubmit={this._handleSubmit}>
          <input 
            onChange={this._updateText} 
            value={this.state.text}
            placeholder="Type something here!"
          />
        </form>
      </div>
    );
  }

  _handleSubmit = (event) => {
    event.preventDefault();
    console.log('You just submitted');
  }

  _updateText = (event) => {
    console.log(event.target.value);
    // this.setState({
    //   text: event.target.value
    // })
  }
}

export default App;
