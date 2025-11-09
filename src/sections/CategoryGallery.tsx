'use client';

import { Box, Container, Heading, HStack, Text, Grid, GridItem, Icon, Image } from '@chakra-ui/react';
import { FaGlobeAsia, FaStore, FaMapMarkerAlt } from 'react-icons/fa';
import type { IconType } from 'react-icons';
import { useMemo, useRef, useState } from 'react';

type Category = 'wisata' | 'kuliner' | 'transport';

const categoryMeta: Record<Category, { label: string; bg: string; border: string; accent: string; icon: IconType; }[]> = {
  wisata: [
    { label: 'Pariwisata', bg: 'white', border: 'yellow.400', accent: 'yellow.500', icon: FaGlobeAsia },
    { label: '', bg: 'white', border: 'yellow.400', accent: 'yellow.500', icon: FaStore },
    { label: '', bg: 'white', border: 'yellow.400', accent: 'yellow.500', icon: FaMapMarkerAlt },
  ],
  kuliner: [
    { label: '', bg: 'white', border: 'blue.400', accent: 'blue.600', icon: FaGlobeAsia },
    { label: 'Kuliner', bg: 'white', border: 'blue.400', accent: 'blue.600', icon: FaStore },
    { label: '', bg: 'white', border: 'blue.400', accent: 'blue.600', icon: FaMapMarkerAlt },
  ],
  transport: [
    { label: '', bg: 'white', border: 'green.400', accent: 'green.600', icon: FaGlobeAsia },
    { label: '', bg: 'white', border: 'green.400', accent: 'green.600', icon: FaStore },
    { label: 'Transport', bg: 'white', border: 'green.400', accent: 'green.600', icon: FaMapMarkerAlt },
  ],
};

const galleryImages: Record<Category, string[]> = {
  wisata: [
    '/gallery/wisata1.jpg',
    '/gallery/wisata2.jpg',
    '/gallery/wisata3.jpg',
    '/gallery/wisata4.jpg',
    '/gallery/wisata5.jpg',
  ],
  kuliner: [
    '/gallery/kuliner1.jpg',
    '/gallery/kuliner2.jpg',
    '/gallery/kuliner3.jpg',
    '/gallery/kuliner4.jpg',
    '/gallery/kuliner5.jpg',
    '/gallery/kuliner6.jpg',
  ],
  transport: [
    '/gallery/transport1.jpg',
    '/gallery/transport2.jpg',
    '/gallery/transport3.jpg',
    '/gallery/transport4.jpg',
  ],
};

export function CategoryGallery() {
  const [active, setActive] = useState<Category>('wisata');
  const [leaving, setLeaving] = useState<Category | null>(null);
  const switchTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleSwitch = (cat: Category) => {
    if (cat === active) return;
    setLeaving(active);
    if (switchTimer.current) clearTimeout(switchTimer.current);
    switchTimer.current = setTimeout(() => {
      setActive(cat);
      setLeaving(null);
    }, 240);
  };

  const theme = useMemo(() => {
    switch (active) {
      case 'wisata':
        return { containerBg: 'yellow.100', title: 'Wisata, Kuliner & Transportasi', border: 'yellow.400' };
      case 'kuliner':
        return { containerBg: 'blue.200', title: 'Wisata, Kuliner & Transportasi', border: 'blue.400' };
      case 'transport':
        return { containerBg: 'green.200', title: 'Wisata, Kuliner & Transportasi', border: 'green.400' };
    }
  }, [active]);

  return (
    <Box py={16} bg="#FFFDF0">
      <Container maxW="container.lg">
        <Heading textAlign="center" color="blue.700" mb={6}>
          {theme.title}
        </Heading>
      </Container>

      <Container maxW="container.xl" maxH="650px">
        <Box bg={theme.containerBg} borderRadius="2xl" p={{ base: 4, md: 8 }}>
          {/* Category pills */}
          <HStack spacing={4} justify="center" mb={6}>
            {(['wisata','kuliner','transport'] as Category[]).map((cat, idx) => {
              const opts = categoryMeta[active][idx];
              const isActive = cat === active;
              const isLeaving = cat === leaving;
              return (
                <HStack
                  key={cat}
                  as="button"
                  onClick={() => handleSwitch(cat)}
                  bg="white"
                  borderRadius="xl"
                  px={isActive ? 6 : 0}
                  h="56px"
                  w={isActive ? 'auto' : isLeaving ? '64px' : '56px'}
                  boxShadow="sm"
                  borderWidth={isActive ? '2px' : '1px'}
                  borderColor={(isActive || isLeaving) ? opts.accent : 'gray.200'}
                  transition="all 480ms cubic-bezier(0.22, 0.61, 0.36, 1)"
                  transform={isActive ? 'scale(1)' : isLeaving ? 'scale(0.9)' : 'scale(0.96)'}
                  justify={isActive ? 'flex-start' : 'center'}
                  spacing={isActive ? 3 : 0}
                >
                  <Icon as={opts.icon} boxSize={8} color={(isActive || isLeaving) ? opts.accent : 'gray.400'} />
                  <Box
                    overflow="hidden"
                    maxW={isActive ? '160px' : '0px'}
                    opacity={isActive ? 1 : 0}
                    transition="max-width 0ms cubic-bezier(0.22, 0.61, 0.36, 1), opacity 0ms cubic-bezier(0.22, 0.61, 0.36, 1)"
                    display="block"
                  >
                    <Text fontWeight="700" color="gray.800">
                      {cat === 'wisata' ? 'Pariwisata' : cat === 'kuliner' ? 'Kuliner' : 'Transport'}
                    </Text>
                  </Box>
                </HStack>
              );
            })}
          </HStack>

          {/* Mosaic container with fixed height and cross-fade */}
          <Box position="relative" h={{ base: '620px', md: '560px' }}>
            {/* Wisata layout */}
            <Box
              position="absolute" inset={0}
              opacity={active === 'wisata' ? 1 : 0}
              transition="opacity 500ms ease-in-out"
              pointerEvents={active === 'wisata' ? 'auto' : 'none'}
            >
              <Grid h="100%" templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={4} sx={{ gridAutoRows: '1fr' }}>
                <GridItem colSpan={1} rowSpan={{ base: 3, md: 9 }}>
                  <GalleryImage src={galleryImages.wisata[0]} alt="Wisata 1" borderColor={theme.border} fill />
                </GridItem>
                <GridItem colSpan={1} rowSpan={{ base: 3, md: 3 }}>
                  <GalleryImage src={galleryImages.wisata[1]} alt="Wisata 2" borderColor={theme.border} fill />
                </GridItem>
                <GridItem colSpan={1} rowSpan={{ base: 3, md: 3 }}>
                  <GalleryImage src={galleryImages.wisata[2]} alt="Wisata 3" borderColor={theme.border} fill />
                </GridItem>
                <GridItem colSpan={{ base: 1, md: 2 }} rowSpan={{ base: 3, md: 3 }}>
                  <GalleryImage src={galleryImages.wisata[3]} alt="Wisata 4" borderColor={theme.border} fill />
                </GridItem>
                <GridItem colSpan={1} rowSpan={{ base: 3, md: 3 }}>
                  <GalleryImage src={galleryImages.wisata[4]} alt="Wisata 5" borderColor={theme.border} fill />
                </GridItem>
              </Grid>
            </Box>

            {/* Kuliner layout */}
            <Box
              position="absolute" inset={0}
              opacity={active === 'kuliner' ? 1 : 0}
              transition="opacity 500ms ease-in-out"
              pointerEvents={active === 'kuliner' ? 'auto' : 'none'}
            >
              <Grid h="100%" templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={4} sx={{ gridAutoRows: '1fr' }}>
                {galleryImages.kuliner.map((src, i) => (
                  <GridItem key={src} colSpan={1} rowSpan={{ base: 3, md: i < 3 ? 4 : 3 }}>
                    <GalleryImage src={src} alt={`Kuliner ${i+1}`} borderColor={theme.border} fill />
                  </GridItem>
                ))}
              </Grid>
            </Box>

            {/* Transport layout */}
            <Box
              position="absolute" inset={0}
              opacity={active === 'transport' ? 1 : 0}
              transition="opacity 500ms ease-in-out"
              pointerEvents={active === 'transport' ? 'auto' : 'none'}
            >
              <Grid h="100%" templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={4} sx={{ gridAutoRows: '1fr' }}>
                <GridItem colSpan={1} rowSpan={{ base: 3, md: 6 }}>
                  <GalleryImage src={galleryImages.transport[0]} alt="Transport 1" borderColor={theme.border} fill />
                </GridItem>
                <GridItem colSpan={1} rowSpan={{ base: 3, md: 3 }}>
                  <GalleryImage src={galleryImages.transport[1]} alt="Transport 2" borderColor={theme.border} fill />
                </GridItem>
                <GridItem colSpan={1} rowSpan={{ base: 3, md: 3 }}>
                  <GalleryImage src={galleryImages.transport[2]} alt="Transport 3" borderColor={theme.border} fill />
                </GridItem>
                <GridItem colSpan={{ base: 1, md: 2 }} rowSpan={{ base: 3, md: 3 }}>
                  <GalleryImage src={galleryImages.transport[3]} alt="Transport 4" borderColor={theme.border} fill />
                </GridItem>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

function GalleryImage({ src, alt, borderColor, ratio = '4/3', fill = false }: { src: string; alt: string; borderColor: string; ratio?: string; fill?: boolean }) {
  return (
    <Box borderWidth="4px" borderColor={borderColor} borderRadius="lg" overflow="hidden" bg="gray.100" h="100%">
      {fill ? (
        <Image src={src} alt={alt} w="100%" h="100%" objectFit="cover" fallbackSrc="/kelurahan-img.png" />
      ) : (
        <Box position="relative" w="100%" pb={`calc(100% / (${ratio}))`}>
          <Image
            src={src}
            alt={alt}
            position="absolute"
            inset={0}
            w="100%"
            h="100%"
            objectFit="cover"
            fallbackSrc="/kelurahan-img.png"
          />
        </Box>
      )}
    </Box>
  );
}
