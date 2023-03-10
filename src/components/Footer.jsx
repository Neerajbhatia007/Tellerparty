import { Box, Button, Heading, HStack, Input, Stack, VStack , Text} from '@chakra-ui/react'
import React from 'react'
import { AiOutlineSend } from 'react-icons/ai'

const Footer = () => {
  return (
    // minH={'40'} box
    // flex={'0 0 50'}
    <Box bgColor={'blackAlpha.900'}  p={'10'} color={'white'} pos={'relative'}>
        <Stack direction={['column', 'row']}>
            <VStack alignItems={'stretch'} w={'full'}>
                <Heading size={'md'} textAlign={'center'}>
                    Subscribe for more
                </Heading>
                <HStack >
                    <Input placeholder='Enter email here' border={'1px solid white'} />
                    <Button p={'0'} colorScheme={'orange'} variant={'ghost'} borderRadius={'0 20px 20px 0'}>
                        <AiOutlineSend size={'20'}/>
                    </Button>
                </HStack>
            </VStack >
            <VStack w={'full'} borderLeft={['none', '1px solid white']} borderRight={['none', '1px solid white']}>
            <Heading size={'md'} textAlign={'center'}>
                TeLLer PaRty 
            </Heading>
            <Text>
                All rights reserved
            </Text>
            </VStack>
            <VStack w={'full'}>
                 <Heading size={'md'}>
                    Social Media
                  </Heading>
                 <Button size={'xs'} variant={'link'} colorScheme={'gray'}>
                     <a target={'_blank'} href='https://www.youtube.com'>Youtube</a>
                 </Button>
                 <Button size={'xs'} variant={'link'} colorScheme={'gray'}>
                     <a target={'_blank'} href='https://www.instagram.com/'>Instagram</a>
                 </Button>
                 <Button size={'xs'} variant={'link'} colorScheme={'gray'}>
                     <a target={'_blank'} href='https://www.Github.com'>Github</a>
                 </Button>
            </VStack>
        </Stack>

    </Box>
  )
}

export default Footer