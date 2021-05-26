import React from 'react';
import { Box, Flex, Text } from 'rebass';
import theme from './theme';
import { ThemeProvider } from '@emotion/react';
import TestFlexBox from './test';

export default function RebassTest() {
  return (
    <ThemeProvider theme={theme}>
      <Text fontSize={[3, 4, 5]} fontWeight="bold" color="blue">
        Text
      </Text>
      <TestFlexBox last={true} />
      <Flex flexWrap={['wrap', 'wrap', 'nowrap']} mx={-2} pt={100}>
        <Box px={2} py={2} width={1 / 2}>
          <Text p={1} color="blue" bg="primary">
            1/2
          </Text>
        </Box>
        <Box px={2} py={2} width={1 / 2}>
          <Text p={1} color="background" bg="primary">
            1/2
          </Text>
        </Box>
        <Box px={2} py={2} width={1 / 3}>
          <Text p={1} color="background" bg="primary">
            1/3
          </Text>
        </Box>
        <Box px={2} py={2} width={1 / 3}>
          <Text p={1} color="background" bg="primary">
            1/3
          </Text>
        </Box>
        <Box px={2} py={2} width={1 / 3}>
          <Text p={1} color="background" bg="primary">
            1/3
          </Text>
        </Box>
      </Flex>
    </ThemeProvider>
  );
}
