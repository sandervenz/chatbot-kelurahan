'use client';

import { useEffect, useState } from 'react';
import { Box, Flex, Image, Container, Text } from '@chakra-ui/react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      setScrolled(y > 20);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Box
      as="header"
      position="fixed"
      top={0}
      width="100%"
      zIndex={10}
      transition="background-color 200ms ease, box-shadow 200ms ease"
      bg={scrolled ? 'blue.600' : 'transparent'}
      boxShadow={scrolled ? 'sm' : 'none'}
      backdropFilter={scrolled ? 'saturate(180%) blur(6px)' : undefined}
    >
      <Box px={[4, 6, 8]}>
        <Flex align="center" justify="space-between" py={4}>
          <Flex align="center" gap={3}>
            <Image
              src="/logo-jakarta.png"
              alt="Logo Kelurahan Kebon Baru"
              height={['44px', '56px']}
              width={["44px","56px"]}
              objectFit="contain"
            />
            <Text color="white" fontWeight="700" fontSize={["lg","xl"]}>
              Kelurahan Kebon Baru
            </Text>
          </Flex>

          {/* placeholder for nav or right-side items; keep empty for now */}
          <Box />
        </Flex>
      </Box>
    </Box>
  );
}