import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useQuery } from '@apollo/client';
import { LOAD_CHARACTERS } from './GraphQL/Queries';
import CharacterList from './components/Character/List';


export default function App() {
  const { loading, error, data } = useQuery(LOAD_CHARACTERS);

  if (loading) return <p>Loading...</p>;
  console.log(error);
  if (error) return <p>Something went wrong...</p>;
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Ricky Monty Characters
        </Typography>
        <CharacterList characterData={data.characters.results} />
      </Box>
    </Container>
  );
}