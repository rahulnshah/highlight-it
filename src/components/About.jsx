import React from 'react';
import { Heading, Text, Button, Stack } from '@chakra-ui/react';

const About = () => {
  return (
      <Stack spacing={8} align="center" maxWidth="800px" width="100%" px={4}>
        <Heading id="about">highlight.it</Heading>
        <Text fontSize="xl" textAlign="center">
          A free chrome extension that allows students to save their highlights on any web page.
        </Text>
        <Button as="a" href="https://github.com/rahulnshah/HACKNYU2022Highlighter-Bookmarker-" size="lg" colorScheme="green">
          Download
        </Button>
      </Stack>
  );
};

export default About;
