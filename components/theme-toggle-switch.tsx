import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { FiMoon, FiSun } from 'react-icons/fi'
import NordTheme from '../lib/nord-theme'

const ThemeToggleSwitch = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <IconButton
      aria-label="Toggle theme"
      colorScheme={useColorModeValue('light', 'dark')}
      icon={useColorModeValue(
        <FiSun size="1.5em" color={NordTheme.nord0} />,
        <FiMoon size="1.5em" color={NordTheme.nord4} />,
      )}
      onClick={toggleColorMode}
    />
  )
}

export default ThemeToggleSwitch
