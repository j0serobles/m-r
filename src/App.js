import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

import {CardList}  from  './components/card-list/card-list.component.jsx';
import {SearchBox} from  './components/search-box/seach-box.component.jsx';

class App extends Component { 

  constructor() { 
    super();

    this.state = { 
      monsters: [],
      searchField : ''
    };

  }

  componentDidMount() { 
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then( user_array => this.setState( { monsters:user_array } ))
  }


  render() { 
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter( monster => monster.name.toLowerCase().includes(searchField.toLowerCase() ));

    return (
      <div className="App">
        <h1>My Own Rolodex</h1>
        <SearchBox  placeholder='Search Monsters' handleChange={ e => this.setState({ searchField: e.target.value }) }></SearchBox>
        <CardList monsters={ filteredMonsters }/>

    </div>
    )
  }
}

export default App;
