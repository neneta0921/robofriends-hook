import React, { Component, Fragment } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import './App.css';

// STATE >> props

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchField: '',
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    });

    return (
      <Fragment>
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <CardList robots={filteredRobots} />
        </div>
      </Fragment>
    );
  }
}

export default App;
