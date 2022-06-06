import React, { Component } from 'react';
class Counter extends Component {
  // constructor(){
  //   super();

  //    this.handleChange = this.handleChange.bind(this);
  // }

  state = {
    count: 0,
    tags: ['tag1', 'tag2', 'tag3']
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState(
      {
        count: this.state.count +=1
      }
    )

  }

  render() {
    return (
      <>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.handleChange} className="btn btn-secondary btn-sm m-2 py-2 px-4" >Increment</button>
        <ul>
          {this.state.tags.map(tag => (<li key={tag}>{tag} </li>))}
        </ul>
      </>
    );
  }

  getBadgeClasses() {
    let classes = 'badge badge-primary px-2 py-1badge-';
    return (this.state.count === 0) ? classes += 'warning' : classes += 'primary';
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
