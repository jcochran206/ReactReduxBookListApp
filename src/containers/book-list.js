import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class Booklist extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
        key={book.title}
        onClick={() => this.props.selectBook(book)}
        className="list-group-item">
        {book.title}
        </li>
      );
    });
  }


  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state){


  return{
    books: state.books
  };
}

//Anything return from this function will be return as booklist container
function mapDispatchToProps(dispatch){
  // when selectBook is called all of our results should be passed to our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}

//promote booklist from component to container
export default connect(mapStateToProps, mapDispatchToProps)(Booklist)
