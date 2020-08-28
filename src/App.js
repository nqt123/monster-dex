import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';

import { SearchBox } from './components/search-box/search-box.component';

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

  handleChange = (e) => this.setState({ searchField: e.target.value})

  render() {
    const { monsters, searchField } = this.state;

    const filteredMonster = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()));

    return (
      <div className="App">
      <h1>Monster Dex</h1>
        <SearchBox
          placeholder="Monster Finder"
          handleChange={this.handleChange}
        />
        <CardList monster={filteredMonster} />
      </div>
    );
  }
}

export default App;
