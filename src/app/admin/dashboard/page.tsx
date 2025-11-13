'use client';

import {
  Box,
  Grid,
  GridItem,
  Card,
  CardBody,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  Badge,
  Flex,
  IconButton,
} from '@chakra-ui/react';
import { FiMapPin, FiShoppingBag, FiTruck, FiEdit, FiTrash2 } from 'react-icons/fi';

// Data statis untuk sementara
const statsData = [
  {
    label: 'Wisata',
    value: 21,
    icon: FiMapPin,
    color: 'blue',
  },
  {
    label: 'Kuliner',
    value: 35,
    icon: FiShoppingBag,
    color: 'orange',
  },
  {
    label: 'Transportasi',
    value: 5,
    icon: FiTruck,
    color: 'green',
  },
];

const recentActivities = [
  {
    id: 1,
    name: 'Tebat Eco Park',
    category: 'Wisata',
    time: '1 Jam Lalu',
  },
  {
    id: 2,
    name: 'Kalla Restaurant',
    category: 'Kuliner',
    time: '1 Jam Lalu',
  },
  {
    id: 3,
    name: 'Stasiun Tebet',
    category: 'Transportasi',
    time: '1 Jam Lalu',
  },
];

const messagesData = [
  {
    id: 1,
    name: 'Rani Kamila',
    time: '2 Hari Lalu',
    message:
      'Sekarang pelayanan di Kelurahan Kebon Baru jauh lebih cepat! Urus surat-surat jadi nggak ribet dan staffnya juga ramah banget. Salut pokoknya!',
    rating: 'A',
  },
  {
    id: 2,
    name: 'Budi Santoso',
    time: '3 Hari Lalu',
    message:
      'Aplikasi chatbot ini sangat membantu! Saya bisa mendapatkan informasi dengan cepat tanpa perlu datang ke kantor.',
    rating: 'A',
  },
];

export default function AdminDashboardPage() {
  return (
    <Box>
      {/* Welcome Message */}
      <Box
        bg="blue.600"
        bgGradient="linear(to-r, blue.600, blue.700)"
        color="white"
        p={6}
        borderRadius="xl"
        mb={6}
        boxShadow="md"
      >
        <Heading size="md" mb={1}>
          Halo, Admin!
        </Heading>
        <Text fontSize="sm" opacity={0.9}>
          Hi, Alifia. Welcome back to Kebon Baru Admin!
        </Text>
      </Box>

      <Grid templateColumns={{ base: '1fr', lg: '2fr 1fr' }} gap={6}>
        {/* Left Column */}
        <GridItem>
          <VStack spacing={6} align="stretch">
            {/* Stats Cards */}
            <Box>
              <Heading size="md" mb={4} color="gray.800">
                Total Wisata, Kuliner, dan Transport
              </Heading>
              <Grid templateColumns="repeat(3, 1fr)" gap={4}>
                {statsData.map((stat) => (
                  <Card
                    key={stat.label}
                    bg="orange.50"
                    borderRadius="2xl"
                    boxShadow="sm"
                    _hover={{ boxShadow: 'md', transform: 'translateY(-2px)' }}
                    transition="all 0.2s"
                  >
                    <CardBody textAlign="center" py={8}>
                      <VStack spacing={2}>
                        <Icon
                          as={stat.icon}
                          boxSize={6}
                          color={`${stat.color}.600`}
                        />
                        <Text fontSize="sm" color="gray.600" fontWeight="500">
                          {stat.label}
                        </Text>
                        <Heading size="2xl" color="gray.800">
                          {stat.value}
                        </Heading>
                      </VStack>
                    </CardBody>
                  </Card>
                ))}
              </Grid>
            </Box>

            {/* Messages from Public */}
            <Box>
              <Heading size="md" mb={4} color="gray.800">
                Pesan dari Masyarakat
              </Heading>
              <VStack spacing={4} align="stretch">
                {messagesData.map((message) => (
                  <Card
                    key={message.id}
                    bg="orange.50"
                    borderRadius="xl"
                    boxShadow="sm"
                  >
                    <CardBody>
                      <Flex justify="space-between" align="start" mb={3}>
                        <Box flex="1">
                          <Heading size="sm" color="gray.800" mb={1}>
                            {message.name}
                          </Heading>
                          <Text fontSize="xs" color="gray.500">
                            {message.time}
                          </Text>
                        </Box>
                        <Badge
                          colorScheme="green"
                          fontSize="lg"
                          px={3}
                          py={1}
                          borderRadius="md"
                        >
                          {message.rating}
                        </Badge>
                      </Flex>
                      <Text fontSize="sm" color="gray.700" lineHeight="tall">
                        {message.message}
                      </Text>
                    </CardBody>
                  </Card>
                ))}
              </VStack>
            </Box>
          </VStack>
        </GridItem>

        {/* Right Column - Recent Activities */}
        <GridItem>
          <Card bg="white" borderRadius="xl" boxShadow="sm" h="fit-content">
            <CardBody>
              <Heading size="md" mb={4} color="gray.800">
                Aktivitas Terbaru
              </Heading>
              <VStack spacing={4} align="stretch">
                {recentActivities.map((activity) => (
                  <Box
                    key={activity.id}
                    p={4}
                    bg="gray.50"
                    borderRadius="lg"
                    _hover={{ bg: 'gray.100' }}
                    transition="all 0.2s"
                  >
                    <Flex justify="space-between" align="center">
                      <Box flex="1">
                        <Heading size="sm" color="gray.800" mb={1}>
                          {activity.name}
                        </Heading>
                        <Text fontSize="xs" color="gray.600">
                          {activity.category} - {activity.time}
                        </Text>
                      </Box>
                      <HStack spacing={2}>
                        <IconButton
                          aria-label="Edit"
                          icon={<FiEdit />}
                          size="sm"
                          variant="ghost"
                          colorScheme="blue"
                        />
                        <IconButton
                          aria-label="Delete"
                          icon={<FiTrash2 />}
                          size="sm"
                          variant="ghost"
                          colorScheme="red"
                        />
                      </HStack>
                    </Flex>
                  </Box>
                ))}
              </VStack>
            </CardBody>
          </Card>
        </GridItem>
      </Grid>
    </Box>
  );
}
