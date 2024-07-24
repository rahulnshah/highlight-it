import {
    Heading, Box, Button, Text, List, Stack,
    ListItem,
    OrderedList,
    Card, CardBody, AspectRatio
} from '@chakra-ui/react'

export default function HomePage() {
    return (
        /*
        About section
        */
        <Box maxW='32rem'>
            <Heading mb={4}>highlight.it</Heading>
            <Text fontSize='xl'>
                A free chrome extension that allows students to save their highlights on any web page.
            </Text>
            <Button size='lg' colorScheme='green' mt='24px'>
                Download
            </Button>
            <Heading mb={4}>Usage</Heading>
            <OrderedList>
                <ListItem>Select some text.</ListItem>
                <ListItem>Link it to your webpage.</ListItem>
                <ListItem>Save or discard it.</ListItem>
            </OrderedList>

            <Card maxW='sm'>
                <CardBody>
                    <AspectRatio >
                        <iframe
                            src='https://www.youtube.com/watch?v=8BG7yfL8fzs'
                            allowFullScreen
                        />
                    </AspectRatio>
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>Demo</Heading>
                    </Stack>
                </CardBody>
            </Card>
        </Box>

    );
}