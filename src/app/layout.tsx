import { Poppins } from 'next/font/google';
import { ChakraWrapper } from '../components/ChakraWrapper';

const poppins = Poppins({ subsets: ['latin'], weight: ['300','400','600','700'], display: 'swap' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ChakraWrapper> 
          {children}
        </ChakraWrapper>
      </body>
    </html>
  );
}