'use client';

import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react';

export function HeroSection() {
  return (
    <Box
      position="relative"
      height="100vh"
      backgroundImage="url('/hero-bg.png')"
      backgroundSize="cover"
      backgroundPosition="center"
      zIndex="1"
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="blackAlpha.600"
      />
      <Container maxW="container.lg" position="relative" height="100%">
        <VStack
          justify="center"
          align="center"
          height="100%"
          spacing={6}
          color="white"
        >
          <Heading as="h1" size="2xl" textAlign="center">
            Eksplor Kelurahan Kebon Baru
          </Heading>
          <Text fontSize="xl" textAlign="center">
            Wisata, Kuliner, dan Transportasi dalam Genggamanmu!
          </Text>
        </VStack>
      </Container>
    </Box>
  );
}