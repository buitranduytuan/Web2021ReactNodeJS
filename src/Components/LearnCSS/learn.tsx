import React from 'react';
import { Box, Flex, Text } from 'rebass';
import './learnCss.scss';

function LearnCSS() {
  const styleCss = {
    color: 'primary', // theme.colors.primary
    fontSize: 2, // theme.fontSizes[2]
    background: 'red',
    margin: [0, 1, 2],
    '@media screen and (max-width: 40em)': {
      display: 'none',
    },
  };

  return (
    <div className="listNumber">
      <div className="textColor">
        <p>1</p>
      </div>
      <div>
        <p>2</p>
      </div>
      <div>
        <p>3</p>
      </div>
      <div>
        <div>Haha</div>
      </div>
      <div>4</div>
      <Flex p={50} flexWrap="nowrap" sx={styleCss}>
        <Box>
          <Text>TuanBTD</Text>
        </Box>
        <Box>
          <Text>TuanBTD1</Text>
        </Box>
      </Flex>
    </div>
  );
}

export default LearnCSS;
