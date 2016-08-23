import React, { Component } from 'react';

import './Pagination.css';

class Pagination extends Component {

  render() {
    return (
        <div className='Pagination'>
        <a className='Link' href={this.props.links && this.props.links.next && this.props.links.next.link}>Next</a>
        <a className='Link' href={this.props.links && this.props.links.prev && this.props.links.prev.link}>Prev</a>
        </div>
    );
  }
}

export default Pagination;
