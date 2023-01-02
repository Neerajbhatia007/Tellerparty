import {
//   Avatar,
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
          m={'auto'}
          my={'16'}
        >
          <Heading>TeLLer PaRty 🥳</Heading>
          {/* <Avatar alignSelf={'center'} boxSize={'32'} /> */}
          <Input
            placeholder="Enter Name"
            type={'Text'}
            focusBorderColor={'orange.400'}
            required
          />
          <Input
            placeholder="Enter email Address"
            type={'email'}
            focusBorderColor={'orange.400'}
            required
          />
          <Input
            placeholder="Enter Password"
            type={'password'}
            focusBorderColor={'orange.400'}
            required
          />
          <Button colorScheme={'orange'} type={'submit'}>
            Sign Up
          </Button>
          <Text textAlign={'right'}>
            Already Signed up?{'  '}
            <Button variant={'link'} colorScheme={'orange'}>
              <Link to={'/login'}>Login here</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Signup;
