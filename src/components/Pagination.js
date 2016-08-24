import React, { Component } from 'react';

import Loading from './Loading';

import './Pagination.css';

class ShowMoreLink extends Component {

  render() {
    return (
      <a className='Link' href='#' onClick={this.props.showMore}>Show More</a>
    );
  }
}

class Pagination extends Component {

  constructor() {
    super();
    this.state = { loading: false };
    this.showMore = this.showMore.bind(this);
  }

  showMore() {
    this.setState({'loading': true});
    this.props.showMore(this.props.users.links.next.link)
      .done(() => {
        this.setState({'loading': false});
      });
  }

  render() {
    return (
        <div className='Pagination'>
        {this.state.loading && <div><Loading /></div> }
        {this.props.users && this.props.users.links.hasNext() && <ShowMoreLink showMore={this.showMore} />}
        </div>
    );
  }
}

export default Pagination;
