'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });

// Use Poppins as the app font (matches layout.tsx)
const theme = extendTheme({
  fonts: {
    heading: poppins.style.fontFamily,
    body: poppins.style.fontFamily,
  },
  styles: {
    global: {
      'html, body': {
        fontFamily: poppins.style.fontFamily,
      },
      'h1, h2, h3, h4, h5, h6': {
        fontFamily: poppins.style.fontFamily,
      },
    },
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