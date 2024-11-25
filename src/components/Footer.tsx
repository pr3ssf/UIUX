import { Box, Flex, Text, UnorderedList, ListItem, Link } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Box
      bg="brand.350"
      position="fixed"
      right={0}
      bottom={0}
      w="100%"
      h="70px"
      p="16px"
      boxSizing="border-box"
      display="flex"
      alignItems="center"  // Центрирование содержимого по вертикали
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        alignItems="center"  // Центрирование элементов Flex-контейнера по вертикали
        justifyContent="space-between"
        w="100%"
        mx="auto"
        gap={4}
      >
        <Text color="gray.400" margin={0} >
          &copy; 2024 Your Company. All rights reserved.
        </Text>

        <UnorderedList
          display="flex"
          listStyleType="none"
          margin={0}
          padding={0}
          gap={4}
        >
          <ListItem>
            <Link href="/privacy" color="brand.10" _hover={{ textDecoration: "underline", color: "brand.100" }}>
              Privacy Policy
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/terms" color="brand.10" _hover={{ textDecoration: "underline", color: "brand.100" }}>
              Terms of Service
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/contact" color="brand.10" _hover={{ textDecoration: "underline", color: "brand.100" }}>
              Contact Us
            </Link>
          </ListItem>
        </UnorderedList>

        <Box>
          <Link href="https://twitter.com" aria-label="Twitter" color="brand.10" mr={4} _hover={{ textDecoration: "underline", color: "brand.100" }}>
            Twitter
          </Link>
          <Link href="https://facebook.com" aria-label="Facebook" color="brand.10" _hover={{ textDecoration: "underline", color: "brand.100" }}>
            Facebook
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};
