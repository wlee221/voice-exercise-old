import React from 'react';
import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify'
import { withAuthenticator } from 'aws-amplify-react'
import awsmobile from './aws-exports'
import './App.css';
import RoutinePlayer from './RoutinePlayer.js'
import CreateRoutine from './CreateRoutine.js'
import ListRoutines from './ListRoutines.js'
import * as queries from './graphql/queries';
import * as subscriptions from './graphql/subscriptions';

Amplify.configure(awsmobile);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userRoutines: [],
      othersRoutines: []
    };
    this.assignRoutines();
    const subscription = API.graphql(
      graphqlOperation(subscriptions.onCreateRoutine)
    ).subscribe({
      next: this.assignRoutines.bind(this)
    });
  }

  async assignRoutines() {
    const user = await Auth.currentUserInfo();
    const listResponse = await API.graphql(graphqlOperation(queries.listRoutines));
    const routines = listResponse.data.listRoutines.items;

    var userRoutines = [];
    var othersRoutines = [];
    routines.forEach(routine => {
      if (routine.author === user.username) {
        userRoutines.push(routine);
      } else {
        othersRoutines.push(routine);
      }
    })
    this.setState({
      userRoutines: userRoutines,
      othersRoutines: othersRoutines
    })
  }
  render() {
    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          Voice Exercise
        </header>
        <RoutinePlayer 
          userRoutines = {this.state.userRoutines}
        />
        <CreateRoutine />
        <ListRoutines 
          othersRoutines = {this.state.othersRoutines}
        />
      </div>
    );
  }
}

export default withAuthenticator(App);
