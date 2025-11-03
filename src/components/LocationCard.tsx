import { Box, Image, Heading, Text, Button, Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

export interface LocationCardProps {
  image: string;
  title: string;
  description: string;
  address?: string;
  onClick?: () => void;
  children?: ReactNode;
}

export function LocationCard({ image, title, description, address, onClick, children }: LocationCardProps) {
  // Card: fixed height, image landscape ratio, button flush to card edges (ignores padding)
  return (
    <Box
      bg="white"
      borderRadius="xl"
      boxShadow="md"
      overflow="hidden"
      p={{ base: 3, md: 4 }}
      mb={4}
      minH={{ base: '220px', md: '220px' }}
      maxH={{ base: '220px', md: '220px' }}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      position="relative"
    >
      <Flex direction="row" gap={4} align="stretch" w="100%" flex="1">
        <Box
          w={{ base: '140px', md: '200px' }}
          minW={{ base: '140px', md: '200px' }}
          h={{ base: '110px', md: '140px' }}
          maxH={{ base: '110px', md: '140px' }}
          overflow="hidden"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Image
            src={image}
            alt={title}
            objectFit="cover"
            w="100%"
            h="100%"
            transition="transform 0.4s cubic-bezier(.4,2,.6,1)"
            _hover={{ transform: 'scale(1.08)' }}
            fallbackSrc="/kelurahan-img.png"
          />
        </Box>
        <Flex flex="1" direction="column" justify="center" minW={0}>
          <Heading size="md" mb={1} noOfLines={1}>{title}</Heading>
          <Text color="gray.700" mb={1} fontSize="md" noOfLines={2} textOverflow="ellipsis" overflow="hidden">{description}</Text>
          {address && <Text color="gray.500" fontSize="sm" mb={1} noOfLines={1} textOverflow="ellipsis" overflow="hidden">{address}</Text>}
          {children}
        </Flex>
      </Flex>
      <Button
        colorScheme="green"
        w="calc(100% + 2 * 1rem)" // 1rem = 16px, matches default px=4 (16px) padding
        h="48px"
        left={-4}
        right={-4}
        bottom={-4}
        onClick={onClick}
        borderRadius="12px"
        fontWeight="bold"
        fontSize="lg"
        rightIcon={<span style={{ fontSize: 18, display: 'inline-block', transform: 'translateY(1px)' }}>→</span>}
        mt={0}
        px={0}
        justifyContent="flex-end"
        textAlign="right"
        pr={6}
      >
        To Destination
      </Button>
    </Box>
  );
}
