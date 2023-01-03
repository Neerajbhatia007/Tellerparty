import React from 'react';
import {
  Drawer,
  DrawerBody,
//   DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

const Header = () => {

    const {isOpen, onOpen, onClose} = useDisclosure()
  return (
    <>
      <Button
        pos={'fixed'}
        top={'4'}
        left={'4'}
        zIndex={'overlay'}
        borderRadius={'full'}
        colorScheme={'orange'}
        h={'10'}
        onClick={onOpen}
      >
        <BiMenuAltLeft  />
      </Button>
      <Drawer isOpen={isOpen} placement={'left'} onClose={onClose}>
        <DrawerOverlay>
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>
                    TeLLer PaRty
                </DrawerHeader>
                <DrawerBody>
                    <VStack alignItems={"flex-start"}>
                        <Button onClick={onClose} variant={'ghost'} colorScheme={'orange'}>
                            <Link to={'/'}>Home</Link>  
                        </Button>
                        <Button onClick={onClose} variant={'ghost'} colorScheme={'orange'}>
                            <Link to={'/videos'}>Videos</Link>  
                        </Button>
                        {/* <Button onClick={onClose} variant={'ghost'} colorScheme={'orange'}>
                            <Link to={'/videos?category=free'}>Free videos</Link>  
                        </Button> */}
                        <Button onClick={onClose} variant={'ghost'} colorScheme={'orange'}>
                            <Link to={'/upload'}>Upload</Link>  
                        </Button>
                        <Button onClick={onClose} variant={'ghost'} colorScheme={'orange'}>
                            <Link to={'/contact'}>Contact</Link>  
                        </Button>
                    </VStack>
                <HStack pos={'absolute'} bottom={'10'} left={'0'} w={'full'} justifyContent={'space-evenly'}>
                        <Button onClick={onClose} colorScheme={'orange'}>
                            <Link to={'/login'}>
                            Log In
                            </Link>
                        </Button>
                        <Button onClick={onClose} colorScheme={'orange'} variant={'outline'}>
                            <Link to={'/signup'}>
                            Sign Up
                            </Link>
                        </Button>
                    </HStack>

                </DrawerBody>
            </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default Header;
