import NextLink from 'next/link'
import { FiGithub, FiTwitter } from 'react-icons/fi'
import { Box, Container, Flex, Link, useColorModeValue } from '@chakra-ui/react'
import NordTheme from '../lib/nord-theme'

const Footer = () => {
  return (
    <Container as="footer" pb={6}>
      <Flex justify="center" gap={10}>
        <Link
          href="https://github.com/choco14t"
          target="_blank"
          rel="noopener noreferrer"
          color={useColorModeValue(NordTheme.nord3, NordTheme.nord6)}
          _hover={{
            color: useColorModeValue(NordTheme.nord9, NordTheme.nord14),
          }}
        >
          <FiGithub size="1.5em" />
        </Link>
        <Link
          href="https://twitter.com/choco14t"
          target="_blank"
          rel="noopener noreferrer"
          color={useColorModeValue(NordTheme.nord3, NordTheme.nord6)}
          _hover={{
            color: useColorModeValue(NordTheme.nord9, NordTheme.nord14),
          }}
        >
          <FiTwitter size="1.5em" />
        </Link>
      </Flex>
      <Box textAlign="center" mt={6}>
        <NextLink href="/policy" passHref>
          <Link>Privacy Policy</Link>
        </NextLink>
      </Box>
      <Box textAlign="center" mt={6}>
        &copy; {new Date().getFullYear()} choco14t. All Rights Reserved.
      </Box>
    </Container>
  )
}

export default Footer
