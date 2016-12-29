import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';

const YOUTUBE_API_KEY = 'AIzaSyD6Yny2x5DuePMHPtDPwZkuav5FjhjvSzg';

// create a new component that produces HTML
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [], selectedVideo: null };

        this.videoSearch('Surfboards');
    }

    videoSearch(term) {
        // fetch
        YTSearch({ key: YOUTUBE_API_KEY, term: term }, (videos) => {
            // ES6 syntax - key and variable are named 'videos'
            this.setState({
                videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        // throttle the video search
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

        return (
            <div className="container">
                <div className="row">
                    <SearchBar onSearchTermChange={videoSearch}/>
                    <VideoDetail video={this.state.selectedVideo} />
                    <VideoList
                        onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
                        videos={this.state.videos} />
                </div>
            </div>
        );
    }
}


// creates an instance of the App component class and
// add it to the container element
ReactDOM.render(<App />, document.querySelector('.container'));
