import {
  Container
} from '@chakra-ui/react'

import Footer from './Footer'
import Header from './Header'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>
        <Container size="4xl" minH="600px">
          {children}
        </Container>
      </main>
      <Footer />
    </>
  )
}