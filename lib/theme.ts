import { extendTheme, ThemeComponents, ThemeConfig } from '@chakra-ui/react'
import { GlobalStyles, mode } from '@chakra-ui/theme-tools'
import NordTheme from './nord-theme'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

const components: ThemeComponents = {
  Link: {
    baseStyle: (props) => ({
      color: mode(NordTheme.nord9, NordTheme.nord14)(props),
      textDecoration: 'underline',
    }),
  },
  Text: {
    baseStyle: (props) => ({
      color: mode(NordTheme.nord3, NordTheme.nord6)(props),
    }),
  },
}

const styles: GlobalStyles = {
  global: (props) => ({
    body: {
      bg: mode(NordTheme.lightBg, NordTheme.nord0)(props),
      color: mode(NordTheme.nord3, NordTheme.nord6)(props),
    },
  }),
}

const theme = extendTheme({ config, components, styles })

export default theme
