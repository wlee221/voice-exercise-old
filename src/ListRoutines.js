import React from 'react'

class ListRoutines extends React.Component {

  render() {
    const routines = this.props.othersRoutines.map((val, idx) => {
      return (
        <p key = {idx}>
          <b>{`${val.name}`}</b>
          <br/>{`    Author: ${val.author}`}
          <br/>{`    Routine: ${val.routine}`}
        </p>
      )
    });
    console.log(routines);
    return (
      <div className="listRoutines">
        <h2>See what others created!</h2>
        {routines}
      </div>
    )
  }
}

export default ListRoutines