import React, { Component } from "react";
import ajaxloader from "./ajaxloader.gif";

export default class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img className="my-3" src={ajaxloader} alt="loader" />
      </div>
    );
  }
}
