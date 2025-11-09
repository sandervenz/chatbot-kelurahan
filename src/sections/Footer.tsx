'use client';

import { Box, Container, Heading, Text, VStack, HStack, Image } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Box
      as="footer"
      bg="#1E5BA8"
      color="white"
      py={{ base: 12, md: 16 }}
    >
      <Container maxW="container.xl">
        <HStack
          spacing={{ base: 8, lg: 16 }}
          align="start"
          flexDirection={{ base: "column", lg: "row" }}
          justify="space-between"
        >
          {/* Logo and Title Section */}
          <HStack spacing={6} align="center" flex={{ lg: 1 }}>
            <Image
              src="/logo-jakarta.png"
              alt="Logo Jakarta"
              width={{ base: "100px", md: "120px" }}
              height={{ base: "100px", md: "120px" }}
              objectFit="contain"
            />
            <VStack align="start" spacing={1}>
              <Heading
                as="h2"
                fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                fontWeight="bold"
                lineHeight="1.2"
              >
                Kelurahan
              </Heading>
              <Heading
                as="h2"
                fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                fontWeight="bold"
                lineHeight="1.2"
              >
                Kebon Baru
              </Heading>
            </VStack>
          </HStack>

          {/* Contact Information Section */}
          <VStack
            align={{ base: "start", lg: "start" }}
            spacing={4}
            flex={{ lg: 1 }}
          >
            <Heading
              as="h3"
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="bold"
              mb={2}
            >
              Hubungi Kami
            </Heading>

            <VStack align="start" spacing={3}>
              <Text fontSize={{ base: "sm", md: "md" }} lineHeight="1.7">
                Jl. Asem Baris Raya No. 101 9, RT.9/RW.5, Kb. Baru,
                <br />
                Kec. Tebet, Kota Jakarta Selatan, Daerah Khusus
                <br />
                Ibukota Jakarta 12830
              </Text>

              <Text fontSize={{ base: "sm", md: "md" }} fontWeight="medium">
                +62 812-1456-789
              </Text>

              <Text fontSize={{ base: "sm", md: "md" }} fontWeight="medium">
                @kelurahan_kebon_baru
              </Text>
            </VStack>
          </VStack>
        </HStack>
      </Container>
    </Box>
  );
};
