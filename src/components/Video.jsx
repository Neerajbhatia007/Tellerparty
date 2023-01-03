import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const Video = () => {
  const videosArr = [
    {
      link: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      desc: 'A cartoon is a form of illustrated visual art that is typically designed for humorous or satirical purposes. Cartoons are usually drawn in a simplified style, with bold lines and exaggerated features, and they often use humor, satire, and irony to convey their message.',
      title: 'Baby cartoons',
    },
    {
      link: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      desc: 'Horror stories are designed to scare, shock, and unsettle the reader or listener. They often involve supernatural elements, such as ghosts, monsters, or demonic forces, and they are meant to evoke feelings of fear, anxiety, and dread in the audience. Horror stories can be found in various forms of media, including literature, film, television, and theater. They can also be found in folklore and mythology, as well as in urban legends and other types of oral storytelling.',
      title: 'Horror Stories',
    },
    {
      link: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      desc: 'A screencast is a digital recording of a computer screen"s output, often accompanied by audio narration. Screencasts are often used to create video tutorials, demonstrations, or presentations, and they can be useful for explaining how to use software, showing off a new feature or product, or illustrating a concept',
      title: 'Screen Cast',
    },
    {
      link: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
      desc: 'Chromecast is a device made by Google that allows you to stream video and audio content from your phone, tablet, or computer to a TV or other display with an HDMI port. To use Chromecast, you will need a device with the Google Cast app installed (such as a smartphone or tablet) and a TV or display with an HDMI port.',
      title: 'ChromeCast',
    },
    {
      link: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
      desc: 'To use Chromecast, you will need to connect it to your TV or display and follow the instructions to set it up. Once it is set up, you can use the Google Cast app on your device to choose content to stream to your TV. Chromecast supports a wide variety of apps and services, including popular streaming platforms like Netflix, Hulu, and YouTube, as well as many other audio and video apps.',
      title: 'How to use Chrome Cast',
    },
  ];

  const [videoSrc, setVideoSrc] = useState(videosArr[0].link);
  const [dsrc, setDsrc] = useState(videosArr[0].desc);
  const [titl, setTitl] = useState(videosArr[0].title);
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
          <Heading>{titl}</Heading>
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
                setVideoSrc(item.link); setDsrc(item.desc) ; setTitl(item.title);
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
