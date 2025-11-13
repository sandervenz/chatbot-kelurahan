'use client';

import {
  Box,
  Flex,
  VStack,
  Button,
  Heading,
  Text,
  Icon,
  Avatar,
  HStack,
  useToast,
} from '@chakra-ui/react';
import { usePathname, useRouter } from 'next/navigation';
import { FiHome, FiMapPin, FiShoppingBag, FiTruck, FiEdit, FiLogOut } from 'react-icons/fi';
import { useEffect } from 'react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const toast = useToast();

  // Check authentication directly from localStorage
  const isLoggedIn = typeof window !== 'undefined' ? localStorage.getItem('isAdminLoggedIn') : null;
  const adminUsername = typeof window !== 'undefined' ? localStorage.getItem('adminUsername') || 'Admin' : 'Admin';
  
  useEffect(() => {
    // Redirect ke login jika belum login
    if (!isLoggedIn && pathname !== '/admin/login') {
      toast({
        title: 'Akses Ditolak',
        description: 'Silakan login terlebih dahulu untuk mengakses halaman admin',
        status: 'warning',
        duration: 3000,
        isClosable: true,
        position: 'top',
      });
      router.push('/admin/login');
    }
  }, [pathname, router, toast, isLoggedIn]);

  // Don't show layout on login page
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  // Show loading or nothing while checking auth
  if (!isLoggedIn) {
    return null;
  }

  const menuItems = [
    { label: 'Dashboard', icon: FiHome, path: '/admin/dashboard' },
    { label: 'Kelola Wisata', icon: FiMapPin, path: '/admin/wisata' },
    { label: 'Kelola Kuliner', icon: FiShoppingBag, path: '/admin/kuliner' },
    { label: 'Kelola Transport', icon: FiTruck, path: '/admin/transport' },
    { label: 'Ulasan', icon: FiEdit, path: '/admin/ulasan' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    localStorage.removeItem('adminUsername');
    toast({
      title: 'Logout Berhasil',
      description: 'Anda telah keluar dari dashboard admin',
      status: 'success',
      duration: 3000,
      isClosable: true,
      position: 'top',
    });
    router.push('/admin/login');
  };

  return (
    <Flex minH="100vh" bg="gray.50">
      {/* Sidebar */}
      <Box
        w="280px"
        bg="white"
        boxShadow="sm"
        p={6}
        display={{ base: 'none', lg: 'flex' }}
        flexDirection="column"
        borderRight="1px"
        borderColor="gray.200"
      >
        {/* Logo/Brand */}
        <Box mb={10}>
          <Heading size="lg" color="gray.800" fontWeight="700">
            Kebon Baru.
          </Heading>
          <Text fontSize="sm" color="gray.500" mt={1}>
            Admin Dashboard
          </Text>
        </Box>

        {/* Menu Items */}
        <VStack spacing={2} align="stretch" flex="1">
          {menuItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Button
                key={item.path}
                onClick={() => router.push(item.path)}
                leftIcon={<Icon as={item.icon} boxSize={5} />}
                justifyContent="flex-start"
                variant="ghost"
                h="48px"
                px={4}
                bg={isActive ? 'green.50' : 'transparent'}
                color={isActive ? 'green.700' : 'gray.700'}
                fontWeight={isActive ? '600' : '400'}
                _hover={{
                  bg: isActive ? 'green.100' : 'gray.100',
                }}
                borderRadius="lg"
              >
                {item.label}
              </Button>
            );
          })}
        </VStack>

        {/* Logout Button */}
        <Button
          onClick={handleLogout}
          leftIcon={<FiLogOut />}
          colorScheme="blue"
          w="full"
          mt={4}
          h="48px"
          borderRadius="lg"
          fontWeight="600"
        >
          Logout
        </Button>
      </Box>

      {/* Main Content */}
      <Box flex="1" overflow="auto">
        {/* Top Bar */}
        <Box
          bg="white"
          px={8}
          py={4}
          boxShadow="sm"
          borderBottom="1px"
          borderColor="gray.200"
        >
          <Flex justify="space-between" align="center">
            <Heading size="md" color="gray.800">
              {menuItems.find((item) => item.path === pathname)?.label || 'Dashboard'}
            </Heading>
            <HStack spacing={4}>
              <Box textAlign="right">
                <Text fontSize="sm" fontWeight="600" color="gray.800">
                  Halo, Admin!
                </Text>
                <Text fontSize="xs" color="gray.500">
                  {adminUsername}
                </Text>
              </Box>
              <Avatar
                size="md"
                name={adminUsername}
                bg="blue.500"
                color="white"
              />
            </HStack>
          </Flex>
        </Box>

        {/* Page Content */}
        <Box p={8}>{children}</Box>
      </Box>
    </Flex>
  );
}
