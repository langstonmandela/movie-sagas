import React from 'react';
import { Box, Flex, Heading, Spacer, Button, useColorMode } from '@chakra-ui/react';

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding={6} bg="teal.500" color="white">
            <Flex align="center" mr={5}>
                <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                    Saga Movie Gallery
                </Heading>
            </Flex>
            <Spacer />
            <Box display="flex" alignItems="center">
                <Button onClick={toggleColorMode} colorScheme="teal" variant="outline" size="sm" mr={4}>
                    {colorMode === 'light' ? 'Dark' : 'Light'} Mode
                </Button>
            </Box>
        </Flex>
    );
};

export default Header;
