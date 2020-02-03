import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      items: []
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
        <div>
          <ul>
          {this.state.items.map((item, i) => {
            return (
              <li 
                key={i}                
              >    
                <input 
                  type="checkbox" 
                  checked={item.isCompleted ? "checked" : ""}
                  onChange={() => {
                    this._toggleCompleted(i)
                  }}
                />
                {item.text}
                {
                  item.isCompleted ? 
                      <button
                      onClick={() => {
                        this._deleteItem(i)
                      }}
                    >🗑</button>
                  : null
                }
              </li>
            )
          })}
          </ul>
        </div>
      </div>
    );
  }

  _handleSubmit = (event) => {
    event.preventDefault();
    console.log('You just submitted');
    this.setState({
      items: [
        ...this.state.items,
        {
          text: this.state.text,
          isCompleted: false
        }
      ]
    }, () => {
      this.setState({
        text: ''
      })
    })
  }

  _deleteItem = (index) => {
    this.setState({
      items: this.state.items.filter((item, i) => i !== index)
    })
  }

  _toggleCompleted = (index) => {
    this.setState({
      items: this.state.items.map((item, i) => {
        if (i === index) {
          return {
            ...item,
            isCompleted: !item.isCompleted
          }
        } else {
          return item;
        }
      })
    })
  }  

  _updateText = (event) => {
    console.log(event.target.value);
    this.setState({
      text: event.target.value
    });
  }
}

export default App;
