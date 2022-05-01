import PostPreview from './post-preview'
import Post from '../types/post'
import { SimpleGrid } from '@chakra-ui/react'

type Props = {
  posts: Post[]
}

const PostList = ({ posts }: Props) => {
  return (
    <section>
      <SimpleGrid my={8} spacing={10}>
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            slug={post.slug}
            date={post.date}
          />
        ))}
      </SimpleGrid>
    </section>
  )
}

export default PostList
