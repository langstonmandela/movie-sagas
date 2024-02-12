const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// Endpoint to get all movies with their genres
router.get('/', (req, res) => {
  const query = `
    SELECT m.*, array_agg(g.name) AS genres
    FROM movies m
    LEFT JOIN movies_genres mg ON m.id = mg.movie_id
    LEFT JOIN genres g ON mg.genre_id = g.id
    GROUP BY m.id
    ORDER BY m.title ASC;
  `;
  pool.query(query)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.error('ERROR: Get all movies', err);
      res.sendStatus(500);
    });
});

// Endpoint to add a new movie
router.post('/', (req, res) => {
  const { title, poster, description, genre_id } = req.body;
  const insertMovieQuery = `
    INSERT INTO "movies" ("title", "poster", "description")
    VALUES ($1, $2, $3)
    RETURNING "id";
  `;
  pool.query(insertMovieQuery, [title, poster, description])
    .then((result) => {
      const createdMovieId = result.rows[0].id;
      const insertMovieGenreQuery = `
        INSERT INTO "movies_genres" ("movie_id", "genre_id")
        VALUES ($1, $2);
      `;
      pool.query(insertMovieGenreQuery, [createdMovieId, genre_id])
        .then(() => {
          res.sendStatus(201);
        })
        .catch((err) => {
          console.error(err);
          res.sendStatus(500);
        });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

// Endpoint to get details of a specific movie by ID
router.get('/:id', (req, res) => {
  const movieId = req.params.id;
  const query = `
    SELECT m.*, array_agg(g.name) AS genres
    FROM movies m
    LEFT JOIN movies_genres mg ON m.id = mg.movie_id
    LEFT JOIN genres g ON mg.genre_id = g.id
    WHERE m.id = $1
    GROUP BY m.id;
  `;
  pool.query(query, [movieId])
    .then((result) => {
      if (result.rows.length) {
        res.send(result.rows[0]);
      } else {
        res.status(404).send({ message: 'Movie not found' });
      }
    })
    .catch((err) => {
      console.error('ERROR: Get movie details', err);
      res.sendStatus(500);
    });
});

module.exports = router;
