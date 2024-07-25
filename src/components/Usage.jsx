import React from 'react';
import {
  Heading,
  List,
  ListItem,
  Stack,
  AspectRatio,
  Card,
  CardBody,
  Text
} from '@chakra-ui/react';

const Usage = () => {
  return (
      <Stack spacing={8} align="center" maxWidth="800px" width="100%" px={4}>
        <List spacing={6} textAlign="center">
          <ListItem>
            <Text fontSize="3xl">1. Select some text.</Text>
          </ListItem>
          <ListItem>
            <Text fontSize="3xl">2. Link it to your webpage.</Text>
          </ListItem>
          <ListItem>
            <Text fontSize="3xl">3. Save or discard it.</Text>
          </ListItem>
        </List>
        <Card maxW="lg" width="100%">
          <CardBody>
            <AspectRatio ratio={16 / 9}>
              <iframe
                src="https://www.youtube.com/embed/8BG7yfL8fzs"
                allowFullScreen
              />
            </AspectRatio>
            <Stack mt={6} spacing={3} textAlign="center">
              <Heading size="md">Demo</Heading>
            </Stack>
          </CardBody>
        </Card>
      </Stack>
  );
};

export default Usage;
