import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import HomepageLayout from "./layouts/HomepageLayout"
import './App.css';

class App extends Component {

  // handleImgClick() {
  //   // 跳转到首页
  // }

  render() {
    return (
      <Router>
        <Route exact path="/home" component={HomepageLayout} /> {/* exact表示严格匹配 */}
        {/* <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"
              onClick={this.handleImgClick.bind(this)} />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <Link to="/home">进入首页</Link>
          </header>
        </div> */}
      </Router>
    );
  }
}

export default App;
