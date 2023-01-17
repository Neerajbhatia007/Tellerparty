import { Container, HStack } from "@chakra-ui/react";
import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>
       <h1>Enter search keyword to load...</h1>
       <br></br>
    </div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  console.log(typeof video);
  return (
    <Container>
      <HStack className="ui embed">
        <iframe src={videoSrc} allowFullScreen title="Video player" />
      </HStack>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </Container>
  );
};

export default VideoDetail;