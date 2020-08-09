import React from "react";
import Pen from "./Pen"

class PenList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2>Interesting Pens on CodePen</h2>
        <Pen {...this.props.pens} />         
      </React.Fragment>
    )
  }
}

export default PenList;