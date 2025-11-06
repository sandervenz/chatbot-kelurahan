import { Box, Center, Heading, Image, useDisclosure, Modal, ModalOverlay, ModalContent, Text, IconButton, Stack, Divider } from "@chakra-ui/react";
import React, { useState } from "react";
import { FiGlobe, FiX } from "react-icons/fi";

const MAP_IMAGE = "/maps-statis.png";

export function MapsSection() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [panelOpen, setPanelOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);

  const places = [
    "Tebet Eco Park",
    "Kalia Restaurant",
    "Bowl Cafe Connection",
    "Bakso Soun dan Mie Ayam TTD",
    "Mie Ayam Umar",
    "Kopi Lojik",
    "Kopi Kina",
    "Stasiun Tebet",
    "Sky Pasta",
  ];

  return (
    <Box bg="#FFFDF0" py={12}>
      <Center flexDirection="column">
        <Heading textAlign="center" color="blue.700" mb={6}>
          Telusuri melalui Peta Interaktif Kebon Baru
        </Heading>
        <Box
          bg="green.300"
          borderRadius="20px"
          p={2}
          boxShadow="md"
          cursor="pointer"
          onClick={onOpen}
          transition="box-shadow 0.2s"
          _hover={{ boxShadow: "lg" }}
          position="relative"
        >
          {/* Globe trigger */}
          <IconButton
            aria-label="Buka daftar tempat"
            icon={<FiGlobe />}
            color="green.600"
            bg="white"
            _hover={{ bg: "white", transform: "translateY(-1px)" }}
            size="lg"
            rounded="xl"
            position="absolute"
            top={6}
            left={6}
            boxShadow="md"
            onClick={(e) => { e.stopPropagation(); setPanelOpen(true); }}
          />

          {/* Floating places panel */}
          {panelOpen && (
            <Box
              position="absolute"
              top={{ base: 14, md: 12 }}
              left={{ base: 14, md: 12 }}
              w={{ base: "220px", md: "260px" }}
              maxH={{ base: "60vh", md: "70%" }}
              overflowY="auto"
              bg="white"
              border="1px solid"
              borderColor="gray.200"
              borderRadius="lg"
              boxShadow="lg"
              p={3}
              zIndex={2}
              onClick={(e) => e.stopPropagation()}
            >
              <IconButton
                aria-label="Tutup panel"
                icon={<FiX />}
                size="xs"
                position="absolute"
                top={2}
                right={2}
                bg="blue.600"
                color="white"
                _hover={{ bg: "blue.700" }}
                onClick={() => setPanelOpen(false)}
              />
              <Stack spacing={2} pt={1} divider={<Divider />}>
                {places.map((p, idx) => (
                  <Box
                    key={p}
                    px={3}
                    py={2}
                    bg={idx === activeIdx ? "green.200" : "transparent"}
                    borderRadius="sm"
                    cursor="pointer"
                    _hover={{ bg: idx === activeIdx ? "green.200" : "gray.50" }}
                    onClick={() => setActiveIdx(idx)}
                  >
                    <Text fontSize="sm" fontWeight={idx === activeIdx ? "semibold" : "medium"}>{p}</Text>
                  </Box>
                ))}
              </Stack>
            </Box>
          )}
          <Image
            src={MAP_IMAGE}
            alt="Peta Kebon Baru"
            borderRadius="16px"
            objectFit="cover"
            w={{ base: "90vw", md: "800px" }}
            h={{ base: "50vw", md: "500px" }}
          />
        </Box>
        <Text size="sm" color="gray.700" mt={3} mb={6}>
          Peta Eksplorasi Kebon Baru
        </Text>
        <Text
          maxW={{ base: "90%", md: "4xl" }}
          textAlign="center"
          color="gray.700"
          fontSize={{ base: "md", md: "lg" }}
          lineHeight={{ base: 7, md: 8 }}
        >
          Temukan semua yang kamu butuhkan di Kebon Baru lewat peta interaktif ini! Jelajahi lokasi wisata favorit, spot kuliner hits, hingga titik transportasi yang memudahkan perjalananmu. Setiap ikon di peta siap memandu kamu menemukan sudut-sudut terbaik di kelurahan ini. Dari taman hijau yang asri, warung makan lokal yang nikmat, sampai halte dan rute transportasi, semua bisa kamu eksplorasi dengan mudah.
        </Text>
      </Center>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
        <ModalOverlay bg="blackAlpha.700" backdropFilter="blur(8px)" />
        <ModalContent bg="transparent" boxShadow="none" display="flex" alignItems="center" justifyContent="center">
          <Image
            src={MAP_IMAGE}
            alt="Peta Kebon Baru Besar"
            borderRadius="20px"
            objectFit="contain"
            w={{ base: "80vw", md: "1000px" }}
            h={{ base: "55vw", md: "400px" }}
            boxShadow="2xl"
          />
        </ModalContent>
      </Modal>
    </Box>
  );
}
