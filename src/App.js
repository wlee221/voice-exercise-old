import React from 'react';
import { Grid } from 'semantic-ui-react'
import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify'
import { withAuthenticator } from 'aws-amplify-react'
import awsmobile from './aws-exports'
import './App.css';
import 'semantic-ui-css/semantic.min.css'
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
      next: (data) => this.assingRoutine(data.value.data.onCreateRoutine)
    });
  }

  async assingRoutine(newRoutine) {
    const user = await Auth.currentUserInfo();
    if (newRoutine.author === user.username) {
      this.setState({ userRoutines: this.state.userRoutines.concat(newRoutine) })
    } else {
      this.setState({ othersRoutines: this.state.othersRoutines.concat(newRoutine) })
    }
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
        <Grid divided='vertically'>
          <Grid.Row columns={2} divided>
            <Grid.Column>
              <RoutinePlayer
                userRoutines={this.state.userRoutines}
              />
            </Grid.Column>
            <Grid.Column >
              <CreateRoutine />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1}>
            <Grid.Column>
              <ListRoutines
                othersRoutines={this.state.othersRoutines}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>


      </div>
    );
  }
}

export default withAuthenticator(App);
