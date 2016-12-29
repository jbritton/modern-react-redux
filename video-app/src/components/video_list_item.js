import React, { Component } from 'react';

// ES6 destructuring syntax for accessing the video property of the object
const VideoListItem = ({video, onVideoSelect}) => {

    const imageUrl = video.snippet.thumbnails.default.url;
    const title = video.snippet.title;

    return (
        <li className="list-group-item" onClick={ () => onVideoSelect(video) }>
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} />
                </div>
            </div>
            <div className="media-body">
                <div className="media-heading">{title}</div>
            </div>
        </li>
    );
};

export default VideoListItem;