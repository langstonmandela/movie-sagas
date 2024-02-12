import React from 'react';
import { Box, Flex, Heading, Spacer, IconButton, useColorMode } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';

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
                
                <RouterLink to="/" style={{ marginRight: '16px', color: 'white', textDecoration: 'none' }}>
                    Home
                </RouterLink>
                <RouterLink to="/add" style={{ marginRight: '16px', color: 'white', textDecoration: 'none' }}>
                    Add Movie
                </RouterLink>

                {/* Theme Toggle Button */}
                <IconButton
                    icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
                    onClick={toggleColorMode}
                    colorScheme="teal"
                    variant="outline"
                    size="sm"
                    aria-label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`}
                    mr={4}
                />
            </Box>
        </Flex>
    );
};

export default Header;
