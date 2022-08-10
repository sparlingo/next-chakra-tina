import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import TinaProvider from '../.tina/components/TinaDynamicProvider.js'
import Layout from '../components/Layout'

const MyApp = ({ Component, pageProps }) => {
  return (
    <TinaProvider>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </TinaProvider>
  );
}

export default MyApp