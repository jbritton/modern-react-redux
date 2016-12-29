import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = { term: '' };

        // bind the event handlers context to the class
        // when referenced in JSX the context is different
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();

        // fetch weather data
        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' });
    }

    render(){
        return (
            <form className="input-group"
                  onSubmit={this.onFormSubmit} >
                <input className="form-control"
                       type="text"
                       placeholder="Get a five-day forecast in your favorite cities"
                       value={this.state.term}
                       onChange={this.onInputChange} />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

// null value for mapStateToProps parameter because this component doesnt observe the state
export default connect(null, mapDispatchToProps)(SearchBar);
