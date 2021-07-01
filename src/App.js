import { Component } from 'react';
import React from "react";
import Headerinput from './component/header-input';
import Footer from './footer';
import Account from './component/account';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Menu from './menu/menu';
import route from './router/Router';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iscoplate: false
    }
  }


  // gọi API LÊN SERVER 

  showlisst = () => {
    this.setState({
      iscoplate: !this.state.iscoplate
    })
  }


  render() {
    const result = route.map((item, index) => {
      return (
        <Route
          key={index}
          path={item.path}
          exact={item.exact}
          component={item.main}
        >

        </Route>

      )
    });
    return (
      <Router>
        <div className="header">
          <Menu showaccount={this.showlisst} />
          <Headerinput />
        </div>

        <div>

          <Switch>
            {
              result
            }
          </Switch>
          {
            this.state.iscoplate &&
            <Account showaccount={this.showlisst} />
          }
          <Footer />

        </div>
      </Router>
    );
  }
}

export default App;
