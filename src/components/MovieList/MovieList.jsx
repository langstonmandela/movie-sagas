import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../../redux/actions/movieActions';
import { SimpleGrid, Box, Image, Heading, useColorModeValue, Center, Spinner } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const MoviesList = () => {
  const dispatch = useDispatch();
  const { list: movies, isLoading } = useSelector(state => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const bg = useColorModeValue('gray.50', 'gray.800');
  const color = useColorModeValue('black', 'white');

  if (isLoading) {
    return (
      <Center height="100vh">
        <Spinner size="xl" />
      </Center>
    );
  }

  return (
    <SimpleGrid columns={[2, null, 4]} spacing="40px" p="10">
      {movies.map(movie => (
        <Link to={`/details/${movie.id}`} key={movie.id} style={{ textDecoration: 'none' }}>
          <Box
            boxShadow="md"
            p="5"
            rounded="md"
            bg={bg}
            color={color}
            _hover={{ boxShadow: "xl" }}
            cursor="pointer"
            data-testid="movieItem"
          >
            <Image src={movie.poster} alt={movie.title} borderRadius="md" data-testid="toDetails" />
            <Heading size="md" mt="2">{movie.title}</Heading>
          </Box>
        </Link>
      ))}
    </SimpleGrid>
  );
};

export default MoviesList;
