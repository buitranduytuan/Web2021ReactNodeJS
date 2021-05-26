import React from 'react';
import { Box, Flex } from 'rebass';

export default function TestFlexBox({ last }: { last: boolean }) {
  return (
    <Flex>
      {last ? (
        <Box style={{ color: 'red' }}>
          <p>Hello Y</p>
        </Box>
      ) : (
        <Box>
          <p>Hello</p>
        </Box>
      )}
    </Flex>
  );
}
