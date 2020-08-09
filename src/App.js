import React from "react";
import "./styles.css";
import PenList from "./PenList"

class App extends React.Component {
  state = {
    pensList : 
    {
        title: "Elastic Input[Google Chrome]",
        url: "https://codepen.io/andreasstorm/pen/JBGWBa",
        author: "Andreas Storm"
    }
}

  render() {
    return(
      <div>
      <PenList pens={this.state.pensList} />
    </div>
    )
  }
}

export default App;
