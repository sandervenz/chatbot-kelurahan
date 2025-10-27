'use client';

import { Box, Container, Heading, Text, SimpleGrid, VStack, Image } from '@chakra-ui/react';

export function WelcomeSection() {
  return (
  <Container maxW="container.lg" py={16}>
      <Heading as="h2" size="xl" color="blue.600" mb={6}>
        Selamat Datang dari Kami di Kebon Baru
      </Heading>

      {/* Quote: single column */}
      <Box
        p={6}
        bg="gray.50"
        borderRadius="lg"
        boxShadow="sm"
        mb={8}
      >
        <Text fontSize="lg" color="gray.700" fontStyle="italic">
          &ldquo;Selamat datang di Kelurahan Kebon Baru! Kami berkomitmen memberikan pelayanan terbaik dan membangun lingkungan yang nyaman bagi seluruh warga.&rdquo;
        </Text>
      </Box>

      {/* Below: two columns — left tall image, right title + long text */}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} alignItems="stretch">
        <Box h={{ base: 'auto', md: '520px' }}>
          <Image
            src="/kelurahan-img.png"
            alt="Kelurahan Kebon Baru"
            width="100%"
            height="100%"
            objectFit="cover"
            borderRadius="lg"
          />
        </Box>

        <VStack align="stretch" spacing={4} h={{ base: 'auto', md: '520px' }}>
          <Box>
            <Text color="blue.600" fontWeight="700" fontSize={{ base: 'lg', md: 'xl' }}>
              Kelurahan Kebon Baru
            </Text>
          </Box>

          <Box flex="1" overflowY={{ base: 'visible', md: 'auto' }}>
            <Text fontSize="md" color="gray.700" mb={4}>
              Selamat datang di Kelurahan Kebon Baru, jantungnya kehidupan urban yang tetap menyimpan pesona lokal. Dari jalan-jalan yang ramai dengan aktivitas warga, hingga sudut-sudut tersembunyi yang menyimpan cerita dan keindahan khasnya, Kebon Baru menawarkan pengalaman yang lengkap bagi siapa saja. Di sini, kamu bisa menjelajahi taman-taman hijau yang nyaman untuk bersantai, mencicipi kuliner otentik yang memanjakan lidah, hingga menemukan berbagai pilihan transportasi yang memudahkan setiap perjalananmu.
            </Text>

            <Text fontSize="md" color="gray.700">
              Di tengah dinamika Jakarta yang terus bergerak, Kelurahan Kebon Baru hadir sebagai ruang hidup yang menyeimbangkan modernitas dan kehangatan komunitas. Setiap harinya, kolaborasi antara warga, pelaku usaha lokal, dan pemerintah kelurahan menciptakan harmoni yang terasa di setiap sudutnya — dari kegiatan gotong royong, festival budaya, hingga inisiatif lingkungan yang menjaga kebersihan dan keasrian wilayah. Kebon Baru bukan sekadar tempat tinggal, tapi juga wadah tumbuhnya solidaritas, inovasi, dan semangat kebersamaan yang membuat setiap langkah
            </Text>
          </Box>
        </VStack>
      </SimpleGrid>
    </Container>
  );
}