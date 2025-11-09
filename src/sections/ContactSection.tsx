'use client';

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Input,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  useToast,
  SimpleGrid,
} from '@chakra-ui/react';
import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export function ContactSection() {
  const toast = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    // Indonesian phone number format: 08xx-xxxx-xxxx or +62xxx
    const phoneRegex = /^(\+62|62|0)[0-9]{9,12}$/;
    return phoneRegex.test(phone.replace(/[\s-]/g, ''));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = 'Nama harus diisi';
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Nama minimal 3 karakter';
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = 'Email harus diisi';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Format email tidak valid';
    }

    // Validate phone
    if (!formData.phone.trim()) {
      newErrors.phone = 'Nomor telepon harus diisi';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Format nomor telepon tidak valid (contoh: 081234567890)';
    }

    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = 'Pesan harus diisi';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Pesan minimal 10 karakter';
    } else if (formData.message.length > 500) {
      newErrors.message = 'Pesan maksimal 500 karakter';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: 'Validasi Gagal',
        description: 'Mohon periksa kembali form Anda.',
        status: 'error',
        duration: 4000,
        isClosable: true,
        position: 'top',
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Success
      toast({
        title: 'Pesan Terkirim!',
        description: 'Terima kasih! Kami akan segera menghubungi Anda.',
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top',
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      setErrors({});
    } catch {
      // Error
      toast({
        title: 'Gagal Mengirim',
        description: 'Terjadi kesalahan. Silakan coba lagi.',
        status: 'error',
        duration: 4000,
        isClosable: true,
        position: 'top',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    
    // Apply character limit for message
    if (name === 'message' && value.length > 500) {
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  return (
    <Box
      bg="#FFFDF0"
      position="relative"
      overflow="hidden"
      py={10}
    >
      <Box
        position="absolute"
        inset={0}
        bgImage="radial-gradient(#d3d8e0 1px, transparent 1px)"
        bgSize="32px 32px"
        opacity={0.35}
        pointerEvents="none"
      />
      <Container maxW="container.xl" position="relative">
        <Heading color="blue.700" mb={6} textAlign="center">
          Tulis, Sampaikan, Kami Dengar!
        </Heading>

        <SimpleGrid
          columns={{ base: 1 }}
          templateColumns={{ base: '1fr', lg: '60% 40%' }}
          spacing={10}
          alignItems="stretch"
        >
          {/* Left side - Form */}
          <Box
            as="form"
            onSubmit={handleSubmit}
            bg="white"
            p={{ base: 6, md: 8 }}
            borderRadius="3xl"
            boxShadow="xl"
            h="100%"
          >
            <VStack spacing={4}>
              <FormControl isInvalid={!!errors.name} isRequired>
                <FormLabel color="gray.700" fontWeight="semibold">
                  Nama
                </FormLabel>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nama lengkap Anda"
                  size="lg"
                  borderRadius="2xl"
                  bg="#f4f6fb"
                  h={12}
                  fontWeight="medium"
                  _hover={{ bg: '#edf1f8' }}
                  _focus={{
                    bg: 'white',
                    borderColor: '#1d5fd5',
                    boxShadow: '0 0 0 1px #1d5fd5',
                  }}
                />
                <FormErrorMessage>{errors.name}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.email} isRequired>
                <FormLabel color="gray.700" fontWeight="semibold">
                  Email
                </FormLabel>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email@example.com"
                  size="lg"
                  borderRadius="2xl"
                  bg="#f4f6fb"
                  h={12}
                  fontWeight="medium"
                  _hover={{ bg: '#edf1f8' }}
                  _focus={{
                    bg: 'white',
                    borderColor: '#1d5fd5',
                    boxShadow: '0 0 0 1px #1d5fd5',
                  }}
                />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.phone} isRequired>
                <FormLabel color="gray.700" fontWeight="semibold">
                  Nomor Telepon
                </FormLabel>
                <Input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="081234567890"
                  size="lg"
                  borderRadius="2xl"
                  bg="#f4f6fb"
                  h={12}
                  fontWeight="medium"
                  _hover={{ bg: '#edf1f8' }}
                  _focus={{
                    bg: 'white',
                    borderColor: '#1d5fd5',
                    boxShadow: '0 0 0 1px #1d5fd5',
                  }}
                />
                <FormErrorMessage>{errors.phone}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.message} isRequired>
                <FormLabel color="gray.700" fontWeight="semibold">
                  Pesan
                </FormLabel>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tulis pesan Anda di sini..."
                  size="lg"
                  borderRadius="2xl"
                  bg="#f4f6fb"
                  rows={5}
                  resize="vertical"
                  fontWeight="medium"
                  _hover={{ bg: '#edf1f8' }}
                  _focus={{
                    bg: 'white',
                    borderColor: '#1d5fd5',
                    boxShadow: '0 0 0 1px #1d5fd5',
                  }}
                />
                <Text
                  fontSize="sm"
                  color={formData.message.length >= 500 ? 'red.500' : 'gray.500'}
                  mt={1}
                  textAlign="right"
                >
                  {formData.message.length}/500 karakter
                </Text>
                <FormErrorMessage>{errors.message}</FormErrorMessage>
              </FormControl>

              <Button
                type="submit"
                bg="#0f4fa8"
                color="white"
                size="lg"
                fontWeight="semibold"
                px={10}
                borderRadius="lg"
                alignSelf={{ base: 'stretch', md: 'flex-start' }}
                isLoading={isSubmitting}
                loadingText="Mengirim..."
                _hover={{
                  bg: '#0c4797',
                  transform: 'translateY(-1px)',
                  boxShadow: 'lg',
                }}
                _active={{ bg: '#0a3d83' }}
                transition="all 0.2s"
              >
                Kirim Sekarang
              </Button>
            </VStack>
          </Box>

          {/* Right side - Info */}
          <VStack
            align={{ base: 'center', lg: 'flex-start' }}
            justify="center"
            spacing={{ base: 6, md: 8 }}
            px={{ base: 2, md: 6, lg: 10 }}
            h="100%"
            w="100%"
          >
            <VStack
              spacing={{ base: 2, md: 4 }}
              align={{ base: 'center', lg: 'flex-start' }}
              w="full"
            >
              <Heading
                as="h3"
                size={{ base: 'xl', md: '2xl' }}
                fontWeight="extrabold"
                color="#1d7f5c"
                textAlign={{ base: 'center', lg: 'left' }}
              >
                Kami Percaya, Perubahan Besar
              </Heading>
              <Box
                bg="#0f4fa8"
                color="yellow.300"
                borderRadius="2xl"
                px={{ base: 6, md: 8 }}
                py={{ base: 4, md: 6 }}
                mt={{ base: 2, md: 4 }}
                boxShadow="lg"
                textAlign={{ base: 'center', lg: 'left' }}
                w="auto"
              >
                <Heading as="h4" size={{ base: 'lg', md: 'xl' }} fontWeight="extrabold" lineHeight="shorter">
                  Berawal Dari
                </Heading>
                <Heading as="h4" size={{ base: 'lg', md: 'xl' }} fontWeight="extrabold" lineHeight="shorter">
                  Cerita Kecil
                </Heading>
                <Heading as="h4" size={{ base: 'lg', md: 'xl' }} fontWeight="extrabold" lineHeight="shorter">
                  Kalian.
                </Heading>
              </Box>
            </VStack>
          </VStack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
