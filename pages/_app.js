import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import TinaProvider from '../.tina/components/TinaDynamicProvider.js'

const MyApp = ({ Component, pageProps }) => {
  return (
    <TinaProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </TinaProvider>
  );
}

export default MyApp