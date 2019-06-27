import React from 'react';
import { Auth, API, graphqlOperation } from 'aws-amplify'
import * as mutations from './graphql/mutations';
import { parseRawStringPhrase, InvalidInputError } from './note-conversion.js'

class CreateRoutine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      routine: null,
      errorMessage: null,
    }
  }

  async onSubmit() {
    this.setState({ errorMessage: null });
    // validify the input.
    if (!this.state.name || !this.state.routine) {
      this.setState({ errorMessage: "Name and routine input cannot be empty."})
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
    console.log(mutationInput)
    const newRoutine = await API.graphql(graphqlOperation(mutations.createRoutine, {input: mutationInput}));
    console.log(newRoutine)
  }
  render() {
    return (
      <div className='createRoutine'>
        <h2>Create Routine</h2>
        <p>
          Here, you can create your own routine based on the whole tone scale. <br />
          For example, 1 2 3 2 1 corresponds to C D E D E. Please separate your inputs by spaces.
        </p>
        <form>
          <label>
            <br /> Name:
            <input
              type="text"
              name="name"
              maxLength="20"
              onChange={
                evt => this.setState({
                  [evt.target.name]: evt.target.value,
                })
              }
            />
          </label>
          <label>
            <br />Routine:
            <input
              type="text"
              name="routine"
              maxLength="45"
              onChange={
                evt => this.setState({
                  [evt.target.name]: evt.target.value,
                })
              }
            />
          </label>

          <br />
          <input
            type="button"
            value="Create routine"
            onClick={() => {
              this.onSubmit();
            }}
          />
        </form>
        <font color='red'>{this.state.errorMessage}</font>
      </div>
    )
  }
}

export default CreateRoutine;