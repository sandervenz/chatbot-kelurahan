'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { ReactNode } from 'react';

// Use Poppins as the app font (matches layout.tsx)
const theme = extendTheme({
  fonts: {
    heading: `Poppins, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial`,
    body: `Poppins, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial`,
  },
});

interface ChakraWrapperProps {
  children: ReactNode;
}

export function ChakraWrapper({ children }: ChakraWrapperProps) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  );
}