import { useColorMode, IconButton } from '@chakra-ui/react';
import { FaRegMoon } from 'react-icons/fa';
import { FiSun } from 'react-icons/fi';

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  if (colorMode === 'light')
    return (
      <IconButton
        aria-label='Dark Mode'
        icon={<FaRegMoon />}
        bgColor='transparent'
        isRound={true}
        size='lg'
        fontSize='25px'
        color='rgba(52,58,70,.8)'
        onClick={toggleColorMode}
      />
    );

  return (
    <IconButton
      aria-label='Light Mode'
      icon={<FiSun />}
      bgColor='transparent'
      isRound={true}
      size='lg'
      fontSize='25px'
      color='white'
      onClick={toggleColorMode}
    />
  );
};

export default ColorModeSwitch;
