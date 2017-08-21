import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  console.log(video);
  const item = { 
    url: video.snippet.thumbnails.default.url,
    title: video.snippet.title
  }

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={item.url} />
        </div>
        <div className="media-body">
          <div className="media-heading">
            {item.title}
          </div>
        </div>
      </div>
    </li>
  );

}

export default VideoListItem;