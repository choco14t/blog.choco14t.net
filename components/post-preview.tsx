import NextLink from 'next/link'
import { format } from 'date-fns'
import {
  Box,
  Heading,
  Text,
  useColorModeValue,
  Flex,
  Link,
} from '@chakra-ui/react'
import NordTheme from '../lib/nord-theme'

type Props = {
  title: string
  date: string
  slug: string
}

const PostPreview = ({ title, date, slug }: Props) => {
  return (
    <NextLink as={`/posts/${slug}`} href="/posts/[slug]" passHref>
      <Link
        rounded={'md'}
        color={useColorModeValue(NordTheme.nord3, NordTheme.nord6)}
        textDecoration="none"
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Flex
          direction="column"
          justifyContent="space-between"
          height="100%"
          bg={useColorModeValue('white', NordTheme.nord1)}
          boxShadow={'2xl'}
          rounded={'md'}
          p={6}
          transitionTimingFunction="ease-in-out"
          transitionDuration="0.2s"
          _hover={{
            background: useColorModeValue(NordTheme.nord6, NordTheme.nord3),
          }}
        >
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            {title}
          </Heading>
          <Box mt={10}>
            <Text>{format(new Date(date), 'yyyy-MM-dd')}</Text>
          </Box>
        </Flex>
      </Link>
    </NextLink>
  )
}

export default PostPreview
