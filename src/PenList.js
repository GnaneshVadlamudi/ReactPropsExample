import React from "react";
import Pen from "./Pen"

class PenList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2>Interesting Pens on CodePen</h2>
        {/*
        if we have more values in list and 
        want to assign each value to keys
        <ul>
          {
            this.props.pens.map(pen => {
              return (
                <li key={pen.url}>
                  <Pen {...pen} />
                </li>
              )
            })
          }
        </ul>*/}
        <Pen {...this.props.pens} />         
      </React.Fragment>
    )
  }
}

export default PenList;