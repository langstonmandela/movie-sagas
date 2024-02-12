import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Box, Image, Text, Heading, useColorModeValue, Spinner, Button } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../../redux/actions/movieActions';
import loadingReducer from '../../redux/reducers/loading.reducer';
// import { fetchMovieDetails } from '../../redux/actions/movieActions';

const MovieDetails = () => {
    const { id } = useParams();
    const numericId = Number(id);
    console.log("this is the movie ID:", numericId);
    const history = useHistory();
    const dispatch = useDispatch();
    const { list: movies, isLoading } = useSelector(state => state.movies);
    const bg = useColorModeValue('gray.50', 'gray.700');
    
    // useEffect(() => {
    //     // dispatch(fetchMovieDetails(numericId));
    //     console.log('Here are the details:', movies);
    // }, []);

    // useEffect(() => {
    //     dispatch(fetchMovies());
    // }, [dispatch]);

const foundMovie = movies?.find((movie) => Number(movie.id) === numericId);
console.log('FOUND MOVIE:', foundMovie);
    if (isLoading) {
        return (
            <Box textAlign="center" pt="10">
                <Spinner size="xl" />
            </Box>
        );
    }

    return (
        <Box bg={bg} p={5} rounded="md" data-testid="movieDetails">
            <Button onClick={() => history.goBack()} mb={4} data-testid="toList">Back</Button>
            <Heading mb={2}>{foundMovie ? foundMovie.title : 'Movie Not Found'}</Heading>
            {foundMovie && <Image src={foundMovie.poster} alt={foundMovie.title} mb={2} data-testid="toDetails" />}
            <Text fontSize="lg">{foundMovie ? foundMovie.description : 'No description available.'}</Text>
            {foundMovie?.genres && foundMovie.genres.map((genre, index) => (
                <Text key={index}>{genre}</Text>
            ))}
        </Box>
    );
};

export default MovieDetails;
