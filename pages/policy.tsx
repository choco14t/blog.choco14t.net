import { Box, Heading, Link, Text } from '@chakra-ui/react'
import Layout from '../components/layout'

const Policy = () => {
  return (
    <Layout>
      <Box mx="auto" mt={{ md: 12 }}>
        <Heading as="h2">
          <Text fontSize="3xl">Privacy Policy</Text>
        </Heading>

        <Text my={5}>
          当サイトでは、Google によるアクセス解析ツール「Google
          アナリティクス」を使用しています。 この Google
          アナリティクスはデータの収集のために Cookie を使用しています。
          このデータは匿名で収集されており、個人を特定するものではありません。
        </Text>

        <Text>
          この機能は Cookie
          を無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。この規約に関しての詳細は
          <Link
            href="https://marketingplatform.google.com/about/analytics/terms/jp/"
            mx={1}
            target="_blank"
            rel="noopener noreferrer"
          >
            Googleアナリティクスサービス利用規約
          </Link>
          のページや
          <Link
            href="https://policies.google.com/technologies/ads?hl=ja"
            mx={1}
            target="_blank"
            rel="noopener noreferrer"
          >
            Googleポリシーと規約
          </Link>
          ページをご覧ください。
        </Text>
      </Box>
    </Layout>
  )
}

export default Policy
