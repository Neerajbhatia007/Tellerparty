import {
  Button,
  Container,
  Heading,
  Input,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import React, { useRef } from 'react';
import Swal from 'sweetalert2'
import emailjs from '@emailjs/browser';


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_0kgtbmg', 'template_t1iz5vm', form.current, 'uODsXrl4w97diT8Bd')
      .then((result) => {
          console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        Swal.fire({
            title: 'Good Job',
            text: 'Form Submitted Successfully!',
            icon: 'success',
            confirmButtonText: 'OK'
          })

        
        e.target.reset();
    };


  return (
    <Container maxW={'container.xl'} h={'120vh'} p={'16'}>
      <form ref={form} onSubmit={sendEmail}>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
          m={'auto'}
          my={'16'}
        >
          <Heading>Happy to Assist you</Heading>
          {/* <Avatar alignSelf={'center'} boxSize={'32'} /> */}
          <Text>We will very happy to serve you even more better. For any Query/Bugs feel free and reach out to us! 😄</Text>
          <Input
            placeholder="Enter Name"
            type={'Text'}
            name={'user_name'}
            focusBorderColor={'orange.400'}
            required
          />
          <Input
            placeholder="Enter email Address"
            type={'email'}
            name={'user_email'}
            focusBorderColor={'orange.400'}
            required
          />
          <Textarea
            placeholder="Enter Query/Message here"
            type={'text'}
            name={'message'}
            focusBorderColor={'orange.400'}
            required
          />
          <Button colorScheme={'orange'} type={'submit'} value={'Send'}>
            Send
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default Contact;
