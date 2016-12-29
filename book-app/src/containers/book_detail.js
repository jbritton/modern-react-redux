import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render() {
        if(!this.props.book){
            return (
                <div>Please select a book</div>
            );
        }

        return (
            <div>
                <h3>Details for:</h3>
                <div>Title:  {this.props.book.title}</div>
                <div>Pages:  {this.props.book.pages}</div>
            </div>
        );
    }
}

// function to map global redux state to the properties that are fed to the react component
function mapStateToProps(state) {
    return {
        book: state.activeBook
    };
}


export default connect(mapStateToProps)(BookDetail);
