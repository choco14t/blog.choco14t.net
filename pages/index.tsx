import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Post from '../types/post'
import PostList from '../components/post-list'

type Props = {
  allPosts: Post[]
}

const Index = ({ allPosts }: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>blog.choco14t.net</title>
        </Head>
        <PostList posts={allPosts} />
      </Layout>
    </>
  )
}

export default Index

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
