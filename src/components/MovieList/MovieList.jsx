import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../../actions/movieActions';
import { SimpleGrid, Box, Image, Heading, useColorModeValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom'; 
import { Spinner } from '@chakra-ui/react';


const MoviesList = () => {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies.list);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const bg = useColorModeValue('gray.50', 'gray.800');
  const color = useColorModeValue('black', 'white');

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
          >
            <Image src={movie.poster} alt={movie.title} borderRadius="md"/>
            <Heading size="md" mt="2">{movie.title}</Heading>
          </Box>
        </Link>
      ))}
    </SimpleGrid>
  );
};

export default MoviesList;

