import React, { Component } from "react";
import { ForwardFormField } from "./FormField";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.fieldRef = React.createRef();
  }

  handleClick = () => {
    this.fieldRef.current.focus();
  }

  render() {
    return <div className="m-2">
      <ForwardFormField label="Name" ref={ this.fieldRef } />
      <div className="btn btn-primary" onClick={ this.handleClick }>
        Focus
      </div>
    </div>
  }
}
