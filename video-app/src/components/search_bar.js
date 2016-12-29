import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' }
    }

    onInputChange(event) {
        var term = event.target.value;
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }

    render() {
        return (
            <div className="col-md-12 search-bar">
                <input
                    className="form-control"
                    placeholder="Enter a search term"
                    value={this.state.term}
                    onChange={event => this.onInputChange(event)} />
            </div>
        );
    }
}

export default SearchBar;
