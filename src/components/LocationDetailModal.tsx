import { Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, Heading, Text, Image as ChakraImage, Box, Box as ChakraBox } from '@chakra-ui/react';

export type Location = {
  id: string;
  image: string;
  title: string;
  description: string;
  address: string;
};

interface LocationDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  location: Location | null;
}

export function LocationDetailModal({ isOpen, onClose, location }: LocationDetailModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
      <ModalOverlay />
      <ModalContent
        maxW={{ base: "90%", md: "700px", lg: "900px" }}
        bg="#f3e1cb"
        borderRadius="2xl"
        p={0}
      >
        <ModalCloseButton boxSize={8} top={4} right={4} bg="#e2c7a1" color="#7a5c2e" _hover={{ bg: '#e2c7a1' }} />
        <ModalBody p={{ base: 6, md: 10 }}>
          {location && (
            <Box display={{ base: 'block', md: 'flex' }} gap={8} alignItems="flex-start">
              <ChakraBox
                flexShrink={0}
                w={{ base: '100%', md: '260px' }}
                h={{ base: '220px', md: '220px' }}
                bg="gray.200"
                borderRadius="lg"
                overflow="hidden"
                mb={{ base: 6, md: 0 }}
                mr={{ md: 8 }}
              >
                <ChakraImage
                  src={location.image}
                  alt={location.title}
                  w="100%"
                  h="100%"
                  objectFit="cover"
                />
              </ChakraBox>
              <Box flex="1">
                <Heading size="lg" color="#222" mb={2} fontWeight="bold">
                  {location.title}
                </Heading>
                <Text color="#222" fontSize="lg" mb={4}>
                  {location.description}
                </Text>
                <Text color="#444" fontSize="md" mb={2}>
                  {location.address}
                </Text>
                <Box mt={8} textAlign="center">
                  <Box
                    as="button"
                    bg="#cbb089"
                    color="#222"
                    fontWeight="bold"
                    fontSize="xl"
                    borderRadius="xl"
                    px={12}
                    py={2}
                    boxShadow="md"
                    _hover={{ bg: '#bfa06e' }}
                    onClick={onClose}
                  >
                    Jelajahi
                  </Box>
                </Box>
              </Box>
            </Box>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
