import React from "react";
import { useParams } from "react-router-dom";

const VideoDetail = () => {
  const { videoID } = useParams();
  return <div>VideoDetail : {videoID}</div>;
};

export default VideoDetail;
