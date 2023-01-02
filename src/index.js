import { ColorModeScript, ChakraProvider , theme} from '@chakra-ui/react';
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import ColorModeSwitcher from './ColorModeSwitcher'

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <App />
      <ColorModeSwitcher />
    </ChakraProvider>
  </>
);
