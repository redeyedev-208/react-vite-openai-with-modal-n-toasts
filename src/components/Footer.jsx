import { Box, Image, Text, Flex } from "@chakra-ui/react";
import logo from '../assets/openai.png';

const Footer = () => {
  return (
    <Box marginTop={50}>
      <Flex justifyContent='center' alignItems='center'>
        <Image src={ logo } marginRight={1} alt="Open AI clockwise logo" />
        <Text>
            Powered by OpenAI
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;