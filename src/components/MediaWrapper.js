/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

import React, {Component} from "react";


export default class MediaWrapper extends Component {

  constructor(props){
    super(props);

    this._handleFocus = ::this._handleFocus;
    this._handleBlur = ::this._handleBlur;
  }

  _handleFocus() {
    console.log("MediaWrapper:_handleFocus");
    this.props.setReadOnly(true);
  }

  _handleBlur() {
    console.log("MediaWrapper:_handleBlur");
    this.props.setReadOnly(false);
  }

  render() {
    return (
      <div style={this.props.style} onBlur={this._handleBlur} onFocus={this._handleFocus}>
        {this.props.children}
      </div>
    );
  }
}
