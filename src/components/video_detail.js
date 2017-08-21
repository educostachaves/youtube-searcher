import React from 'react';

const VideoDetail = ({video}) => {
  if(!video) {
    return <div>Loading...</div>;
  }
  console.log(video);
  const item = {
    title: video.snippet.title,
    description: video.snippet.description,
    videoId: video.id.videoId,
    url: `https://youtube.com/embed/${video.id.videoId}`
  };

  return (
    <div className="videodetail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={item.url}></iframe>
      </div>
      <div className="details">
        <div>{item.title}</div>
        <div>{item.description}</div>
      </div>
    </div>
  )
}

export default VideoDetail;