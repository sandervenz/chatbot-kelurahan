'use client';

import { Box, Container, Heading, VStack, Input, InputGroup, InputRightElement, Icon, Divider } from '@chakra-ui/react';
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { LocationCard } from '@/components/LocationCard';

import { LocationDetailModal, Location } from '@/components/LocationDetailModal';

const mockLocations = [
  {
    id: '1',
    image: '/gallery/wisata1.jpg',
    title: 'Bowl Caffe Connection Tebet',
    description: 'Bowl Coffee Connection Tebet adalah kafe bergaya modern di Jalan Asem Baris Raya, dengan suasana nyaman dan sajian kopi khas.',
    address: 'Jl. Asem Baris Raya No.1, RT.2/RW.14, Kb. Baru, Kec. Tebet, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12830',
  },
  {
    id: '2',
    image: '/gallery/wisata2.jpg',
    title: 'Tebet Eco Park',
    description: 'Tebet Eco Park — ruang terbuka hijau di tengah kota.',
    address: 'Jl. Tebet Barat Raya, Tebet, Jakarta Selatan',
  },
  {
    id: '3',
    image: '/gallery/kuliner1.jpg',
    title: 'Kalia Restaurant',
    description: 'Restoran populer dengan menu lokal.',
    address: 'Jl. Tebet Timur Dalam Raya No. 43, Tebet, Jakarta Selatan',
  },
  {
    id: '4',
    image: '/gallery/wisata3.jpg',
    title: 'Taman Kodok',
    description: 'Taman kota yang asri dan cocok untuk keluarga, dengan area bermain anak dan jogging track.',
    address: 'Jl. Tebet Barat Dalam VIII, Tebet, Jakarta Selatan',
  },
  {
    id: '5',
    image: '/gallery/kuliner2.jpg',
    title: 'Sate Padang Ajo Ramon',
    description: 'Salah satu sate padang legendaris di Jakarta yang selalu ramai pengunjung.',
    address: 'Jl. Prof. Dr. Soepomo No. 41, Tebet, Jakarta Selatan',
  },
  {
    id: '6',
    image: '/gallery/transport1.jpg',
    title: 'Stasiun Tebet',
    description: 'Stasiun KRL utama yang menghubungkan Tebet dengan pusat kota dan sekitarnya.',
    address: 'Jl. Tebet Raya No. 1, Tebet, Jakarta Selatan',
  },
  {
    id: '7',
    image: '/gallery/wisata4.jpg',
    title: 'Taman Honda Tebet',
    description: 'Taman komunitas dengan fasilitas olahraga dan ruang terbuka hijau.',
    address: 'Jl. Tebet Barat Raya, Tebet, Jakarta Selatan',
  },
  {
    id: '8',
    image: '/gallery/kuliner3.jpg',
    title: 'Bakso Rusuk Samanhudi',
    description: 'Bakso rusuk dengan porsi besar dan rasa mantap, favorit warga sekitar.',
    address: 'Jl. Tebet Timur Dalam Raya No. 39, Tebet, Jakarta Selatan',
  },
];
 

export function SearchLocSection() {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<Location | null>(null);
  const filtered = mockLocations.filter((loc) =>
    loc.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box pt={8} pb={{ base: 6, md: 8 }} bg="#FFFDF0">
      <Container maxW="container.lg">
        <Divider
          w={{ base: '60%', md: '60%' }}
          mx="auto"
          mb={8}
          borderColor="gray.300"
          opacity={0.7}
        />
        <Heading color="blue.700" mb={6} textAlign="center">
          Mau Kemana Hari Ini?
        </Heading>
        <InputGroup mb={6} maxW="lg" mx="auto">
          <Input
            placeholder="Jelajahi"
            value={search}
            onChange={e => setSearch(e.target.value)}
            bg="white"
            borderRadius="xl"
            fontSize="lg"
            fontWeight="medium"
            pl={6}
            h={14}
            boxShadow="sm"
            _focus={{ borderColor: "blue.400", boxShadow: "0 0 0 2px #2563eb33" }}
          />
          <InputRightElement pointerEvents="none" h="full" display="flex" alignItems="center" pr={6}>
            <Icon as={FiSearch} color="gray.400" boxSize={6}/>
          </InputRightElement>
        </InputGroup>
        <Box
          maxH={{ base: '400px', md: '600px' }}
          overflowY="auto"
          pr={2}
          bg="white"
          borderRadius="xl"
          boxShadow="sm"
        >
          <VStack spacing={6} align="stretch">
            {filtered.map((loc) => (
              <LocationCard
                key={loc.id}
                image={loc.image}
                title={loc.title}
                description={loc.description}
                address={loc.address}
                onClick={() => setSelected(loc)}
              />
            ))}
          </VStack>
        </Box>
      </Container>

      {/* Modal for location detail */}
      <LocationDetailModal isOpen={!!selected} onClose={() => setSelected(null)} location={selected} />
    </Box>
  );
}
