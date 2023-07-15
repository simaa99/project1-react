import React, { Component } from 'react'
import './style.css'
export default class index extends Component {
  render() {
    const {title , subTitle} = this.props;
    return (
      <div className='title'>
        <span>{title}</span>
        <span>{subTitle}</span>
      </div>
    )
  }
}
