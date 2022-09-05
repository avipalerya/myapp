import React, { Component } from "react";
import FallbackUI from "../FallbackUI";

export default class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(error) {
    console.log("getDerivedStateFromError is executed");
    console.log(error);
    return {
      hasError: true,
    };
  }
  componentDidCatch(error, info) {
    console.log("componentDidCatch is executed");
    console.log(error);
    console.log(info);
  }
  render() {
    {
      if (this.state.hasError) {
        return (
          <div>
            <FallbackUI />
          </div>
        );
      } else {
        return this.props.children;
      }
    }
  }
}
