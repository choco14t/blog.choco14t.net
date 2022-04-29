import NextLink from 'next/link'
import { FiGithub, FiTwitter } from 'react-icons/fi'
import { Box, Container, Flex, Link } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Container as="footer" pb={6}>
      <Flex justify="center" gap={10}>
        <Link
          href="https://github.com/choco14t"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub size="1.5em" />
        </Link>
        <Link
          href="https://twitter.com/choco14t"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiTwitter size="1.5em" />
        </Link>
      </Flex>
      <Box textAlign="center" mt={6}>
        <NextLink href="/policy">
          <a>Privacy Policy</a>
        </NextLink>
      </Box>
      <Box textAlign="center" mt={6}>
        &copy; {new Date().getFullYear()} choco14t. All Rights Reserved.
      </Box>
    </Container>
  )
}

export default Footer
