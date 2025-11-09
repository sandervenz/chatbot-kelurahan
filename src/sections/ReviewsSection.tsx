'use client';

import { Box, Container, Heading, Text } from '@chakra-ui/react';
import { ReviewCard, Review } from '@/components/ReviewCard';

// Review type di-export dari komponen ReviewCard

const REVIEWS: Review[] = [
  {
    id: 'r1',
    title: 'Pelayanan Cepat dan Ramah Banget!',
    excerpt: 'Pengalaman pertama saya di sini tuh di luar ekspektasi. Dari awal komunikasi via WhatsApp sampai proses akhirnya, semuanya berjalan lancar...',
    rating: 5,
    author: 'Rani',
    city: 'Jakarta',
    image: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=1200&auto=format&fit=crop',
    href: '#',
  },
  {
    id: 'r2',
    title: 'Tempatnya Nyaman, Staff-nya Bikin Betah',
    excerpt: 'Begitu masuk, suasananya beda — tenang, bersih, dan vibe-nya positif. Staff-nya sopan dan ramah.',
    rating: 5,
    author: 'Nuri',
    city: 'Surabaya',
    image: 'https://images.unsplash.com/photo-1604335399105-a0d7f8b3eac7?q=80&w=1200&auto=format&fit=crop',
    href: '#',
  },
  {
    id: 'r3',
    title: 'Bener-bener Dengerin Masukan Kita!',
    excerpt: 'Yang paling kerasa adalah mereka menghargai pendapat orang. Saran soal tampilan layanan di website langsung direspons.',
    rating: 4,
    author: 'Maulia',
    city: 'Bogor',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
    href: '#',
  },
  {
    id: 'r4',
    title: 'Taman Kota yang Asri buat Keluarga',
    excerpt: 'Area bermainnya luas dan teduh. Anak-anak betah, orang tua juga nyaman karena ada banyak tempat duduk.',
    rating: 5,
    author: 'Yusuf',
    city: 'Depok',
    image: 'https://images.unsplash.com/photo-1569420077793-5b6b6f1a34cc?q=80&w=1200&auto=format&fit=crop',
    href: '#',
  },
  {
    id: 'r5',
    title: 'Kuliner Variatif, Harga Masuk Akal',
    excerpt: 'Pilihan makanannya banyak dari yang ringan sampai berat. Favoritku bakso & mie ayam, porsinya pas dan enak!',
    rating: 4,
    author: 'Santi',
    city: 'Bekasi',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop',
    href: '#',
  },
];


export function ReviewsSection() {
  return (
    <Box bg="#FFFDF0" py={{ base: 10, md: 14 }}>
      <Container maxW="container.lg">
        <Text
          fontSize="sm"
          letterSpacing="widest"
          textTransform="uppercase"
          color="teal.700"
          mb={2}
        >
          Suara dari Kebon Baru
        </Text>

        <Heading as="h2" size="lg" color="blue.700" mb={{ base: 6, md: 8 }} lineHeight="short">
          Review Populer & Terbaru dari Wilayah Kelurahan Kebon Baru
        </Heading>
        {/* Full-bleed horizontal scroller on mobile, 5-column grid on large screens */}
        <Box
          width="90vw"
          position="relative"
          left="50%"
          transform="translateX(-50%)"
          mb={6}
          overflow="hidden"
        >
          <Box
            display={{ base: 'flex', lg: 'grid' }}
            gridTemplateColumns={{ lg: 'repeat(5, 1fr)' }}
            gap={{ base: 0, lg: 8 }}
            overflowX={{ base: 'auto', lg: 'visible' }}
            px={{ base: 4, md: 0 }}
            py={1}
            aria-label="Daftar review populer"
            sx={{
              scrollSnapType: 'x mandatory',
              '::-webkit-scrollbar': { height: '6px' },
              '::-webkit-scrollbar-track': { background: '#f1f1f1' },
              '::-webkit-scrollbar-thumb': { background: '#cbd5e0', borderRadius: 'full' },
            }}
          >
            {REVIEWS.map(r => (
              <Box
                key={r.id}
                minW={{ base: '90%', sm: '90%' }}
                flexShrink={0}
                scrollSnapAlign="start"
              >
                <ReviewCard r={r} />
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}