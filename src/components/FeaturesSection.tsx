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
    description: 'Terhubung langsung dengan berbagai moda transportasi — dari halte Transjakarta, stasiun KRL, hingga jalur kendaraan umum yang menjangkau seluruh penjuru kota.'
  }
];

export function FeaturesSection() {
  return (
    <Box bg="blue.50" py={16}>
      <Container maxW="container.md">
        <VStack spacing={12}>
          <Box textAlign="center">
            <Heading size="xl" mb={2}>
              Tiga Daya Tarik Utama <Text as="span" color="blue.500">Kebon Baru</Text>
            </Heading>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {features.map((feature, index) => (
              <VStack
                key={index}
                align="center"
                p={6}
                bg="white"
                borderRadius="lg"
                boxShadow="sm"
                spacing={4}
              >
                <Icon
                  as={feature.icon}
                  boxSize={12}
                  color={index === 0 ? "yellow.400" : index === 1 ? "blue.500" : "green.500"}
                />
                <Heading size="md" textAlign="center">
                  {feature.title}
                </Heading>
                <Text textAlign="center" color="gray.600">
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