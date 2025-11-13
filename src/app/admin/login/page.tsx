'use client';

import {
  Box,
  Container,
  Flex,
  Heading,
  Input,
  Button,
  Text,
  Link,
  Image,
  InputGroup,
  InputLeftElement,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { LockIcon, AtSignIcon } from '@chakra-ui/icons';

export default function AdminLoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const router = useRouter();

  // Kredensial statis untuk sementara
  const STATIC_CREDENTIALS = {
    username: 'admin',
    password: 'admin123',
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulasi delay untuk login
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Validasi kredensial statis
    if (
      username === STATIC_CREDENTIALS.username &&
      password === STATIC_CREDENTIALS.password
    ) {
      // Login sukses
      toast({
        title: 'Login Berhasil',
        description: 'Selamat datang di Dashboard Admin',
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top',
      });

      // Simpan status login di localStorage (sementara)
      localStorage.setItem('isAdminLoggedIn', 'true');
      localStorage.setItem('adminUsername', username);

      // Redirect ke dashboard admin (nanti dibuat)
      setTimeout(() => {
        router.push('/admin/dashboard');
      }, 1000);
    } else {
      // Login gagal
      toast({
        title: 'Login Gagal',
        description: 'Nama pengguna atau kata sandi salah',
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top',
      });
    }

    setIsLoading(false);
  };

  return (
    <Flex minH="100vh" bg="gray.50">
      {/* Left Side - Image */}
      <Box
        flex="1"
        display={{ base: 'none', md: 'block' }}
        position="relative"
        overflow="hidden"
      >
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
          alt="Cityscape"
          objectFit="cover"
          w="100%"
          h="100%"
        />
        <Box
          position="absolute"
          bottom="8"
          left="8"
          bg="whiteAlpha.900"
          px="6"
          py="3"
          borderRadius="md"
          backdropFilter="blur(10px)"
        >
          <Text fontSize="lg" fontWeight="600" color="gray.800">
            Selamat datang di Kebon Baru
          </Text>
        </Box>
      </Box>

      {/* Right Side - Login Form */}
      <Flex
        flex="1"
        align="center"
        justify="center"
        px={{ base: 4, md: 8 }}
        py={12}
      >
        <Container maxW="md" w="full">
          <VStack spacing={8} align="stretch">
            <Box textAlign="center">
              <Heading
                as="h1"
                size="xl"
                mb={2}
                fontWeight="700"
                color="gray.800"
              >
                Masuk
              </Heading>
            </Box>

            <Box
              as="form"
              onSubmit={handleLogin}
              bg="white"
              p={8}
              borderRadius="xl"
              boxShadow="lg"
            >
              <VStack spacing={6}>
                <Box w="full">
                  <InputGroup size="lg">
                    <InputLeftElement pointerEvents="none">
                      <AtSignIcon color="gray.400" />
                    </InputLeftElement>
                    <Input
                      type="text"
                      placeholder="Nama Pengguna"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      borderColor="gray.300"
                      _hover={{ borderColor: 'gray.400' }}
                      _focus={{
                        borderColor: 'blue.500',
                        boxShadow: '0 0 0 1px #3182CE',
                      }}
                    />
                  </InputGroup>
                </Box>

                <Box w="full">
                  <InputGroup size="lg">
                    <InputLeftElement pointerEvents="none">
                      <LockIcon color="gray.400" />
                    </InputLeftElement>
                    <Input
                      type="password"
                      placeholder="Kata Sandi"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      borderColor="gray.300"
                      _hover={{ borderColor: 'gray.400' }}
                      _focus={{
                        borderColor: 'blue.500',
                        boxShadow: '0 0 0 1px #3182CE',
                      }}
                    />
                  </InputGroup>
                </Box>

                <Box w="full" textAlign="left">
                  <Link
                    color="blue.600"
                    fontSize="sm"
                    fontWeight="500"
                    _hover={{ textDecoration: 'underline' }}
                  >
                    Lupa Kata Sandi?
                  </Link>
                </Box>

                <Button
                  type="submit"
                  colorScheme="blue"
                  size="lg"
                  w="full"
                  isLoading={isLoading}
                  loadingText="Memproses..."
                  bg="blue.600"
                  _hover={{ bg: 'blue.700' }}
                  fontWeight="600"
                  fontSize="md"
                >
                  Masuk
                </Button>

                <Flex align="center" justify="center" gap={1}>
                  <Text fontSize="sm" color="gray.600">
                    Apakah anda belum memiliki akun ?
                  </Text>
                  <Link
                    href="/admin/register"
                    color="blue.600"
                    fontSize="sm"
                    fontWeight="600"
                    _hover={{ textDecoration: 'underline' }}
                  >
                    Daftar
                  </Link>
                </Flex>
              </VStack>
            </Box>

            {/* Info untuk development */}
            <Box
              bg="blue.50"
              p={4}
              borderRadius="md"
              border="1px"
              borderColor="blue.200"
            >
              <Text fontSize="sm" color="blue.800" fontWeight="600" mb={2}>
                🔐 Info Login (Development)
              </Text>
              <Text fontSize="xs" color="blue.700">
                Username: <strong>admin</strong>
              </Text>
              <Text fontSize="xs" color="blue.700">
                Password: <strong>admin123</strong>
              </Text>
            </Box>
          </VStack>
        </Container>
      </Flex>
    </Flex>
  );
}
