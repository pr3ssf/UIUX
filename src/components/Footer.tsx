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
      alignItems="center"
      zIndex={1000}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-evenly"
        w="100%"
        mx="auto"
        gap={0}
      >
        {/* Footer Text */}
        <Text color="gray.400" m={0} fontSize="sm">
          &copy; 2024 Your Company. All rights reserved.
        </Text>

        {/* Navigation Links */}
        <Box display="flex" flexDirection="column" alignItems="center">
          <UnorderedList
            listStyleType="none"
            m={0}
            p={0}
            display="flex"
            gap={4}
          >
            <ListItem>
              <Link
                href="/privacy"
                color="brand.10"
                _hover={{ textDecoration: "underline", color: "brand.100" }}
                fontSize="sm"
              >
                Privacy Policy
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="/terms"
                color="brand.10"
                _hover={{ textDecoration: "underline", color: "brand.100" }}
                fontSize="sm"
              >
                Terms of Service
              </Link>
            </ListItem>
            <ListItem>
              <Text color="gray.400" fontSize="sm">
                Contact Us
              </Text>
            </ListItem>
          </UnorderedList>
        </Box>

        {/* Social Media Links */}
        <Box display="flex" flexDirection="column" alignItems="center" gap={0}>
          <Link
            href="https://vk.com"
            aria-label="VK"
            color="brand.10"
            _hover={{ textDecoration: "underline", color: "brand.100" }}
            fontSize="sm"
          >
            VK
          </Link>
          <Link
            href="https://telegram.org"
            aria-label="Telegram"
            color="brand.10"
            _hover={{ textDecoration: "underline", color: "brand.100" }}
            fontSize="sm"
          >
            Telegram
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};
