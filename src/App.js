import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';

import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(monsters => this.setState({ monsters }))
  }

  render() {

    const { monsters, searchField } = this.state;

    const filteredMonster = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()));

    return (
      <div className="App">
        <input type='search' placeholder='Search Monster' onChange={e => this.setState({ searchField: e.target.value })
        } />
        <CardList monster={filteredMonster} />
      </div>
    );
  }
}

export default App;
