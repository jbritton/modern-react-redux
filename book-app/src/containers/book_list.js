import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title}
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
        );
    }
}

// function to map global redux state to the properties that are fed to the react component
function mapStateToProps(state) {
    return {
        books: state.books
    };
}

// anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
    // when selectBook is called, the result should be dispatched to all of our reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// use react-redux connect function to create a redux container from the state mapper function and the component,
// action creator 'selectBook' is now available as this.props.selectBook()
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
