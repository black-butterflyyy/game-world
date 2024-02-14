import { useState } from 'react';
import { Text, Button } from '@chakra-ui/react';

interface Props {
  children: string;
  maxLength?: number;
}

const ExpandableText = ({ children, maxLength = 300 }: Props) => {
    const [isExpanded, setIsExpanded] = useState(false);
    
    if (!children) return null;

  if (children.length <= maxLength) return <Text>{children}</Text>;

  return (
    <Text>
      {isExpanded ? children : children.substring(0, maxLength) + '....'}
      <Button
        onClick={() => setIsExpanded(!isExpanded)}
        colorScheme='yellow'
        size='xs'
        fontWeight='bold'
        marginLeft={1}
      >
        {isExpanded ? 'Show Less' : 'Read More'}
      </Button>
    </Text>
  );
};

export default ExpandableText;
