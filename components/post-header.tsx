import { Box } from '@chakra-ui/react'
import PostTitle from './post-title'

type Props = {
  title: string
}

const PostHeader = ({ title }: Props) => {
  return (
    <>
      <Box mx="auto" my={{ md: 12 }}>
        <PostTitle>{title}</PostTitle>
      </Box>
    </>
  )
}

export default PostHeader
