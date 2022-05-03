import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import theme from '../lib/theme'
import '../styles/index.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
