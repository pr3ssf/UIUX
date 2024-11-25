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
        justifyContent="space-evenly" // Равномерное распределение
        w="100%"
        mx="auto"
        gap={4}
      >
        <Text color="gray.400" margin={0} fontSize="sm">
          &copy; 2024 Your Company. All rights reserved.
        </Text>

        <Box display="flex" flexDirection="column" alignItems="center">
          <UnorderedList
            listStyleType="none"
            margin={0}
            padding={0}
            display="flex" // Устанавливаем display flex для размещения в строку
            gap={4} // Устанавливаем промежуток между элементами
            whiteSpace="nowrap" // Предотвращаем перенос текста
          >
            <ListItem>
              <Link href="/privacy" color="brand.10" _hover={{ textDecoration: "underline", color: "brand.100" }} fontSize="sm">
                Privacy Policy
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/terms" color="brand.10" _hover={{ textDecoration: "underline", color: "brand.100" }} fontSize="sm">
                Terms of Service
              </Link>
            </ListItem>
            <ListItem>
              <Text color="gray.400" fontSize="sm"> {/* Добавляем серый текст для Contact Us */}
                Contact Us
              </Text>
            </ListItem>
          </UnorderedList>
        </Box>

        <Box>
          <Link href="https://vk.com" aria-label="VK" color="brand.10" mr={4} _hover={{ textDecoration: "underline", color: "brand.100" }} fontSize="sm">
            VK
          </Link>
          <Link href="https://telegram.org" aria-label="Telegram" color="brand.10" _hover={{ textDecoration: "underline", color: "brand.100" }} fontSize="sm">
            Telegram
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};