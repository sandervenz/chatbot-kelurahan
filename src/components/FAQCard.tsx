'use client';

import { Box, Heading, Text, Collapse } from "@chakra-ui/react";
import { useState } from "react";

interface FAQCardProps {
  question: string;
  answer: string;
}

export const FAQCard = ({ question, answer }: FAQCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box
      bg="white"
      borderRadius="md"
      border="3px solid"
      borderColor="#8FBC94"
      p={4}
      mb={2}
      transition="all 0.2s"
      _hover={{ shadow: "md" }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        cursor="pointer"
        onClick={() => setIsOpen(!isOpen)}
        role="button"
        aria-expanded={isOpen}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
        }}
      >
        <Heading
          as="h3"
          fontSize={{ base: "md", md: "lg" }}
          fontWeight="bold"
          flex="1"
          pr={4}
        >
          {question}
        </Heading>
        <Box
          as="span"
          fontSize="2xl"
          fontWeight="bold"
          color="gray.600"
          minW="40px"
          textAlign="center"
          userSelect="none"
        >
          {isOpen ? "−" : "+"}
        </Box>
      </Box>

      <Collapse in={isOpen} animateOpacity>
        <Box mt={4} pt={4} borderTop="1px solid" borderColor="gray.200">
          <Text fontSize={{ base: "sm", md: "md" }} lineHeight="1.7" color="gray.700">
            {answer}
          </Text>
        </Box>
      </Collapse>
    </Box>
  );
};
