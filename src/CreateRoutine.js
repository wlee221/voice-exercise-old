import React from 'react';
import { Auth, API, graphqlOperation } from 'aws-amplify'
import * as mutations from './graphql/mutations';
import { parseRawStringPhrase, InvalidInputError } from './note-conversion.js'
import { Input, Button, Message } from 'semantic-ui-react'

class CreateRoutine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      routine: null,
      errorMessage: null,
      success: false,
    }
  }

  async onSubmit() {
    this.setState({ errorMessage: null, success: false });
    // validify the input.
    if (!this.state.name || !this.state.routine) {
      this.setState({ errorMessage: "Name and routine input cannot be empty." })
      return;
    }
    try {
      parseRawStringPhrase(this.state.routine);
    } catch (err) {
      if (err instanceof InvalidInputError) {
        this.setState({ errorMessage: err.message });
        return;
      } else {
        throw err;
      }
    }
    const user = await Auth.currentUserInfo();
    const mutationInput = {
      name: this.state.name,
      author: user.username,
      routine: this.state.routine,
    }
    const newRoutine = await API.graphql(graphqlOperation(mutations.createRoutine, { input: mutationInput }))
      .then(() => {
        this.setState({ success: true })
      }).catch(err => {
        this.setState({ errorMessage: err })
      });
  }
  render() {
    var successMessage = this.state.success ? "Successfully Created a routine!" : null;
    return (
      <div className='createRoutine' style={{
        width: '100%',
      }} >
        <h2>Create Routine</h2>

        <p>
          Here, you can create your own routine based on the whole tone scale. <br />
          For example, 1 2 3 2 1 corresponds to C D E D E. Please separate your inputs by spaces.
          </p>
        <Message style={{
          display: 'inline-block',

        }}>
          <Message.Header>New Routine</Message.Header>
          <form>
            <label>
              <br /> Name:&nbsp;&nbsp;&nbsp;
            <Input
                type="text"
                name="name"
                maxLength="20"
                style={{ marginBottom: "0.5em" }}
                onChange={
                  evt => this.setState({
                    [evt.target.name]: evt.target.value,
                  })
                }
              />
            </label>
            <label className="inputLabel">
              <br />Routine:&nbsp;&nbsp;&nbsp;
            <Input
                type="text"
                name="routine"
                maxLength="45"
                style={{ marginBottom: "0.5em" }}
                onChange={
                  evt => this.setState({
                    [evt.target.name]: evt.target.value,
                  })
                }
              />
            </label>
          </form>
          <Button
            primary
            value="Create routine"
            style={{ marginBottom: "0.5em" }}
            onClick={() => {
              this.onSubmit();
            }}
          >
            Create routine
          </Button>
          <br />
        </Message >
        <br /><font color = 'blue'>{successMessage}</font>
        <br /><font color='red'>{this.state.errorMessage}</font>
      </div>
    )
  }
}

export default CreateRoutine;