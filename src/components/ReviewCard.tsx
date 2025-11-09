'use client';

import { Box, Stack, Heading, Text, Link, HStack, Icon, Image } from '@chakra-ui/react';
import { FaGoogle } from 'react-icons/fa';
import { Stars } from './Stars';

export type Review = {
  id: string;
  title: string;
  excerpt: string;
  rating: number; // 1..5
  author: string;
  city: string;
  image?: string;
  href?: string;
};

export function ReviewCard({ r }: { r: Review }) {
  return (
    <Box
      bg="white"
      borderRadius="xl"
      boxShadow="sm"
      borderWidth="1px"
      borderColor="blackAlpha.100"
      overflow="hidden"
      display="flex"
      flexDirection="column"
      w={{ base: "70vw", md: "auto" }}
    >
      <Stack spacing={3} p={{ base: 4, md: 6 }} flex="1">
        <Heading as="h3" fontSize={{ base: 'md', md: 'xl' }} lineHeight="short" color="gray.800" noOfLines={2}>
          “{r.title}”
        </Heading>
        <Text color="gray.600" noOfLines={{ base: 2, md: 3 }} fontSize={{ base: 'sm', md: 'md' }}>
          {r.excerpt}{' '}
          <Link color="blue.500" href={r.href}>
            Selengkapnya
          </Link>
        </Text>
        <Stars value={r.rating} />
        <Stack spacing={0} fontSize={{ base: 'xs', md: 'sm' }}>
          <Text fontWeight="semibold" color="gray.800">
            {r.author}
          </Text>
            <Text color="gray.500">{r.city}</Text>
        </Stack>
        <HStack pt={2} spacing={2} color="gray.600" fontSize={{ base: 'xs', md: 'sm' }}>
          <Icon as={FaGoogle} color="red.500" />
          <Text fontSize="sm">Google</Text>
        </HStack>
      </Stack>
      <Box>
        <Image
          src={r.image}
          alt={r.title}
          objectFit="cover"
          w="100%"
          h={52}
          fallbackSrc="data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400'%3E%3Crect width='100%25' height='100%25' fill='%23f1f5f9'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%2394a3b8' font-family='Poppins, Arial, sans-serif' font-size='18'%3EImage Preview%3C/text%3E%3C/svg%3E"
        />
      </Box>
    </Box>
  );
}
