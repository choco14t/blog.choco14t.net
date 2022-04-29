import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import { GlobalStyles, mode } from '@chakra-ui/theme-tools'
import NordTheme from './nord-theme'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

const components = {
  Link: {
    baseStyle: {
      _hover: {
        color: NordTheme.nord14,
      },
    },
  },
}

const styles: GlobalStyles = {
  global: (props) => ({
    body: {
      bg: mode(NordTheme.nord4, NordTheme.nord0)(props)
    },
    color: mode(NordTheme.nord0, NordTheme.nord6)(props)
  })
}

const theme = extendTheme({ config, components, styles })

export default theme
