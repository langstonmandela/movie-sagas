import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Image, Text, Heading, useColorModeValue, Spinner } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieDetails } from '../actions/movieActions';

const MovieDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    
    // Use isLoading from Redux state
    const { details: movie, isLoading } = useSelector(state => state.movies);
    const bg = useColorModeValue('gray.50', 'gray.700');
    
    useEffect(() => {
        dispatch(fetchMovieDetails(id));
    }, [dispatch, id]);

    // Show a spinner if isLoading is true
    if (isLoading) {
        return (
            <Box textAlign="center" pt={10}>
                <Spinner size="xl" />
            </Box>
        );
    }

    // Render movie details if not loading and movie data is available
    return (
        <Box bg={bg} p={5} rounded="md">
            <Heading mb={2}>{movie ? movie.title : 'Movie Not Found'}</Heading>
            {movie && <Image src={movie.poster} alt={movie.title} mb={2} />}
            <Text fontSize="lg">{movie ? movie.description : 'No description available.'}</Text>
        </Box>
    );
};

export default MovieDetails;
