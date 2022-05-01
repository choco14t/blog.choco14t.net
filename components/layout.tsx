import { Box, Container } from '@chakra-ui/react'
import Footer from './footer'
import Meta from './meta'
import NavBar from './navbar'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <NavBar />
      <Box as="main" minH="calc(100vh - var(--header-height))">
        <Container maxW="container.md" py={6}>
          {children}
        </Container>
      </Box>
      <Footer />
    </>
  )
}

export default Layout
