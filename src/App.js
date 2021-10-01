import logo from './logo.svg';
import './App.css';
import { Route, Link, Switch, Redirect } from "react-router-dom";
import axios from 'axios';
import React, { Component } from 'react';

import Owners from './components/Owners/Owners';
import OwnerDetails from './components/OwnerDetails/OwnerDetails';

class App extends Component {
  constructor() {
    super();

    // this.apiUrl = 'http://localhost:3000/api/owners';
    this.apiUrl = 'https://andy-wardrobe-app-backend.herokuapp.com/api/owners'
    this.state = {
      owners: [],
    }
  }

  async componentDidMount() {
    const response = await axios.get(this.apiUrl);
    console.log(response);
    this.setState({ owners: response.data.owners})
  }

  addOwner = async (event) => {
    event.preventDefault();
    const response = await axios.post(this.apiUrl, {
      name: event.target.name.value
    });
    console.log('addOwner response', response)

    const tempOwners = this.state.owners;
    tempOwners.push(response.data.owner);
    this.setState({ owners: tempOwners})
  };

  addClothes = async (event) => {
    event.preventDefault();
    const ownerId = event.target.owner_id.value;
    const clothesUrl = `${this.apiUrl}/${ownerId}/newclothes`;

    const response = await axios.post(`${clothesUrl}`, {
      owner_id: event.target.owner_id.value,
      type: event.target.type.value,
      location: event.target.location.value,
      description: event.target.description.value,
      color: event.target.color.value,
      length: event.target.length.value
    })
    console.log('addClothes Response:', response)
    const ownerRes = response.data.owner;
    const tempOwners = this.state.owners;
    const newOwners = tempOwners.map(owner => {
      if(owner.id == ownerRes.id) {
        return ownerRes;
      } else {
        return owner;
      }
    });
    this.setState({ owners: newOwners });
  };

  render() {
    return (
      <div className="App">
        <h1>Wardrobe Management App</h1>
        <nav>
          <Link to='/'>Home</Link> | <Link to='/owners'>Owners</Link>
        </nav>
        <Switch>
          <Route
            path='/owners'
            exact
            component={() => <Owners
              owners={this.state.owners}
              addOwner={this.addOwner}
            />}
          />
          <Route
            path='/owners/:id'
            component={(routerProps) => <OwnerDetails
              {...routerProps}
              owners={this.state.owners}
              addClothes={this.addClothes}
            />}
          />
        </Switch>
      </div>
    );
    }
}

export default App;
