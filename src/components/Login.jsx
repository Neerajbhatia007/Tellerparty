import { Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
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
          <Heading>Welcome Back 🔒</Heading>
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
          <Button variant={'link'} alignSelf={'flex-end'}>
            <Link to={'/forgetpassword'}>Forget Password?</Link>
          </Button>
          <Button colorScheme={'orange'} type={'submit'}>Log in</Button>
          <Text textAlign={'right'}>New User?{'  '}
          <Button variant={'link'} colorScheme={'orange'}>
            <Link to={'/signup'}>Signup here</Link>
          </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
