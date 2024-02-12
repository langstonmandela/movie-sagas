import React, { useState } from 'react';
import { Box, FormControl, FormLabel, Input, Textarea, Button, useToast } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addMovie } from '../../redux/actions/movieActions'; 

const AddMovie = () => {
    const [title, setTitle] = useState('');
    const [poster, setPoster] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    const toast = useToast();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Dispatch the action to add a new movie
        dispatch(addMovie({ title, poster, description }));
        toast({
            title: "Movie added.",
            description: "We've added your movie to the list.",
            status: "success",
            duration: 5000,
            isClosable: true,
        });
        history.push('/'); // Navigate back to the movie list
    };

    return (
        <Box p={4}>
            <form onSubmit={handleSubmit}>
                <FormControl id="movie-title" isRequired>
                    <FormLabel>Title</FormLabel>
                    <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Movie Title" />
                </FormControl>
                <FormControl id="movie-poster" isRequired mt={4}>
                    <FormLabel>Poster URL</FormLabel>
                    <Input value={poster} onChange={(e) => setPoster(e.target.value)} placeholder="http://example.com/poster.jpg" />
                </FormControl>
                <FormControl id="movie-description" isRequired mt={4}>
                    <FormLabel>Description</FormLabel>
                    <Textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Movie Description" />
                </FormControl>
                <Button mt={4} colorScheme="teal" type="submit" disabled={!title || !poster || !description}>
                    Add Movie
                </Button>

                <Button mt={4} ml={2} colorScheme="red" onClick={() => history.push('/')}>Cancel</Button>
            </form>
        </Box>
    );
};

export default AddMovie;
