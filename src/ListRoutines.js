import React from 'react'
import { Message } from 'semantic-ui-react'

class ListRoutines extends React.Component {

  render() {
    const routines = this.props.othersRoutines.map((val, idx) => {
      return (
        <Message
          key={idx}
          color='teal'
          value={val.routine}
          style={{ display: 'inline-block', margin: '1em' }}
        >
          <div key={idx}>
            <b>{`${val.name}`}</b>
            <br />{`Author: ${val.author}`}
            <br />{`Routine: ${val.routine}`}
          </div>
        </Message>
      )
    });
    return (
      <div>
        <h2>See what others created!</h2>
        {routines}
      </div>
    )
  }
}

export default ListRoutines