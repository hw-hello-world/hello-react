import React, { Component } from 'react';

import './Pagination.css';

class Pagination extends Component {

  gotoPage(url) {
    this.props.pageClick(url);
  }

  render() {
    return (
        <div className='Pagination'>
        <a className='Link' href='#' onClick={this.props.links && this.props.links.next && this.props.pageClick.bind(this, this.props.links.next.link)}>Next</a>
        </div>
    );
  }
}

export default Pagination;
