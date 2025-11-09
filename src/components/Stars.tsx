'use client';

import { HStack, Icon } from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';

export function Stars({ value, size = 4 }: { value: number; size?: number }) {
  return (
    <HStack spacing={2}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon key={i} as={FaStar} color={i < value ? 'yellow.400' : 'gray.300'} boxSize={size} />
      ))}
    </HStack>
  );
}
