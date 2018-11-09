import React, { Component } from 'react';
import { connect } from 'react-redux';


class BookDetail extends Component {
  render() {
    if(!this.props.book) {
      return <div> Select a book to get started. </div>;
    }
    return (
      <div>
      <h3>Details for: </h3>
      <div><h2>Title: {this.props.book.title}</h2></div>
      <div>Pages: {this.props.book.pages}</div>
      <div>Description: {this.props.book.short}</div>
       </div>
    );
  }
}


function mapStateToProps(state){
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
