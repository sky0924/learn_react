import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    error: false,
  };

  componentDidCatch(error, info) {
    console.log("error");
    console.log({
      error,
      info,
    });

    this.setState({
      error: true,
    });
  }

  render() {
    if (this.state.error) {
      return <h1>Error</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
