import NextLink from 'next/link'
import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react'
import ThemeToggleSwitch from './theme-toggle-switch'

const NavBar = () => {
  return (
    <Box as="nav" w="100%">
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <NextLink href="/">
              <a>
                <Text fontSize="4xl" fontWeight="bold">
                  blog.choco14t.net
                </Text>
              </a>
            </NextLink>
          </Heading>
        </Flex>

        <Flex align="end">
          <ThemeToggleSwitch />
        </Flex>
      </Container>
    </Box>
  )
}

export default NavBar
