'use client';

import { Box, Container, Heading, SimpleGrid, VStack, Text, Icon } from '@chakra-ui/react';
import { FaGlobeAsia, FaUtensils, FaBus } from 'react-icons/fa';

const features = [
  {
    icon: FaGlobeAsia,
    title: 'Wisata yang Hidup di Tengah Kota',
    description: 'Nikmati ruang hijau dan area bermain yang menghadirkan suasana segar di tengah hiruk-pikuk perkotaan.'
  },
  {
    icon: FaUtensils,
    title: 'Kuliner yang Menggugah Selera',
    description: 'Dari jajanan kaki lima hingga kuliner legendaris, Kebon Baru punya cita rasa khas yang selalu bikin ingin kembali.'
  },
  {
    icon: FaBus,
    title: 'Akses Transportasi Mudah',
    description: 'Terhubung langsung dengan berbagai moda transportasi — dari halte Transjakarta, stasiun KRL, hingga jalur kendaraan umum ke seluruh kota.'
  }
];

export function FeaturesSection() {
  return (
    <Box bg="#8bb3e2" py={16}>
      <Container maxW="container.lg">
        <VStack spacing={12}>
          <Box textAlign="center" mb={2}>
            <Heading size="xl" mb={0} color="white" fontWeight="bold">
              Tiga Daya Tarik Utama{' '}
              <Box
                as="span"
                display="inline-block"
                position="relative"
                px={3}
                bg="#ffe97a"
                borderRadius="xs"
                fontWeight="extrabold"
                color="#1856a6"
                zIndex={1}
              >
                Kebon Baru
                <Box
                  as="span"
                  position="absolute"
                  left={2}
                  right={2}
                  bottom={-2}
                  height="4px"
                  bg="#2bb673"
                  borderRadius="full"
                  zIndex={2}
                />
              </Box>
            </Heading>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {features.map((feature, index) => (
              <VStack
                key={index}
                align="center"
                spacing={4}
                px={2}
              >
                <Box
                  bg="white"
                  borderRadius="xl"
                  boxSize={20}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mb={2}
                  mt={2}
                  boxShadow="md"
                >
                  <Icon
                    as={feature.icon}
                    boxSize={10}
                    color={index === 0 ? "yellow.400" : index === 1 ? "blue.500" : "green.500"}
                  />
                </Box>
                <Heading size="md" textAlign="center" color="white" fontWeight="bold">
                  {feature.title}
                </Heading>
                <Text textAlign="center" color="white" fontSize="lg">
                  {feature.description}
                </Text>
              </VStack>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}