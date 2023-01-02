import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assests/1.jpg';
import img2 from '../assests/2.jpg';
import img3 from '../assests/3.jpg';
import img4 from '../assests/4.jpg';
import img5 from '../assests/5.jpg';
import img6 from '../assests/6.jpg';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'transalte(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  // size : '4xl'
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      {/* minH={'100vh'} container */}
      <Container maxW={'container.xl'} p={'16'} >
        <Heading
          textTransform={'uppercase'}
          py={'2'}
          w={'fit-content'}
          borderBottom={'2px solid'}
          m={'auto'}
        >
          Services
        </Heading>

        <Stack h={'full'} p={'4'} alignItems={'center'} direction={['column', 'row']}>

        <Image src={img6} h={['10', '400']} filter={'hue-rotate(-130deg)'} />

        <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4, 16']} textAlign={'center'}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam veniam qui ex. Ullam, blanditiis qui neque soluta sit maxime voluptatum, recusandae quas animi, fuga similique repellendus quaerat ea earum modi.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, sit. Eaque rem ullam possimus ipsum, perferendis debitis laboriosam, officiis voluptate inventore cupiditate pariatur doloremque provident dolore illum, perspiciatis quia qui!
        </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={2000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w={'full'} h={'100vh'}>
      <Image src={img1} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Emotion is Music
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img2} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        live Band
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img3} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        live Band
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img4} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        live Band
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img5} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        live Band
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
