import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const Video = () => {
  const videosArr = [
    {
      link: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      desc: 'dhwihiwhfiwhfiwhfiwhfiwhfiwhfiwhfihifhwifhiwh',
    },
    {
      link: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      desc: 'dhwhidfhiejfoewjufoewjufioewhioerhgoerjgoperkgpoerwkgoprewkgoprewgoprewiwhfiwhfiwhfihifhwifhiwh',
    },
    {
      link: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      desc: 'lorem50snkfsaifjsijfofkoewk   video 33 kfoewkofkewofjkeowkfjoewjfowejfwejofjweojfwejfwejfwejfowejfoewjfewoj',
    },
    {
      link: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
      desc: 'dhwhidfhiejfoewjufoewju      videeo 33535        perkgpoerwkgoprewkgoprewgoprewiwhfiwhfiwhfihifhwifhiwh',
    },
    {
      link: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
      desc: 'dhwhidfhiejf  vid0swfojwfw 2424242525 prewgoprewiwhfiwhfiwhfihifhwifhiwh',
    },
  ];

  const [videoSrc, setVideoSrc] = useState(videosArr[0].link);
  const [dsrc, setDsrc] = useState(videosArr[0].desc);
  return (
    <Stack direction={['column', 'row']} h={'120vh'}>
      <VStack w={'full'}>
        <video
          controls
          controlsList="nodownload"
          src={videoSrc}
          style={{
            width: '100%',
          }}
        ></video>
        <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowY={'auto'}>
          <Heading>Sample videsoosss</Heading>
          <Text>
            {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
            deserunt ducimus incidunt ullam harum ipsum aut lorem */}
            {dsrc}
          </Text>
        </VStack>
      </VStack>
      <VStack
        w={['full', 'xl']}
        alignItems={'stretch'}
        p={'8'}
        spacing={'8'}
        overflowY={'auto'}
      >
        {videosArr.map((item, index) => {
          console.log(item.desc);
          return (
            <Button
              variant={'ghost'}
              colorScheme={'orange'}
              onClick={() => {
                setVideoSrc(item.link); setDsrc(item.desc);
              }}
            >
              Video {index + 1}
            </Button>
          );
        })}
      </VStack>
    </Stack>
  );
};

export default Video;
