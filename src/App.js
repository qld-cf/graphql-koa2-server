import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NameWithQuery from './graphql'

class App extends Component {
  render() {
    const { user } = this.props.data;
    console.log(user)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Graphql 用户: {user && user.name ? user.name : null}</h1>
        </header>
      </div>
    );
  }
}

export default NameWithQuery(App); // 对应页面挂载graphql props data
