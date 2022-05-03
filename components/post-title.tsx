import { Heading, Text } from '@chakra-ui/react'
import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <Heading as="h1">
      <Text>{children}</Text>
    </Heading>
  )
}

export default PostTitle
