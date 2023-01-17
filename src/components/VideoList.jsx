import { Container, VStack, Stack } from '@chakra-ui/react';
import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, handleVideoSelect }) => {
  const renderedVideos = videos.map(video => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        handleVideoSelect={handleVideoSelect}
      />
    );
    // console.log(video.id);
  });

  return (
    <Container>
      <Stack>
        <VStack alignItems={'stretch'}>{renderedVideos}</VStack>
      </Stack>
    </Container>
  );
};
export default VideoList;
