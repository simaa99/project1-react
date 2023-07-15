import React, { Component } from 'react'
import './style.css'
export default class index extends Component {
  render() {
    const {btnStyle , btn ,type} = this.props;
    return (
      <button className={`btn ${btnStyle}`} type={type}>{btn}</button>
    )
  }
}
